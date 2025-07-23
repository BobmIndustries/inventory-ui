import { ReplicatedStorage } from "@rbxts/services";
import { ItemTool } from "typedefs";

export function getItemToolFromId(id: number) {
	for (const item of ReplicatedStorage.items.GetChildren()) {
		if (!item.IsA("Tool")) {
			continue;
		}

		const itemId = item.GetAttribute("id");

		if (!typeIs(itemId, "number")) {
			continue;
		}

		if (itemId === id) {
			return item as ItemTool;
		}
	}

	throw `Could not find item with id ${id}`;
}
