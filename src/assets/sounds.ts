import { SoundService } from "@rbxts/services";

export const soundIds = {
	open: "rbxassetid://1843911796",
	select: "rbxassetid://7153931693",
	equip: "rbxassetid://8084702938",
};

export function playSound(id: string) {
	const sound = new Instance("AudioPlayer");
	const emitter = new Instance("AudioEmitter");
	const wire = new Instance("Wire");

	wire.SourceInstance = sound;
	wire.TargetInstance = emitter;
	wire.Parent = sound;

	sound.Asset = id;
	sound.Parent = SoundService;

	emitter.Parent = SoundService;

	sound.Play();

	sound.Ended.Once(() => sound.Destroy());

	return sound;
}
