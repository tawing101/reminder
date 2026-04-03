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

export const getTradeTime = (value: Trade): ScheduleTime[] => {
	switch (value) {
		case Trade.StoreRefresh:
			// Alerts at 12:00 PM, 4:00 PM, and 8:00 PM Server Time
			return [
				{ hours: 12, minutes: 0 },
				{ hours: 16, minutes: 0 },
				{ hours: 20, minutes: 0 }
			];
	}
};
