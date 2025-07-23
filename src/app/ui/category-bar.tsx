import React, { useMemo } from "@rbxts/react";
import { useProducer, useSelector } from "@rbxts/react-reflex";
import { Players } from "@rbxts/services";
import { usePx } from "app/hooks/use-px";
import { getItemToolFromId } from "lib/utils";
import { RootProducer, RootState } from "producer";

export function Category({ category }: { category: string }) {
	const producer = useProducer<RootProducer>();

	const px = usePx();

	return (
		<textbutton
			AutoButtonColor={false}
			TextWrapped={true}
			BorderSizePixel={0}
			BackgroundColor3={Color3.fromRGB(44, 44, 44)}
			Size={new UDim2(0, px(80), 1, 0)}
			FontFace={new Font("rbxassetid://12187360881")}
			TextSize={px(18)}
			TextColor3={Color3.fromRGB(255, 255, 255)}
			Text={category.upper()}
			Event={{
				MouseButton1Click: () => {
					if (
						producer.getState().ui.selectedCategory === undefined ||
						producer.getState().ui.selectedCategory !== category
					) {
						producer.setSelectedCategory(category);
					} else {
						producer.setSelectedCategory(undefined);
					}
				},
			}}
		>
			<uicorner CornerRadius={new UDim(0, px(5))} />
			<uistroke Transparency={0.5} Color={Color3.fromRGB(0, 170, 0)} Thickness={px(2)} />
		</textbutton>
	);
}

export function CategoryBar() {
	const inventory = useSelector(
		(state: RootState) => state.inventory[tostring(Players.LocalPlayer.UserId)].inventory,
	);

	const categories = useMemo(() => {
		const res = new Set<string>();

		// FIXME: O(n^2) time complexity with getItemToolFromId call
		for (const item of inventory) {
			res.add(getItemToolFromId(item.id).itemCategory.Value);
		}

		return res;
	}, [inventory]);

	const elements = useMemo(() => [...categories].map((category) => <Category category={category} />), [categories]);

	const px = usePx();

	return (
		<frame
			BorderSizePixel={0}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			Position={UDim2.fromScale(0.0126, -0.1843)}
			Size={UDim2.fromScale(0.972, 0.104)}
		>
			<textlabel
				BorderSizePixel={0}
				BackgroundTransparency={1}
				FontFace={
					new Font("rbxasset://fonts/families/Ubuntu.json", Enum.FontWeight.Bold, Enum.FontStyle.Normal)
				}
				Text={"[CATEGORIES]—PLACEHOLDER ELEMENT. NOT FINAL AND IS SUBJECT TO CHANGE."}
				TextColor3={Color3.fromRGB(49, 49, 49)}
				Position={new UDim2(0.002, 0, 0, 0)}
				TextSize={px(10)}
				Size={UDim2.fromScale(1, 1)}
			/>
			<uicorner CornerRadius={new UDim(0, px(5))} />
			<uigradient
				Rotation={-90}
				Color={
					new ColorSequence([
						new ColorSequenceKeypoint(0, Color3.fromRGB(18, 18, 18)),
						new ColorSequenceKeypoint(1, Color3.fromRGB(26, 26, 26)),
					])
				}
			/>
			<uistroke Color={Color3.fromRGB(85, 170, 0)} Thickness={px(2)} />
			<scrollingframe
				ScrollingDirection={Enum.ScrollingDirection.X}
				BorderSizePixel={0}
				CanvasSize={new UDim2(0, 0, 1, 0)}
				BackgroundTransparency={1}
				Active={true}
				ScrollBarThickness={0}
				Size={UDim2.fromScale(1, 1)}
				ScrollBarImageColor3={Color3.fromRGB(0, 0, 0)}
				AutomaticCanvasSize={Enum.AutomaticSize.X}
			>
				<uipadding
					PaddingRight={new UDim(0, px(5))}
					PaddingLeft={new UDim(0, px(5))}
					PaddingBottom={new UDim(0, px(5))}
					PaddingTop={new UDim(0, px(5))}
				/>
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					SortOrder={Enum.SortOrder.LayoutOrder}
					Padding={new UDim(0, px(4))}
				/>

				{elements}
			</scrollingframe>
		</frame>
	);
}
