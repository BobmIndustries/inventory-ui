import React from "@rbxts/react";
import { useProducer } from "@rbxts/react-reflex";
import { usePx } from "app/hooks/use-px";
// import { playSound, soundIds } from "assets/sounds";
import { RootProducer } from "producer";

export function OpenButton() {
	const producer = useProducer<RootProducer>();

	const px = usePx();

	return (
		<imagebutton
			AnchorPoint={new Vector2(1, 1)}
			BackgroundColor3={Color3.fromRGB(0, 85, 0)}
			BorderSizePixel={0}
			Position={new UDim2(1, -120, 1, -160)}
			Size={new UDim2(0, 50, 0, 50)}
			Image={"rbxassetid://95086078551706"}
			Event={{
				MouseButton1Click: () => {
					const visible = !producer.getState().ui.visible;

					producer.setVisible(visible);

					// const sound = playSound(soundIds.open);
					//
					// if (!visible) {
					// 	const effect = new Instance("PitchShiftSoundEffect");
					//
					// 	effect.Octave = 0.85;
					// 	effect.Parent = sound;
					// }
				},
			}}
		>
			<uigradient
				Color={
					new ColorSequence([
						new ColorSequenceKeypoint(0, Color3.fromRGB(131, 131, 131)),
						new ColorSequenceKeypoint(1, Color3.fromRGB(255, 255, 255)),
					])
				}
				Rotation={90}
			/>
			<uipadding PaddingBottom={new UDim(0, 5)} PaddingTop={new UDim(0, 5)} />
			<uistroke ApplyStrokeMode={Enum.ApplyStrokeMode.Border} Color={Color3.fromRGB(165, 165, 165)} Thickness={2}>
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(85, 255, 127)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(255, 170, 0)),
						])
					}
					Rotation={-90}
				/>
			</uistroke>
			<uicorner CornerRadius={new UDim(0, 5)} />
		</imagebutton>
	);
}
