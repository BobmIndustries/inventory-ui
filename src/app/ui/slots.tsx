import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useState } from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { Players } from "@rbxts/services";
import { useItemImage } from "app/hooks/use-item-image";
import { usePx } from "app/hooks/use-px";
import { playSound, soundIds } from "assets/sounds";
import { remotes } from "network";
import { producer, RootState } from "producer";

function Slot({ slot }: { slot: number }) {
	const selecting = useSelector(
		(state: RootState) => state.inventory[tostring(Players.LocalPlayer.UserId)]?.selecting,
	);

	const equipped = useSelector((state: RootState) => state.inventory[tostring(Players.LocalPlayer.UserId)]?.equipped);

	const [hover, setHover] = useState(false);
	const [hoverScale, hoverMotion] = useMotion(0);

	const imageId = useItemImage(equipped[slot]);

	const px = usePx();

	useEffect(() => {
		if (hover) {
			hoverMotion.tween(1, {
				time: 0.1,
			});
		} else {
			hoverMotion.tween(0, {
				time: 0.1,
			});
		}
	}, [hover]);

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.1)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderColor3={Color3.fromRGB(27, 42, 53)}
			LayoutOrder={2}
			Position={new UDim2(0.11, 0, 0.45, 0)}
			Size={hoverScale.map((scale) => new UDim2(0.6, 0, 0.6, 0).Lerp(UDim2.fromScale(0.65, 0.65), scale))}
		>
			<textlabel
				BackgroundTransparency={1}
				Font={Enum.Font.GothamBold}
				Position={new UDim2(-0.067, 0, -0.294, 0)}
				RichText={true}
				Size={new UDim2(1.123, 0, 0.201, 0)}
				Text={`Slot ${slot + 1}`}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={px(6)}
				TextWrapped={true}
			/>
			<imagebutton
				BackgroundTransparency={selecting ? 0.5 : 1}
				Size={new UDim2(1, 0, 1, 0)}
				Event={{
					MouseEnter: () => setHover(true),
					MouseLeave: () => setHover(false),
					MouseButton1Click: () => {
						playSound(soundIds.equip);

						if (selecting === undefined) {
							if (equipped[slot] !== -1) {
								producer.unequipItem(tostring(Players.LocalPlayer.UserId), slot);

								remotes.unequipItem(slot);
							}

							return;
						} else {
							// If this slot is already occupied
							if (equipped[slot] !== -1) {
								return;
							}
						}

						producer.equipItem(tostring(Players.LocalPlayer.UserId), selecting, slot);
						producer.clearSelecting(tostring(Players.LocalPlayer.UserId));

						remotes.equipItem(selecting, slot);
					},
				}}
			/>
			<uicorner CornerRadius={new UDim(0, 2)} />
			<uistroke ApplyStrokeMode={Enum.ApplyStrokeMode.Border} Color={Color3.fromRGB(165, 165, 165)} Thickness={3}>
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 0, 0)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(255, 170, 0)),
						])
					}
				/>
			</uistroke>
			<uiaspectratioconstraint />
			<uigradient
				Color={
					new ColorSequence([
						new ColorSequenceKeypoint(0, Color3.fromRGB(0, 0, 0)),
						new ColorSequenceKeypoint(1, Color3.fromRGB(255, 85, 0)),
					])
				}
				Rotation={90}
			/>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={imageId}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(0.9, 0, 0.9, 0)}
			>
				<uicorner />
			</imagelabel>
		</frame>
	);
}

export function Slots() {
	const visible = useSelector((state: RootState) => state.visible);

	const [posScale, posMotion] = useMotion(0);

	useEffect(() => {
		posMotion.tween(visible ? 1 : 0, {
			time: 0.5,
		});
	}, [visible]);

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Position={posScale.map((scale) => new UDim2(0.5, 0, 2, 0).Lerp(UDim2.fromScale(0.5, 0.5), scale))}
			Size={new UDim2(0.7000000000000001, 0, 0.4, 0)}
			ZIndex={5}
		>
			<frame
				AnchorPoint={new Vector2(0.2, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BorderSizePixel={0}
				Position={new UDim2(0.075, 0, 0.5, 0)}
				Size={new UDim2(0.125, 0, 1.2, 0)}
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
				<uilistlayout
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0.1, 0)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 0, 0)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(255, 170, 0)),
						])
					}
				/>

				{[0, 1, 2].map((slot) => (
					<Slot slot={slot} />
				))}
			</frame>
			<frame
				AnchorPoint={new Vector2(0.2, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BorderSizePixel={0}
				Position={new UDim2(0.85, 0, 0.5, 0)}
				Size={new UDim2(0.125, 0, 1.2, 0)}
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
				<uilistlayout
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0.1, 0)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>
				<uigradient
					Color={
						new ColorSequence([
							new ColorSequenceKeypoint(0, Color3.fromRGB(255, 0, 0)),
							new ColorSequenceKeypoint(1, Color3.fromRGB(255, 170, 0)),
						])
					}
				/>

				{[3, 4, 5].map((slot) => (
					<Slot slot={slot} />
				))}
			</frame>
			<uiscale />
		</frame>
	);
}
