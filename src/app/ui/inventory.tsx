import React from "@rbxts/react";
import { Frame } from "./frame";
import { OpenButton } from "./open-button";

export function Inventory() {
	return (
		<screengui
			key="Inventory"
			ResetOnSpawn={false}
			IgnoreGuiInset={true}
			ZIndexBehavior={Enum.ZIndexBehavior.Sibling}
		>
			<OpenButton />
			<Frame />
		</screengui>
	);
}
