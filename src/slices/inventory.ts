import Object from "@rbxts/object-utils";
import { createProducer, createSelector } from "@rbxts/reflex";
import { RootState } from "producer";
import { ItemList } from "typedefs";

interface Inventory {
	selecting?: number;

	inventory: ItemList;

	/** Indexed from 0-5 */
	equipped: number[];
}

const INITIAL_STATE: Record<string, Inventory> = {};

/** Returns the index of the item in `inventory`, else -1 if not found */
export const selectItemFromId = (player: string, id: number) =>
	createSelector(
		(state: RootState) => state.inventory[player].inventory,
		(list) => list.findIndex((item) => item.id === id),
	);

export const inventory = createProducer(INITIAL_STATE, {
	addPlayer: (state, player: string) => ({
		...state,
		[player]: {
			inventory: [],
			equipped: [],
		},
	}),

	setSelecting: (state, player: string, selecting: number) => ({
		...state,
		[player]: {
			...state[player],
			selecting,
		},
	}),

	clearSelecting: (state, player: string) => ({
		...state,
		[player]: {
			...state[player],
			selecting: undefined,
		},
	}),

	setInventory: (state, player: string, items: ItemList) => {
		return {
			...state,
			[player]: {
				...state[player],
				inventory: Object.deepCopy(items),
			},
		};
	},

	addItem: (state, player: string, item: { id: number; name: string }, stack: number = 1) => {
		const inventory = [...state[player].inventory];
		const index = state[player].inventory.findIndex(({ id }) => item.id === id);

		if (index !== -1) {
			inventory[index] = { id: item.id, name: item.name, stack: state[player].inventory[item.id].stack + stack };
		} else {
			inventory.push({ id: item.id, name: item.name, stack });
		}

		return {
			...state,
			[player]: {
				...state[player],
				inventory,
			},
		};
	},

	equipItem: (state, player: string, item: number) => {
		const index = state[player].inventory.findIndex(({ id }) => item === id);

		if (index === -1) {
			return state;
		}

		const equipped = [...state[player].equipped];

		equipped.push(item);

		return {
			...state,
			[player]: {
				...state[player],
				equipped,
			},
		};
	},

	unequipItem: (state, player: string, item: number) => {
		const index = state[player].equipped.findIndex((id) => id === item);

		if (index === -1) {
			return state;
		}

		const equipped = [...state[player].equipped];

		equipped.remove(index);

		return {
			...state,
			[player]: {
				...state[player],
				equipped,
			},
		};
	},

	removeItem: (state, player: string, item: number, stack: number = 1) => {
		const index = state[player].inventory.findIndex(({ id }) => item === id);

		if (index === -1) {
			return state;
		}

		const inventory = [...state[player].inventory];

		if (inventory[index].stack <= stack) {
			delete inventory[index];
		} else {
			inventory[index].stack -= stack;
		}

		return {
			...state,
			[player]: {
				...state[player],
				inventory,
			},
		};
	},
});
