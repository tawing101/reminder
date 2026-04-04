import { Day, ScheduleTime } from '.';

export enum Daily {
	DimensionDrill,
	ExtremeChallenge,
	GuildExpedition,
	GuildFeast,
	GuildQuiz,
	TimeSpaceAbnormality,
	WarOfEmperium,
	WoEWarning15Min,
	MorningGuildChecklist,
	TeamDungeon,
	NightmareTemple,
	JuperosRuins
}

export const getDailies = (date: Date): Daily[] => {
	const day = date.getDay() as Day;
	
	const baseDailies = [Daily.MorningGuildChecklist];

	switch (day) {
		case 0: // Sunday - WoE Focus (No Dungeons)
			return [...baseDailies, Daily.GuildFeast, Daily.GuildExpedition, Daily.WoEWarning15Min, Daily.WarOfEmperium];
		case 1: // Monday - Team Dungeon & Nightmare Temple (Day 1/3)
			return [...baseDailies, Daily.GuildFeast, Daily.GuildQuiz, Daily.DimensionDrill, Daily.TeamDungeon, Daily.NightmareTemple];
		case 2: // Tuesday - Juperos Ruins (Day 1/2)
			return [...baseDailies, Daily.GuildFeast, Daily.ExtremeChallenge, Daily.JuperosRuins];
		case 3: // Wednesday - Team Dungeon & Nightmare Temple (Day 2/3)
			return [...baseDailies, Daily.GuildFeast, Daily.GuildQuiz, Daily.DimensionDrill, Daily.TeamDungeon, Daily.NightmareTemple];
		case 4: // Thursday - Rest Night (Prep for weekend)
			return [...baseDailies, Daily.GuildFeast, Daily.GuildExpedition, Daily.ExtremeChallenge];
		case 5: // Friday - Team Dungeon & Nightmare Temple (Day 3/3 - Capped!)
			return [...baseDailies, Daily.GuildFeast, Daily.GuildQuiz, Daily.TeamDungeon, Daily.NightmareTemple];
		case 6: // Saturday - Juperos Ruins (Day 2/2 - Capped!)
			return [...baseDailies, Daily.GuildFeast, Daily.TimeSpaceAbnormality, Daily.JuperosRuins];
	}
};

export const getDailyDuration = (value: Daily): Duration => {
	switch (value) {
		case Daily.DimensionDrill:
			return { minutes: 30 };
		case Daily.ExtremeChallenge:
			return { hours: 1, minutes: 30 };
		case Daily.GuildExpedition:
		case Daily.GuildFeast:
			return { minutes: 20 };
		case Daily.GuildQuiz:
			return { minutes: 15 };
		case Daily.TimeSpaceAbnormality:
			return { minutes: 13 };
		case Daily.WarOfEmperium:
			return { hours: 1 };
		case Daily.WoEWarning15Min:
			return { minutes: 15 };
		case Daily.MorningGuildChecklist:
			return { minutes: 0 };
		case Daily.TeamDungeon:
			return { minutes: 30 };
		case Daily.NightmareTemple:
			return { hours: 1 }; // Stacked 5x fast runs
		case Daily.JuperosRuins:
			return { hours: 1, minutes: 30 }; 
	}
};

export const getDailyTime = (value: Daily): ScheduleTime => {
	switch (value) {
		case Daily.GuildFeast:
		case Daily.GuildQuiz:
			return { hours: 20, minutes: 0 }; 
		case Daily.DimensionDrill:
		case Daily.ExtremeChallenge:
		case Daily.GuildExpedition:
		case Daily.TimeSpaceAbnormality:
			return { hours: 20, minutes: 30 }; 
		case Daily.WarOfEmperium:
			return { hours: 21, minutes: 0 }; 
		case Daily.WoEWarning15Min:
			return { hours: 20, minutes: 45 }; 
		case Daily.MorningGuildChecklist:
			return { hours: 5, minutes: 0 }; 
		case Daily.TeamDungeon:
		case Daily.NightmareTemple:
		case Daily.JuperosRuins:
			return { hours: 21, minutes: 15 }; // Consistent 9:15 PM start for all PvE
	}
};
