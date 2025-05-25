import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useMemo } from "@rbxts/react";
import { useSelector, useSelectorCreator } from "@rbxts/react-reflex";
import { producer, RootState } from "producer";
import { Players } from "@rbxts/services";
import { Item } from "./item";
import { ItemList } from "typedefs";
import { Context } from "@rbxts/gamejoy";
import { TitleBar } from "./title-bar";
import { selectItemFromId } from "slices/inventory";
import { remotes } from "network";
import { AnimatedButton } from "./animated-button";
import { useItemImage } from "app/hooks/use-item-image";

export function Frame() {
	const visible = useSelector((state: RootState) => state.ui.visible);
	const search = useSelector((state: RootState) => state.ui.search);
	const inventory = useSelector(
		(state: RootState) => state.inventory[tostring(Players.LocalPlayer.UserId)]?.inventory,
	);
	const equipped = useSelector((state: RootState) => state.inventory[tostring(Players.LocalPlayer.UserId)]?.equipped);
	const selecting = useSelector(
		(state: RootState) => state.inventory[tostring(Players.LocalPlayer.UserId)]?.selecting,
	);
	const selectingIndex = useSelectorCreator(selectItemFromId, tostring(Players.LocalPlayer.UserId), selecting ?? -1);

	const imageId = useItemImage(selecting ?? -1);

	const [sizeScale, sizeMotion] = useMotion(0);

	const items = useMemo(() => {
		const equippedItems: ItemList = [];
		const items: ItemList = [];

		// If the player's inventory hasn't been added into the producer, just return an empty list
		if (!inventory) {
			return items;
		}

		if (search.size() > 0) {
			for (const { id, name, stack } of inventory) {
				if (name.lower().sub(1, search.size()) === search.lower()) {
					items.push({ id, name, stack });
				}
			}

			return items;
		}

		for (const { id, name, stack } of inventory) {
			if (equipped.includes(id)) {
				equippedItems.push({ id, name, stack });
				continue;
			}

			items.push({ id, name, stack });
		}

		items.sort(({ name: name1 }, { name: name2 }) => name1 < name2);

		return [...equippedItems, ...items];
	}, [inventory, equipped, search]);

	useEffect(() => {
		sizeMotion.spring(visible ? 1 : 0, {
			tension: 300,
		});
	}, [visible]);

	useEffect(() => {
		const context = new Context({
			Process: false,
		});

		context.Bind("E", () => {
			producer.setVisible(!producer.getState((state) => state.ui.visible));
		});

		return () => {
			context.UnbindAll();
		};
	}, []);

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(0.7, 0.7)}
		>
			<uiaspectratioconstraint AspectRatio={1.466} />
			<TitleBar />
			<uiscale Scale={sizeScale} />
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BorderSizePixel={0}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(0.971, 0, 0.9, 0)}
				ZIndex={5}
			>
				<imagebutton
					Active={false}
					AnchorPoint={new Vector2(1, 1)}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BorderSizePixel={0}
					Position={new UDim2(1, 0, 1, 0)}
					Selectable={false}
					Size={new UDim2(0.15, 0, 0.15, 0)}
				>
					<uicorner CornerRadius={new UDim(1, 0)} />
					<uigradient
						Color={
							new ColorSequence([
								new ColorSequenceKeypoint(0, Color3.fromRGB(171, 68, 65)),
								new ColorSequenceKeypoint(1, Color3.fromRGB(181, 98, 95)),
							])
						}
						Rotation={-90}
					/>
					<uiaspectratioconstraint AspectRatio={3} />
					<textbutton
						AnchorPoint={new Vector2(0.5, 0.5)}
						BackgroundTransparency={1}
						FontFace={new Font("rbxassetid://12187360881")}
						Position={new UDim2(0.5, 0, 0.5, 0)}
						Size={new UDim2(0.8, 0, 0.6, 0)}
						Text="CLOSE"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextScaled={true}
						TextSize={14}
						TextWrapped={true}
						Event={{
							MouseButton1Click: () => {
								producer.setVisible(false);
							},
						}}
					>
						<uistroke Thickness={2} />
					</textbutton>
					<uistroke Color={Color3.fromRGB(95, 43, 42)} Thickness={2} />
				</imagebutton>
				<uicorner CornerRadius={new UDim(0, 5)} />
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(18, 18, 18)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(26, 26, 26)),
						])
					}
					Rotation={-90}
				/>
				<uistroke Color={Color3.fromRGB(85, 170, 0)} Thickness={2} />
				<scrollingframe
					Active={true}
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Position={new UDim2(0.317, 0, 0.422, 0)}
					ScrollBarImageColor3={Color3.fromRGB(74, 74, 74)}
					Size={new UDim2(0.5760000000000001, 0, 0.761, 0)}
				>
					<uigridlayout
						CellPadding={new UDim2(0.025, 0, 0.01, 0)}
						CellSize={new UDim2(0.302, 0, 0.134, 0)}
						SortOrder={Enum.SortOrder.LayoutOrder}
					/>
					<uiaspectratioconstraint AspectRatio={1.173} />
					<uipadding
						PaddingLeft={new UDim(0.01, 0)}
						PaddingRight={new UDim(0.01, 0)}
						PaddingTop={new UDim(0.005, 0)}
					/>

					{items.mapFiltered(({ id, stack }) => (
						<Item id={id} stack={stack} />
					))}
				</scrollingframe>
				<frame
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BorderSizePixel={0}
					Position={new UDim2(0.795, 0, 0.43, 0)}
					Size={new UDim2(0.355, 0, 0.758, 0)}
				>
					<uicorner CornerRadius={new UDim(0.05, 0)} />
					<uigradient
						Color={
							new ColorSequence([
								new ColorSequenceKeypoint(0, Color3.fromRGB(31, 31, 31)),
								new ColorSequenceKeypoint(1, Color3.fromRGB(47, 47, 47)),
							])
						}
						Rotation={-90}
					/>
					<imagelabel
						AnchorPoint={new Vector2(0.5, 0.5)}
						BackgroundTransparency={1}
						Size={UDim2.fromScale(0.5, 0.5)}
						Position={UDim2.fromScale(0.5, 0.5)}
						Image={imageId}
						ZIndex={2}
					>
						<uiaspectratioconstraint AspectRatio={1} />
					</imagelabel>
					<textlabel
						AnchorPoint={new Vector2(0.5, 0)}
						BackgroundTransparency={1}
						FontFace={new Font("rbxassetid://12187360881")}
						Position={new UDim2(0.5, 0, 0, 0)}
						Size={new UDim2(1, 0, 0.063, 0)}
						Text={selectingIndex !== -1 ? inventory[selectingIndex].name : ""}
						TextColor3={Color3.fromRGB(244, 244, 244)}
						TextScaled={true}
						TextSize={14}
						TextWrapped={true}
					>
						<uistroke Thickness={2} />
					</textlabel>
					<AnimatedButton
						Active={false}
						AnchorPoint={new Vector2(0.5, 1)}
						BackgroundColor3={Color3.fromRGB(78, 203, 112)}
						BorderSizePixel={0}
						ClipsDescendants={true}
						Position={new UDim2(0.5, 0, 1, 0)}
						Selectable={false}
						Size={new UDim2(1, 0, 0.1, 0)}
						Event={{
							MouseButton1Click: () => {
								if (equipped.size() >= 9) {
									return;
								}

								if (selecting === undefined) {
									return;
								}

								if (equipped.includes(selecting)) {
									producer.unequipItem(tostring(Players.LocalPlayer.UserId), selecting);

									remotes.unequipItem(selecting);
									return;
								}

								producer.equipItem(tostring(Players.LocalPlayer.UserId), selecting);

								remotes.equipItem(selecting);
							},
						}}
					>
						<uicorner CornerRadius={new UDim(0.2, 0)} />
						<imagelabel
							AnchorPoint={new Vector2(0.5, 0.5)}
							BackgroundTransparency={1}
							Image="rbxassetid://14841319882"
							ImageColor3={Color3.fromRGB(0, 0, 0)}
							ImageTransparency={0.25}
							Position={new UDim2(0.552, 0, 0.644, 0)}
							Size={new UDim2(0, 331, 0, 72)}
						/>
						<textlabel
							AnchorPoint={new Vector2(0.5, 0.5)}
							BackgroundTransparency={1}
							FontFace={new Font("rbxassetid://12187360881")}
							Position={new UDim2(0.5, 0, 0.5, 0)}
							Size={new UDim2(0.8, 0, 0.7000000000000001, 0)}
							Text={selecting && equipped.includes(selecting) ? "UNEQUIP" : "EQUIP"}
							TextColor3={Color3.fromRGB(244, 244, 244)}
							TextScaled={true}
							TextSize={14}
							TextWrapped={true}
						>
							<uistroke Thickness={2} />
						</textlabel>
						<uistroke Color={Color3.fromRGB(40, 104, 57)} Thickness={2} Transparency={0.5} />
					</AnimatedButton>
					<uipadding
						PaddingBottom={new UDim(0.04, 0)}
						PaddingLeft={new UDim(0.06, 0)}
						PaddingRight={new UDim(0.06, 0)}
						PaddingTop={new UDim(0.04, 0)}
					/>
				</frame>
				<frame
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundColor3={Color3.fromRGB(103, 103, 103)}
					BorderSizePixel={0}
					Position={new UDim2(0.503, 0, 0.837, 0)}
					Size={new UDim2(0.9380000000000001, 0, 0.004, 0)}
					ZIndex={10}
				>
					<uigradient
						Transparency={
							new NumberSequence([
								new NumberSequenceKeypoint(0, 1, 0),
								new NumberSequenceKeypoint(0.05, 1, 0),
								new NumberSequenceKeypoint(0.3, 0, 0),
								new NumberSequenceKeypoint(0.7000000000000001, 0, 0),
								new NumberSequenceKeypoint(0.9500000000000001, 1, 0),
								new NumberSequenceKeypoint(1, 1, 0),
							])
						}
					/>
				</frame>
				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Image="rbxassetid://14841461336"
					ImageColor3={Color3.fromRGB(59, 59, 59)}
					Position={new UDim2(0.5, 0, 0.841, 0)}
					Size={new UDim2(0.996, 0, 0.317, 0)}
					ZIndex={0}
				>
					<uiaspectratioconstraint AspectRatio={4.873} />
				</imagelabel>
				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					FontFace={new Font("rbxassetid://12187360881")}
					Position={new UDim2(0.5, 0, 0.925, 0)}
					RichText={true}
					Size={new UDim2(0.8, 0, 0.05, 0)}
					Text="You can only equip <b>9</b> items at a time"
					TextColor3={Color3.fromRGB(113, 113, 113)}
					TextScaled={true}
					TextSize={22}
					TextWrapped={true}
					ZIndex={5}
				/>
				<uipadding
					PaddingBottom={new UDim(0.03, 0)}
					PaddingLeft={new UDim(0.017, 0)}
					PaddingRight={new UDim(0.017, 0)}
					PaddingTop={new UDim(0.03, 0)}
				/>
				<frame
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundColor3={Color3.fromRGB(20, 20, 20)}
					BorderSizePixel={0}
					Position={new UDim2(0.304, 0, 0.548, 0)}
					Size={new UDim2(0.54, 0, 0.522, 0)}
				>
					<uigradient
						Rotation={-90}
						Transparency={
							new NumberSequence([
								new NumberSequenceKeypoint(0, 0, 0),
								new NumberSequenceKeypoint(0.218, 0, 0),
								new NumberSequenceKeypoint(1, 1, 0),
							])
						}
					/>
				</frame>
			</frame>
		</frame>
	);
}
