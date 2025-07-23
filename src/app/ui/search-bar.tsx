import React from "@rbxts/react";
import { useProducer } from "@rbxts/react-reflex";
import { RootProducer } from "producer";

export function SearchBar() {
	const producer = useProducer<RootProducer>();

	return (
		<textbox
			BackgroundTransparency={1}
			FontFace={new Font("rbxassetid://12187360881")}
			PlaceholderColor3={Color3.fromRGB(49, 49, 49)}
			PlaceholderText="SEARCH"
			Size={new UDim2(1, 0, 1, 0)}
			Text={""}
			TextColor3={Color3.fromRGB(255, 255, 255)}
			TextScaled={true}
			TextSize={14}
			TextWrapped={true}
			TextXAlignment={Enum.TextXAlignment.Left}
			Change={{
				Text: (rbx) => {
					producer.setSearch(rbx.Text);
				},
			}}
		/>
	);
}
