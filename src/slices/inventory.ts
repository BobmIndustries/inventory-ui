import { createProducer } from "@rbxts/reflex";
import { ItemList } from "typedefs";

interface Inventory {
	selecting?: number;

	inventory: Record<number, { name: string; stack: number }>;

	/** Indexed from 0-5 */
	equipped: number[];
}

const INITIAL_STATE: Record<string, Inventory> = {};

export const inventory = createProducer(INITIAL_STATE, {
	addPlayer: (state, player: string) => ({
		...state,
		[player]: {
			inventory: {},
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
		const inventory = {} as Inventory["inventory"];

		for (const item of items) {
			inventory[item.id] = { name: item.name, stack: item.stack };
		}

		return {
			...state,
			[player]: {
				...state[player],
				inventory,
			},
		};
	},

	addItem: (state, player: string, item: { id: number; name: string }, stack: number = 1) => ({
		...state,

		[player]: {
			...state[player],
			inventory: {
				...state[player].inventory,
				[item.id]: { name: item.name, stack: state[player].inventory[item.id].stack ?? 0 + stack },
			},
		},
	}),

	equipItem: (state, player: string, item: number, slot: number) => {
		if (!(item in state[player].inventory)) {
			return state;
		}

		const equipped = [...state[player].equipped];

		equipped[slot] = item;

		return {
			...state,
			[player]: {
				...state[player],
				equipped,
			},
		};
	},

	unequipItem: (state, player: string, slot: number) => {
		const equipped = [...state[player].equipped];

		delete equipped[slot];

		return {
			...state,
			[player]: {
				...state[player],
				equipped,
			},
		};
	},

	removeItem: (state, player: string, item: number, stack: number = 1) => {
		if (!(item in state[player].inventory)) {
			return state;
		}

		const inventory = { ...state[player].inventory };

		if (inventory[item].stack <= stack) {
			delete inventory[item];
		} else {
			inventory[item].stack -= stack;
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
