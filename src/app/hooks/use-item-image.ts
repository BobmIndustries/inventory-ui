import { useEffect, useState } from "@rbxts/react";
import { ReplicatedStorage } from "@rbxts/services";
import { ItemTool } from "typedefs";

export function useItemImage(id?: number) {
	const [imageId, setImageId] = useState<string>();

	useEffect(() => {
		if (id === -1) {
			setImageId(undefined);
			return;
		}

		for (const item of ReplicatedStorage.items.GetChildren()) {
			if (!item.IsA("Tool")) {
				continue;
			}

			const itemId = item.GetAttribute("id");

			if (!typeIs(itemId, "number")) {
				continue;
			}

			if (itemId === id) {
				setImageId((item as ItemTool).itemImage.Value);
				break;
			}
		}
	}, [id]);

	return imageId;
}
