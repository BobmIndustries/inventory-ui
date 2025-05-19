import React, { StrictMode } from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { HttpService, Players } from "@rbxts/services";
import { producer } from "../producer";
import { Inventory } from "./ui/inventory";
import { dataCheck, remotes } from "network";

function parseData(json: string) {
	const data = HttpService.JSONDecode(json);

	if (!dataCheck(data)) {
		warn(`[INVENTORY] Player ${Players.LocalPlayer} Data_Folder.InvData.Value mismatch`);
		return;
	}

	producer.setInventory(tostring(Players.LocalPlayer.UserId), data);
}

producer.addPlayer(tostring(Players.LocalPlayer.UserId));

remotes.initInventory.connect((inventory) => parseData(inventory));

const app = (
	<ReflexProvider producer={producer}>
		<Inventory />
	</ReflexProvider>
);

const root = createRoot(new Instance("Folder"));

const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;

root.render(<StrictMode>{createPortal(app, playerGui)}</StrictMode>);
print("[INVENTORY] React render inventory");
