import { ScheduleTime } from '.';

export enum Event {
	// Add new event names here when they arrive
}

export const getEvents = (date: Date): Event[] => {
	return [];
};

export const getEventDuration = (value: Event): Duration => {
	return { hours: 1 };
};

export const events = (value: Event): ScheduleTime => {
	return { hours: 0, minutes: 0 };
};
