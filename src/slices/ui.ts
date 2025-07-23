import { createProducer } from "@rbxts/reflex";

interface InitialState {
	visible: boolean;
	search: string;
	selectedCategory?: string;
}

const INITIAL_STATE: InitialState = {
	visible: false,
	search: "",
};

export const ui = createProducer(INITIAL_STATE, {
	setVisible: (state, visible: boolean) => ({ ...state, visible }),
	setSearch: (state, search: string) => ({ ...state, search }),
	setSelectedCategory: (state, selectedCategory?: string) => ({ ...state, selectedCategory }),
});
