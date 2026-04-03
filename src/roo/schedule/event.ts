import { ScheduleTime } from '.';

export enum Event {
	// Add new event names here
}

export const getEvents = (date: Date): Event[] => {
	// const time = date.getTime();
	const events: Event[] = [];

	// Example of how to add a future event:
	// if (isWithinInterval(time, { start: new Date('2026-04-01').getTime(), end: new Date('2026-04-30').getTime() })) {
	// 	events.push(Event.YourEventName);
	// }

	return events;
};

export const getEventDuration = (value: Event): Duration => {
	switch (value) {
		// Define how long the event lasts
		default:
			return { hours: 1 };
	}
};

export const getEventTime = (value: Event): ScheduleTime => {
	switch (value) {
		// Define what time the event starts
		default:
			return { hours: 0, minutes: 0 };
	}
};
