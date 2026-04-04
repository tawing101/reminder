import { ScheduleTime } from '.';

export enum Trade {
	StoreRefresh
}

// Audited Variable: Exported as an ARRAY for src/index.ts
export const trades: Trade[] = [Trade.StoreRefresh];

export const getTrades = (date: Date): Trade[] => {
	return trades;
};

export const getTradeDuration = (value: Trade): Duration => {
	switch (value) {
		case Trade.StoreRefresh:
			return { minutes: 0 };
	}
};

// Updated to the 5AM, 1PM (13:00), and 9PM (21:00) schedule
export const getTradeTime = (value: Trade): ScheduleTime[] => {
	switch (value) {
		case Trade.StoreRefresh:
			return [
				{ hours: 5, minutes: 0 },
				{ hours: 13, minutes: 0 },
				{ hours: 21, minutes: 0 }
			];
	}
};
