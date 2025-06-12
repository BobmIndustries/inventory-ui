import React, { useEffect, useState } from "@rbxts/react";
import { Frame } from "./frame";
import { OpenButton } from "./open-button";
import { Players } from "@rbxts/services";
import { createPortal } from "@rbxts/react-roblox";

export function Inventory() {
	const [gui, setGui] = useState<ScreenGui>();

	useEffect(() => {
		const windowGui = Players.LocalPlayer.WaitForChild("PlayerGui").WaitForChild("WindowGui");

		assert(typeIs(windowGui, "Instance") && windowGui.IsA("ScreenGui"));

		setGui(windowGui);
	}, []);

	return (
		<screengui
			key="Inventory"
			ResetOnSpawn={false}
			IgnoreGuiInset={true}
			ZIndexBehavior={Enum.ZIndexBehavior.Sibling}
		>
			{gui && createPortal(<OpenButton />, gui)}

			<Frame />
		</screengui>
	);
}
