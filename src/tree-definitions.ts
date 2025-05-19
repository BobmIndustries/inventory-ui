import { EvaluateInstanceTree } from "@rbxts/validate-tree";

export const PlayerTree = {
	Data_Folder: {
		$className: "Folder",
		InvData: {
			$className: "StringValue",
		},
	},
} as const;

export type PlayerTree = EvaluateInstanceTree<typeof PlayerTree>;
