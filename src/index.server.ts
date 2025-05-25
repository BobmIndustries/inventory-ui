import { HttpService, Players, ReplicatedStorage } from "@rbxts/services";
import { promiseTree } from "@rbxts/validate-tree";
import { dataCheck, remotes } from "network";
import { producer } from "producer";
import { PlayerTree } from "tree-definitions";

function parseData(player: Player, json: string) {
	const data = HttpService.JSONDecode(json);

	if (!dataCheck(data)) {
		warn(`[INVENTORY] Player ${player} Data_Folder.InvData.Value mismatch`);
		return;
	}

	producer.setInventory(tostring(player.UserId), data);

	remotes.initInventory(player, json);
}

function findTool(root: Instance, toolId: number) {
	for (const child of root.GetChildren()) {
		const id = child.GetAttribute("id");

		if (!typeIs(id, "number")) {
			continue;
		}

		if (id === toolId) {
			return child;
		}
	}
}

Players.PlayerAdded.Connect((player) => {
	producer.addPlayer(tostring(player.UserId));

	promiseTree(player, PlayerTree).then((player) => {
		parseData(player, player.Data_Folder.InvData.Value);

		player.Data_Folder.InvData.GetPropertyChangedSignal("Value").Connect(() =>
			parseData(player, player.Data_Folder.InvData.Value),
		);
	});
});

remotes.equipItem.connect((player, item) => {
	const { inventory, equipped } = producer.getState((state) => state.inventory[tostring(player.UserId)]);

	if (equipped.includes(item)) {
		return;
	}

	const index = inventory.findIndex(({ id }) => id === item);

	if (index === -1) {
		return;
	}

	const tool = findTool(ReplicatedStorage.items, item)?.Clone();

	assert(tool, `Tool ${item} not found in ReplicatedStorage.items`);

	producer.equipItem(tostring(player.UserId), item);

	const backpack = player.FindFirstChild("Backpack") as Backpack;

	assert(backpack, `Player ${player} does not have a backpack`);

	tool.Parent = backpack;
});

remotes.unequipItem.connect((player, item) => {
	const { equipped } = producer.getState((state) => state.inventory[tostring(player.UserId)]);

	if (!equipped.includes(item)) {
		return;
	}

	if (!player.Character) {
		return;
	}

	if (item === -1) {
		return;
	}

	const backpack = player.FindFirstChild("Backpack") as Backpack;

	assert(backpack);

	let tool = findTool(backpack, item);

	if (!tool) {
		tool = findTool(player.Character, item);
	}

	tool?.Destroy();

	producer.unequipItem(tostring(player.UserId), item);
});
