import { ScheduleTime } from '.';

export enum Trade {
	StoreRefresh
}

// Audited Variable: Exported as an ARRAY for src/index.ts to use .map()
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

// Audited Variable: Exported as a FUNCTION for src/roo/schedule/index.ts
export const getTradeTime = (value: Trade): ScheduleTime[] => {
	switch (value) {
		case Trade.StoreRefresh:
			return [
				{ hours: 1, minutes: 0 },
				{ hours: 5, minutes: 0 },
				{ hours: 9, minutes: 0 },
				{ hours: 13, minutes: 0 },
				{ hours: 17, minutes: 0 },
				{ hours: 21, minutes: 0 }
			];
	}
};
