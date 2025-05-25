import React from "@rbxts/react";
import { useProducer } from "@rbxts/react-reflex";
import { playSound, soundIds } from "assets/sounds";
import { RootProducer } from "producer";

export function OpenButton() {
	const producer = useProducer<RootProducer>();

	return (
		<textbutton
			AnchorPoint={new Vector2(0, 1)}
			BackgroundColor3={Color3.fromRGB(100, 100, 100)}
			BorderColor3={Color3.fromRGB(27, 42, 53)}
			ClipsDescendants={true}
			FontFace={new Font("rbxassetid://12187360881")}
			Position={new UDim2(0, 5, 1, -160)}
			Size={new UDim2(0, 220, 0, 35)}
			Text="Inventory"
			TextColor3={Color3.fromRGB(255, 255, 255)}
			TextScaled={true}
			TextSize={18}
			TextStrokeColor3={Color3.fromRGB(40, 41, 45)}
			TextWrapped={true}
			ZIndex={0}
			Event={{
				MouseButton1Click: () => {
					const visible = !producer.getState().ui.visible;

					producer.setVisible(visible);

					const sound = playSound(soundIds.open);

					if (!visible) {
						const effect = new Instance("PitchShiftSoundEffect");

						effect.Octave = 0.85;
						effect.Parent = sound;
					}
				},
			}}
		>
			<uipadding
				PaddingBottom={new UDim(0.1, 0)}
				PaddingLeft={new UDim(0.1, 0)}
				PaddingRight={new UDim(0.1, 0)}
				PaddingTop={new UDim(0.1, 0)}
			/>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BackgroundTransparency={1.01}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				Image="rbxassetid://300134974"
				ImageTransparency={0.97}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				ScaleType={Enum.ScaleType.Tile}
				Size={new UDim2(2, 0, 2, 0)}
				SliceCenter={new Rect(0, 256, 0, 256)}
				TileSize={new UDim2(0, 30, 0, 30)}
				ZIndex={9}
			/>
			<uigradient
				Color={
					new ColorSequence([
						new ColorSequenceKeypoint(0, Color3.fromRGB(255, 0, 0)),
						new ColorSequenceKeypoint(1, Color3.fromRGB(255, 170, 0)),
					])
				}
			/>
			<uistroke
				ApplyStrokeMode={Enum.ApplyStrokeMode.Border}
				Color={Color3.fromRGB(165, 165, 165)}
				LineJoinMode={Enum.LineJoinMode.Miter}
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
		</textbutton>
	);
}
