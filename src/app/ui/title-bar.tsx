import React from "@rbxts/react";
import { SearchBar } from "./search-bar";

export function TitleBar() {
	return (
		<frame
			AnchorPoint={new Vector2(0, 1)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderSizePixel={0}
			Position={new UDim2(0.025, 0, 0.1, 0)}
			Size={new UDim2(0.3, 0, 0.15, 0)}
		>
			<uicorner CornerRadius={new UDim(0, 5)} />
			<textlabel
				Active={true}
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundTransparency={1}
				FontFace={new Font("rbxassetid://12187360881")}
				Position={new UDim2(0.5, 0, 0.1, 0)}
				Selectable={true}
				Size={new UDim2(0.75, 0, 0.47500000000000003, 0)}
				Text="INVENTORY"
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={23}
				TextWrapped={true}
				ZIndex={3}
			>
				<uistroke Color={Color3.fromRGB(0, 170, 0)} Thickness={2} Transparency={0.5} />
			</textlabel>
			<uistroke Color={Color3.fromRGB(85, 170, 0)} Thickness={2} />
			<uigradient
				Color={
					new ColorSequence([
						new ColorSequenceKeypoint(0, Color3.fromRGB(0, 0, 0)),
						new ColorSequenceKeypoint(1, Color3.fromRGB(43, 43, 43)),
					])
				}
				Rotation={-90}
			/>
			<frame
				AnchorPoint={new Vector2(0, 1)}
				BackgroundColor3={Color3.fromRGB(18, 18, 18)}
				BorderSizePixel={0}
				Position={new UDim2(1, 10, 0.55, 0)}
				Size={new UDim2(2.1, 0, 0.5, 0)}
			>
				<uicorner CornerRadius={new UDim(0, 5)} />
				<uipadding
					PaddingBottom={new UDim(0.2, 0)}
					PaddingLeft={new UDim(0.05, 0)}
					PaddingRight={new UDim(0.05, 0)}
					PaddingTop={new UDim(0.2, 0)}
				/>

				<SearchBar />
			</frame>
		</frame>
	);
}
