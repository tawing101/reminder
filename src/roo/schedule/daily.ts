import { Day, ScheduleTime } from '.';

export enum Daily {
	DimensionDrill,
	ExtremeChallenge,
	GuildExpedition,
	GuildFeast,
	GuildQuiz,
	TimeSpaceAbnormality,
	WarOfEmperium,
	// --- NEW GUILD FEATURES ---
	WoEWarning15Min,      // 15-Min Prep Warning
	MorningGuildChecklist, // 5 AM Reset Reminder
	CustomWeeklyGuildRun  // Weekly custom event (e.g., Endless Tower)
}

export const getDailies = (date: Date): Daily[] => {
	const day = date.getDay() as Day;
	
	// The Morning Checklist happens every single day at reset
	const baseDailies = [Daily.MorningGuildChecklist];

	switch (day) {
		case 0: // Sunday
			return [...baseDailies, Daily.GuildFeast, Daily.GuildExpedition, Daily.WoEWarning15Min, Daily.WarOfEmperium];
		case 1: // Monday
			return [...baseDailies, Daily.GuildFeast, Daily.GuildQuiz, Daily.DimensionDrill];
		case 2: // Tuesday
			return [...baseDailies, Daily.GuildFeast, Daily.ExtremeChallenge];
		case 3: // Wednesday
			return [...baseDailies, Daily.GuildFeast, Daily.GuildQuiz, Daily.DimensionDrill];
		case 4: // Thursday
			return [...baseDailies, Daily.GuildFeast, Daily.GuildExpedition, Daily.ExtremeChallenge];
		case 5: // Friday
			return [...baseDailies, Daily.GuildFeast, Daily.GuildQuiz];
		case 6: // Saturday
			// Added the Custom Weekly Run here!
			return [...baseDailies, Daily.GuildFeast, Daily.TimeSpaceAbnormality, Daily.CustomWeeklyGuildRun];
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
		// --- NEW DURATIONS ---
		case Daily.WoEWarning15Min:
			return { minutes: 15 };
		case Daily.MorningGuildChecklist:
			return { minutes: 0 };
		case Daily.CustomWeeklyGuildRun:
			return { hours: 2 }; // Assumes your guild run takes about 2 hours
	}
};

export const getDailyTime = (value: Daily): ScheduleTime => {
	switch (value) {
		case Daily.GuildFeast:
		case Daily.GuildQuiz:
			return { hours: 20, minutes: 0 }; // 8:00 PM
		case Daily.DimensionDrill:
		case Daily.ExtremeChallenge:
		case Daily.GuildExpedition:
		case Daily.TimeSpaceAbnormality:
			return { hours: 20, minutes: 30 }; // 8:30 PM
		case Daily.WarOfEmperium:
			return { hours: 21, minutes: 0 }; // 9:00 PM
		// --- NEW TIMES ---
		case Daily.WoEWarning15Min:
			return { hours: 20, minutes: 45 }; // 8:45 PM (15 mins before WoE)
		case Daily.MorningGuildChecklist:
			return { hours: 5, minutes: 0 }; // 5:00 AM (Server Reset)
		case Daily.CustomWeeklyGuildRun:
			return { hours: 21, minutes: 0 }; // 9:00 PM on Saturday
	}
};
