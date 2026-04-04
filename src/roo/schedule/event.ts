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

export const getEventTime = (value: Event): ScheduleTime => {
	return { hours: 0, minutes: 0 };
};
