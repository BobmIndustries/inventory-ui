import React from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { Players } from "@rbxts/services";
import { useItemImage } from "app/hooks/use-item-image";
import { usePx } from "app/hooks/use-px";
import { playSound, soundIds } from "assets/sounds";
import { producer, RootState } from "producer";
import { AnimatedButton } from "./animated-button";

export function Item({ id, stack }: { id: number; stack: number }) {
	const equipped = useSelector((state: RootState) => state.inventory[tostring(Players.LocalPlayer.UserId)]?.equipped);

	const imageId = useItemImage(id);

	const px = usePx();

	return (
		<AnimatedButton
			Active={false}
			BackgroundTransparency={1}
			Selectable={false}
			Size={new UDim2(0, px(180), 0, px(180))}
			Event={{
				MouseButton1Click: () => {
					playSound(soundIds.equip);

					producer.setSelecting(tostring(Players.LocalPlayer.UserId), id);
				},
			}}
		>
			<imagelabel BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)} Image={imageId} ZIndex={2} />
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BorderSizePixel={0}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(1, 0, 1, 0)}
			>
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(31, 31, 31)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(47, 47, 47)),
						])
					}
					Rotation={-90}
				/>
				<uicorner CornerRadius={new UDim(0.1, 0)} />
			</frame>
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BorderSizePixel={0}
				ClipsDescendants={true}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(1, 0, 1, 0)}
				Visible={equipped.includes(id)}
			>
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(31, 31, 31)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(47, 47, 47)),
						])
					}
					Rotation={-90}
				/>
				<uicorner CornerRadius={new UDim(0.1, 0)} />
				<uistroke Color={Color3.fromRGB(85, 255, 0)} Thickness={2} />
				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Image="rbxassetid://14836640230"
					ImageTransparency={0.9500000000000001}
					Position={new UDim2(0.135, 0, 0.332, 0)}
					Size={new UDim2(0, 334, 0, 282)}
				/>
			</frame>
			<textlabel
				AnchorPoint={new Vector2(1, 1)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://12187360881")}
				Position={new UDim2(1, -10, 1, 0)}
				Size={new UDim2(0.4, 0, 0.2, 0)}
				Text={tostring(stack)}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextSize={30}
				TextWrapped={true}
				TextXAlignment={Enum.TextXAlignment.Right}
			>
				<uistroke Thickness={2} />
			</textlabel>
		</AnimatedButton>
	);
}
