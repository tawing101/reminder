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

// Audited Variable: Satisfies imports in both index files
export const trades = (value: Trade): ScheduleTime[] => {
	switch (value) {
		case Trade.StoreRefresh:
			return [
				{ hours: 12, minutes: 0 },
				{ hours: 16, minutes: 0 },
				{ hours: 20, minutes: 0 }
			];
	}
};

export const getTradeTime = trades;
