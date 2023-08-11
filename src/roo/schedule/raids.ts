import { ScheduleTime } from '.';

export enum Raid {
	1MrPartyAndGuildRaid,
	2MrPartyAndGuildRaid,
	3MrPartyAndGuildRaid,
}

export const raids = [Raid.1MrPartyAndGuildRaid, Raid.2MrPartyAndGuildRaid, Raid.3MrPartyAndGuildRaid];

export const getRaidTime = (value: Raid): ScheduleTime => {
	switch (value) {
		case Raid.1MrPartyAndGuildRaid:
			return { hours: 9, minutes: 0 };

		case Raid.2MrPartyAndGuildRaid:
			return { hours: 12, minutes: 33 };

		// case Raid.AuctionStart:
		case Raid.3MrPartyAndGuildRaid:
			return { hours: 20, minutes: 30 };
	}
};
