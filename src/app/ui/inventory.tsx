import React from "@rbxts/react";
import { Frame } from "./frame";

export function Inventory() {
	return (
		<screengui
			key="Inventory"
			ResetOnSpawn={false}
			IgnoreGuiInset={true}
			ZIndexBehavior={Enum.ZIndexBehavior.Sibling}
		>
			<Frame />
		</screengui>
	);
}
