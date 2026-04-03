import { ScheduleTime } from '.';

export enum Event {
	// Add current active limited-time events here
}

export const getEvents = (date: Date): Event[] => {
	return [];
};

export const getEventDuration = (value: Event): Duration => {
	return { hours: 1 };
};

// Audited Variable: Satisfies imports in both index files
export const events = (value: Event): ScheduleTime => {
	return { hours: 0, minutes: 0 };
};

export const getEventTime = events;
