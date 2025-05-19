import { SoundService } from "@rbxts/services";

export const soundIds = {
	open: "rbxassetid://1843911796",
	select: "rbxassetid://7153931693",
	equip: "rbxassetid://8084702938",
};

export function playSound(id: string) {
	const sound = new Instance("Sound");

	sound.SoundId = id;
	sound.Parent = SoundService;

	sound.Play();

	sound.Ended.Once(() => sound.Destroy());

	return sound;
}
