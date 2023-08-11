import { ScheduleTime } from '.';

export enum Raid {
	MrPartyAndGuildRaid,
	MrPartyAndGuildRaid,
	MrPartyAndGuildRaid,
}

export const raids = [Raid.MrPartyAndGuildRaid, Raid.MrPartyAndGuildRaid, Raid.MrPartyAndGuildRaid];

export const getRaidTime = (value: Raid): ScheduleTime => {
	switch (value) {
		case Raid.MrPartyAndGuildRaid:
			return { hours: 9, minutes: 0 };

		case Raid.MrPartyAndGuildRaid:
			return { hours: 11, minutes: 0 };

		// case Raid.AuctionStart:
		case Raid.MrPartyAndGuildRaid:
			return { hours: 20, minutes: 30 };
	}
};
