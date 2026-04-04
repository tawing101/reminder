import { Day, ScheduleTime } from '.';

export enum Daily {
	DimensionDrill,
	ExtremeChallenge,
	GuildExpedition,
	GuildFeast,
	GuildQuiz,
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
		case 0: // Sunday
			return [...baseDailies, Daily.GuildFeast, Daily.GuildExpedition, Daily.WoEWarning15Min, Daily.WarOfEmperium];
		case 1: // Monday
			return [...baseDailies, Daily.GuildFeast, Daily.GuildQuiz, Daily.DimensionDrill, Daily.TeamDungeon, Daily.NightmareTemple];
		case 2: // Tuesday
			return [...baseDailies, Daily.GuildFeast, Daily.ExtremeChallenge, Daily.JuperosRuins];
		case 3: // Wednesday
			return [...baseDailies, Daily.GuildFeast, Daily.GuildQuiz, Daily.DimensionDrill, Daily.TeamDungeon, Daily.NightmareTemple];
		case 4: // Thursday - Only Feast and Extreme Challenge in ROOC
			return [...baseDailies, Daily.GuildFeast, Daily.ExtremeChallenge];
		case 5: // Friday
			return [...baseDailies, Daily.GuildFeast, Daily.GuildQuiz, Daily.TeamDungeon, Daily.NightmareTemple];
		case 6: // Saturday - Replaced Time Space with Extreme Challenge
			return [...baseDailies, Daily.GuildFeast, Daily.ExtremeChallenge, Daily.JuperosRuins];
	}
};

export const getDailyDuration = (value: Daily): Duration => {
	switch (value) {
		case Daily.DimensionDrill:
		case Daily.TeamDungeon:
			return { minutes: 30 };
		case Daily.ExtremeChallenge:
		case Daily.JuperosRuins:
			return { hours: 1, minutes: 30 };
		case Daily.GuildExpedition:
		case Daily.GuildFeast:
			return { minutes: 20 };
		case Daily.GuildQuiz:
		case Daily.WoEWarning15Min:
			return { minutes: 15 };
		case Daily.WarOfEmperium:
		case Daily.NightmareTemple:
			return { hours: 1 };
		case Daily.MorningGuildChecklist:
			return { minutes: 0 };
	}
};

export const getDailyTime = (value: Daily): ScheduleTime => {
	switch (value) {
		case Daily.GuildFeast:
		case Daily.GuildQuiz:
		case Daily.GuildExpedition:
			return { hours: 20, minutes: 0 }; // 8:00 PM for all initial events
		case Daily.DimensionDrill:
		case Daily.ExtremeChallenge:
			return { hours: 20, minutes: 30 }; // 8:30 PM for combat events
		case Daily.WoEWarning15Min:
			return { hours: 20, minutes: 45 }; // 8:45 PM
		case Daily.WarOfEmperium:
			return { hours: 21, minutes: 0 }; // 9:00 PM
		case Daily.MorningGuildChecklist:
			return { hours: 5, minutes: 0 }; // 5:00 AM
		case Daily.TeamDungeon:
		case Daily.NightmareTemple:
		case Daily.JuperosRuins:
			return { hours: 21, minutes: 15 }; // 9:15 PM Custom Guild Runs
	}
};
