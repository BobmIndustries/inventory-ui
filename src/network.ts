import { Client, createRemotes, remote, Server } from "@rbxts/remo";
import { t } from "@rbxts/t";

export const dataCheck = t.array(
	t.interface({
		id: t.number,
		name: t.string,
		stack: t.number,
	}),
);

export const remotes = createRemotes({
	initInventory: remote<Client, [inventory: string]>(t.string),

	equipItem: remote<Server, [item: number, slot: number]>(t.numberPositive, t.numberConstrained(0, 5)),
	unequipItem: remote<Server, [slot: number]>(t.numberConstrained(0, 5)),
});
