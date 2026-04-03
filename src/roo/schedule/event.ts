import { ScheduleTime } from '.';

export enum Event {
	// Add new event names here
}

export const getEvents = (date: Date): Event[] => {
	return [];
};

export const getEventDuration = (value: Event): Duration => {
	return { hours: 1 };
};

// This function now has both names to satisfy all parts of your code
export const events = (value: Event): ScheduleTime => {
	return { hours: 0, minutes: 0 };
};

export const getEventTime = events;
