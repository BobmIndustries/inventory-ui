export type ItemList = Array<{ id: number; name: string; stack: number }>;

export interface ItemConfig extends Configuration {
	itemImage: StringValue;
	itemCategory: StringValue;
}
