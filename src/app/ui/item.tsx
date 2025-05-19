import React from "@rbxts/react";
import { Players } from "@rbxts/services";
import { useItemImage } from "app/hooks/use-item-image";
import { usePx } from "app/hooks/use-px";
import { playSound, soundIds } from "assets/sounds";
import { producer } from "producer";

export function Item({ id, name, stack }: { id: number; name: string; stack: number }) {
	const imageId = useItemImage(id);

	const px = usePx();

	return (
		<frame
			BackgroundColor3={Color3.fromRGB(145, 145, 145)}
			BorderMode={Enum.BorderMode.Middle}
			BorderSizePixel={0}
			Size={new UDim2(0.1, 0, 0.1, 0)}
			ZIndex={10}
		>
			<uiaspectratioconstraint />
			<uistroke ApplyStrokeMode={Enum.ApplyStrokeMode.Border} Color={Color3.fromRGB(52, 52, 52)} Thickness={2}>
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 0, 0)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(255, 170, 0)),
						])
					}
				/>
			</uistroke>
			<textbutton
				AnchorPoint={new Vector2(0.5, 1)}
				BackgroundColor3={Color3.fromRGB(97, 97, 97)}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				Font={Enum.Font.Gotham}
				Position={new UDim2(0.5, 0, 1, -px(5))}
				RichText={true}
				Size={new UDim2(1, -px(10), 0.2, -px(5))}
				Text="Equip"
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
				ZIndex={100}
				Event={{
					MouseButton1Click: () => {
						producer.setSelecting(tostring(Players.LocalPlayer.UserId), id);

						playSound(soundIds.select);
					},
				}}
			>
				<uistroke
					ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
					Color={Color3.fromRGB(165, 165, 165)}
					Thickness={2}
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
				<uicorner />
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 0, 0)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(255, 170, 0)),
						])
					}
				/>
			</textbutton>
			<textlabel
				AnchorPoint={new Vector2(0, 1)}
				BackgroundTransparency={1}
				Font={Enum.Font.GothamBold}
				Position={new UDim2(0, 0, 0.8, 0)}
				RichText={true}
				Size={new UDim2(1, 0, 0.15, 0)}
				Text={tostring(stack)}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextStrokeTransparency={0}
				TextWrapped={true}
				TextXAlignment={Enum.TextXAlignment.Right}
				ZIndex={100}
			/>
			<textlabel
				BackgroundTransparency={1}
				Font={Enum.Font.GothamBold}
				RichText={true}
				Size={new UDim2(1, 0, 0.15, 0)}
				Text={name}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextStrokeTransparency={0}
				TextWrapped={true}
				ZIndex={100}
			/>
			<uigradient
				Color={
					new ColorSequence([
						new ColorSequenceKeypoint(0, Color3.fromRGB(255, 0, 0)),
						new ColorSequenceKeypoint(1, Color3.fromRGB(255, 170, 0)),
					])
				}
			/>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.45)}
				BackgroundTransparency={1}
				Image={imageId}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				ScaleType={Enum.ScaleType.Fit}
				Size={new UDim2(1, 0, 1, 0)}
				ZIndex={10}
			>
				<uicorner />
				<uigradient
					Rotation={90}
					Transparency={
						new NumberSequence([
							new NumberSequenceKeypoint(0, 0, 0),
							new NumberSequenceKeypoint(0.55, 0, 0),
							new NumberSequenceKeypoint(0.723, 1, 0),
							new NumberSequenceKeypoint(1, 1, 0),
						])
					}
				/>
			</imagelabel>
		</frame>
	);
}
