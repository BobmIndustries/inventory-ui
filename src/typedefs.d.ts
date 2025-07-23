export type ItemList = Array<{ id: number; name: string; stack: number }>;

export interface ItemTool extends Tool {
	itemImage: StringValue;
	itemCategory: StringValue;
}
