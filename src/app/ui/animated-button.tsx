import { composeBindings, useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useState } from "@rbxts/react";

export function AnimatedButton(props: React.InstanceProps<ImageButton>) {
	const [hover, setHover] = useState(false);
	const [press, setPress] = useState(false);

	const [hoverScale, hoverMotion] = useMotion(0);
	const [pressScale, pressMotion] = useMotion(1);
	const [transparency, transparencyMotion] = useMotion(1);

	useEffect(() => {
		hoverMotion.spring(hover ? 1.05 : 1);
	}, [hover]);

	useEffect(() => {
		if (press) {
			pressMotion.spring(0.9, { tension: 300 });
			transparencyMotion.spring(0.6);
		} else {
			pressMotion.spring(1, { impulse: 0.005, tension: 300 });
			transparencyMotion.spring(1);
		}
	}, [press]);

	return (
		<imagebutton
			{...props}
			AutoButtonColor={false}
			Event={{
				MouseEnter: () => setHover(true),
				MouseLeave: () => setHover(false),
				MouseButton1Down: () => setPress(true),
				MouseButton1Up: () => setPress(false),
				...props.Event,
			}}
		>
			<uiscale Scale={composeBindings(pressScale, hoverScale, (press, hover) => press * hover)} />
			<frame
				BackgroundTransparency={transparency}
				BorderSizePixel={0}
				BackgroundColor3={new Color3()}
				ZIndex={3}
				Size={UDim2.fromScale(1, 1)}
			/>

			{props.children}
		</imagebutton>
	);
}
