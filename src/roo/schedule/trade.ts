import { ScheduleTime } from '.';

export enum Trade {
	StoreRefresh
}

export const getTrades = (date: Date): Trade[] => {
	return [Trade.StoreRefresh];
};

export const getTradeDuration = (value: Trade): Duration => {
	switch (value) {
		case Trade.StoreRefresh:
			return { minutes: 0 };
	}
};

// Audited 4-hour cycle for RO Classic (5AM, 9AM, 1PM, 5PM, 9PM, 1AM)
export const trades = (value: Trade): ScheduleTime[] => {
	switch (value) {
		case Trade.StoreRefresh:
			return [
				{ hours: 1, minutes: 0 },
				{ hours: 5, minutes: 0 },  // Main Reset
				{ hours: 9, minutes: 0 },
				{ hours: 13, minutes: 0 },
				{ hours: 17, minutes: 0 },
				{ hours: 21, minutes: 0 }
			];
	}
};

export const getTradeTime = trades;
