import { ScheduleTime } from '.';

export enum Raid {
	MrParty,
	GuildRaid,
	MrPartyAndGuildRaid,
}

export const raids = [Raid.MrParty, Raid.GuildRaid, Raid.MrPartyAndGuildRaid];

export const getRaidTime = (value: Raid): ScheduleTime => {
	switch (value) {
		case Raid.1MrPartyAndGuildRaid:
			return { hours: 12, minutes: 44 };

		case Raid.2MrPartyAndGuildRaid:
			return { hours: 12, minutes: 45 };

		// case Raid.AuctionStart:
		case Raid.3MrPartyAndGuildRaid:
			return { hours: 20, minutes: 30 };
	}
};
