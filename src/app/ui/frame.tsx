import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useMemo } from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { RootState } from "producer";
import { OpenButton } from "./open-button";
import { Slots } from "./slots";
import { Players } from "@rbxts/services";
import { Item } from "./item";
import { ItemList } from "typedefs";

export function Frame() {
	const visible = useSelector((state: RootState) => state.visible);
	const inventory = useSelector(
		(state: RootState) => state.inventory[tostring(Players.LocalPlayer.UserId)]?.inventory,
	);
	const equipped = useSelector((state: RootState) => state.inventory[tostring(Players.LocalPlayer.UserId)]?.equipped);

	const [posScale, posMotion] = useMotion(0);

	const items = useMemo(() => {
		const items: ItemList = [];

		// If the player's inventory hasn't been added into the producer, just return an empty list
		if (!inventory) {
			return items;
		}

		for (const { id, name, stack } of inventory) {
			let stackDisplay = stack;

			for (const equip of equipped) {
				if (equip === id) {
					stackDisplay--;
				}
			}

			if (stackDisplay < 1) {
				continue;
			}

			items.push({ id, name, stack: stackDisplay });
		}

		return items;
	}, [inventory, equipped]);

	useEffect(() => {
		posMotion.tween(visible ? 1 : 0, {
			time: 0.5,
		});
	}, [visible]);

	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)}>
			<OpenButton />
			<Slots />

			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BorderSizePixel={0}
				Position={posScale.map((scale) => new UDim2(0.5, 0, -1, 0).Lerp(UDim2.fromScale(0.5, 0.5), scale))}
				Size={new UDim2(0.5, 0, 0.5, 0)}
			>
				<uistroke
					ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
					Color={Color3.fromRGB(165, 165, 165)}
					LineJoinMode={Enum.LineJoinMode.Miter}
					Thickness={3}
				>
					<uigradient
						Color={
							new ColorSequence([
								new ColorSequenceKeypoint(0, Color3.fromRGB(255, 0, 0)),
								new ColorSequenceKeypoint(1, Color3.fromRGB(255, 170, 0)),
							])
						}
					/>
				</uistroke>
				<scrollingframe
					Active={true}
					AnchorPoint={new Vector2(0.5, 0.5)}
					AutomaticCanvasSize={Enum.AutomaticSize.Y}
					BackgroundTransparency={1}
					CanvasSize={new UDim2(0, 0, 6, 0)}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					ScrollBarImageColor3={Color3.fromRGB(0, 0, 0)}
					ScrollingDirection={Enum.ScrollingDirection.Y}
					Size={new UDim2(0.9500000000000001, 0, 0.9, 0)}
					ZIndex={4}
				>
					<uigridlayout
						CellPadding={new UDim2(0, 10, 0, 10)}
						CellSize={new UDim2(0, 150, 0, 150)}
						HorizontalAlignment={Enum.HorizontalAlignment.Center}
						SortOrder={Enum.SortOrder.LayoutOrder}
					/>
					<uipadding
						PaddingBottom={new UDim(0, 5)}
						PaddingLeft={new UDim(0, 5)}
						PaddingRight={new UDim(0, 5)}
						PaddingTop={new UDim(0, 5)}
					/>

					{items.map(({ id, name, stack }) => (
						<Item id={id} name={name} stack={stack} />
					))}
				</scrollingframe>
				<imagelabel
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1.01}
					BorderColor3={Color3.fromRGB(27, 42, 53)}
					Image="rbxassetid://300134974"
					ImageColor3={Color3.fromRGB(0, 0, 0)}
					ImageTransparency={0.97}
					ScaleType={Enum.ScaleType.Tile}
					Size={new UDim2(1, 0, 1, 0)}
					SliceCenter={new Rect(0, 256, 0, 256)}
					TileSize={new UDim2(0, 30, 0, 30)}
					ZIndex={2}
				/>
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 0, 0)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(255, 170, 0)),
						])
					}
				/>
				<frame
					AnchorPoint={new Vector2(0.5, 1)}
					BackgroundColor3={Color3.fromRGB(200, 200, 200)}
					BorderColor3={Color3.fromRGB(27, 42, 53)}
					ClipsDescendants={true}
					Position={new UDim2(0.5, 0, 0, 0)}
					Size={new UDim2(0.25, 0, 0.1, 0)}
					ZIndex={6}
				>
					<uipadding
						PaddingBottom={new UDim(0.1, 0)}
						PaddingLeft={new UDim(0.1, 0)}
						PaddingRight={new UDim(0.1, 0)}
						PaddingTop={new UDim(0.1, 0)}
					/>
					<uistroke
						ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
						Color={Color3.fromRGB(165, 165, 165)}
						LineJoinMode={Enum.LineJoinMode.Miter}
						Thickness={3}
					>
						<uigradient
							Color={
								new ColorSequence([
									new ColorSequenceKeypoint(0, Color3.fromRGB(255, 0, 0)),
									new ColorSequenceKeypoint(1, Color3.fromRGB(255, 170, 0)),
								])
							}
						/>
					</uistroke>
					<textlabel
						BackgroundTransparency={1}
						Font={Enum.Font.GothamBold}
						Size={new UDim2(1, 0, 1, 0)}
						Text="Inventory"
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextScaled={true}
						TextSize={14}
						TextWrapped={true}
					/>
					<uigradient
						Color={
							new ColorSequence([
								new ColorSequenceKeypoint(0, Color3.fromRGB(255, 0, 0)),
								new ColorSequenceKeypoint(1, Color3.fromRGB(255, 170, 0)),
							])
						}
					/>
				</frame>
			</frame>
		</frame>
	);
}
