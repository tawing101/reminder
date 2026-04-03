import { ScheduleTime } from '.';

export enum Daily {
	DimensionDrill,
	ExtremeChallenge,
	GuildExpedition,
	GuildFeast,
	GuildQuiz,
	TimeSpaceAbnormality,
	WarOfEmperium
}

export const getDailies = (date: Date): Daily[] => {
	const day = date.getDay() as Day;

	switch (day) {
		case 0:
			// sunday
			return [Daily.GuildFeast, Daily.GuildExpedition, Daily.WarOfEmperium];

		case 1:
			// monday
			return [Daily.GuildFeast, Daily.GuildQuiz, Daily.DimensionDrill];

		case 2:
			// tuesday
			return [Daily.GuildFeast, Daily.ExtremeChallenge];

		case 3:
			// wednesday
			return [Daily.GuildFeast, Daily.GuildQuiz, Daily.DimensionDrill];

		case 4:
			// thursday
			return [Daily.GuildFeast, Daily.GuildExpedition, Daily.ExtremeChallenge];

		case 5:
			// friday
			return [Daily.GuildFeast, Daily.GuildQuiz];

		case 6:
			// saturday
			return [Daily.GuildFeast, Daily.TimeSpaceAbnormality];
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
	}
};
