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

// Audited for RO Classic 4-hour cycles based on your screenshot
export const trades = (value: Trade): ScheduleTime[] => {
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

export const getTradeTime = trades;
