import { ReplicatedStorage } from "@rbxts/services";
import { ItemConfig } from "typedefs";

export function getItemConfigFromId(id: number) {
	for (const item of ReplicatedStorage.items.GetChildren()) {
		if (!item.IsA("Configuration")) {
			continue;
		}

		const itemId = item.GetAttribute("id");

		if (!typeIs(itemId, "number")) {
			continue;
		}

		if (itemId === id) {
			return item as ItemConfig;
		}
	}

	throw `Could not find item with id ${id}`;
}
