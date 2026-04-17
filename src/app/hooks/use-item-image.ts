import { useEffect, useState } from "@rbxts/react";
import { getItemConfigFromId } from "lib/utils";

export function useItemImage(id: number) {
	const [imageId, setImageId] = useState<string>();

	useEffect(() => {
		if (id === -1) {
			setImageId(undefined);
			return;
		}

		const item = getItemConfigFromId(id);

		setImageId(item.itemImage.Value);
	}, [id]);

	return imageId;
}
