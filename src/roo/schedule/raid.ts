import { ScheduleTime } from '.';

export enum Raid {
	MrParty,
	GuildRaid,
	MrPartyAndGuildRaid,
}

export const raids = [Raid.MrParty, Raid.GuildRaid, Raid.MrPartyAndGuildRaid];

export const getRaidTime = (value: Raid): ScheduleTime => {
	switch (value) {
		case Raid.MrParty:
			return { hours: 11, minutes: 50 };

		case Raid.GuildRaid:
			return { hours: 11, minutes: 51 };

		// case Raid.AuctionStart:
		case Raid.MrPartyAndGuildRaid:
			return { hours: 20, minutes: 30 };
	}
};
