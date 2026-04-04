import { add, formatDuration, getUnixTime, set } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import { MatchKind } from './match';
import { ROO_TIME_ZONE, Schedule, ScheduleKind, ScheduleTime, getScheduleValue } from './schedule';
import { toSpaceSeparatedPascalCase } from '../utilities';

// Default fallback colors
const defaultColors = {
	[MatchKind.StartsIn10Minutes]: 0x8bd3e6, // pastel blue
	[MatchKind.StartsNow]: 0xff6961, // pastel red
} satisfies Record<MatchKind, number>;

export const generateEmbed = (
	schedule: Schedule,
	match: MatchKind,
	date: Date,
	time: ScheduleTime,
	duration?: Duration,
): DiscordWebhookEmbed => {
	const rawTitle = toSpaceSeparatedPascalCase(getScheduleValue(schedule));
	const footerText = toSpaceSeparatedPascalCase(ScheduleKind[schedule.kind]);

	// --- 🎨 CUSTOM THEME SYSTEM ---
	let themeColor = defaultColors[match];
	let emoji = '✨';

	if (rawTitle.includes('War Of Emperium')) { themeColor = 0xff3333; emoji = '🏰'; } // Crimson Red
	else if (rawTitle.includes('Nightmare Temple')) { themeColor = 0x9b59b6; emoji = '👿'; } // Dark Purple
	else if (rawTitle.includes('Guild Feast')) { themeColor = 0xf1c40f; emoji = '🍖'; } // Gold
	else if (rawTitle.includes('Store Refresh')) { themeColor = 0x2ecc71; emoji = '🛒'; } // Green
	else if (rawTitle.includes('Morning Guild Checklist')) { themeColor = 0x3498db; emoji = '🌅'; } // Morning Blue
	else if (rawTitle.includes('Team Dungeon')) { themeColor = 0x00ffff; emoji = '🛡️'; } // Cyan
	else if (rawTitle.includes('Juperos Ruins')) { themeColor = 0xe67e22; emoji = '⚙️'; } // Orange
	else if (rawTitle.includes('Extreme Challenge')) { themeColor = 0xff00ff; emoji = '⚔️'; } // Magenta
	else if (rawTitle.includes('Dimension Drill')) { themeColor = 0xff5500; emoji = '🥊'; } // Burnt Orange
	else if (rawTitle.includes('Woe Warning')) { themeColor = 0xffaa00; emoji = '⏳'; } // Warning Yellow

	// --- 💥 DYNAMIC HEADER PREFIX ---
	const matchPrefix = match === MatchKind.StartsNow ? '🔥 [STARTING NOW]' : '⏳ [GET READY]';
	const title = `${matchPrefix} ${emoji} ${rawTitle}`;

	const startDate = zonedTimeToUtc(set(date, time), ROO_TIME_ZONE);
	const start = toDiscordTimestamp(startDate);

	let description: DiscordWebhookEmbed['description'];
	let fields: DiscordWebhookEmbed['fields'];

	if (duration === undefined) {
		description = `**Time:** ${start}\n*Gather your party and get ready!*`;
	} else {
		const duration_ = formatDuration(duration, { format: ['hours', 'minutes'] });
		description = `**Duration:** ${duration_}\n*Make sure you are prepared!*`;

		fields = [{ name: '🟢 START', value: start, inline: true }];
		if (match === MatchKind.StartsNow) {
			const endDate = add(startDate, duration);
			const end = toDiscordTimestamp(endDate);
			fields.push({ name: '🛑 END', value: end, inline: true });
		}
	}

	return {
		title,
		description,
		fields,
		footer: { text: `RO Origin Classic • ${footerText}`, icon_url: 'https://b.cgas.io/mVhvd_L8tHq1.png' },
		color: themeColor,
		timestamp: new Date().toISOString(),
	};
};

const toDiscordTimestamp = (date: Date) => {
	const unixTime = getUnixTime(date);
	// Shows like `20:00 (in 10 minutes)`
	return `<t:${unixTime}:t> (<t:${unixTime}:R>)`;
};
