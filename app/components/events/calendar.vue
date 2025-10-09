<template>
	<div class="calendar-container">
		<div class="calendar-header">
			{{ monthName }}
		</div>

		<!-- Day-of-week labels -->
		<div class="calendar-grid calendar-weekdays">
			<div class="weekday" v-for="(day, idx) in dayNames" :key="'weekday-' + idx">
				{{ day }}
			</div>
		</div>

		<!-- All 42 days (previous, current, next) -->
		<div class="calendar-grid calendar-days">
			<button
				v-for="(dayObj, idx) in days"
				:key="'day-' + idx"
				class="day"
				:class="{
					highlight: dayObj.isHighlighted,
					notCurrentMonth: !dayObj.isCurrentMonth
				}">
				{{ dayObj.date }}
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Current date reference
const now = ref(new Date());
const currentYear = now.value.getFullYear();
const currentMonth = now.value.getMonth();

// Month name (e.g. "JANUARY")
const monthName = computed(() =>
	now.value.toLocaleString('default', { month: 'long' }).toUpperCase()
);

// Monday→Sunday day labels
const dayNames = ['m', 't', 'w', 't', 'f', 's', 's'];

/**
 * Returns an array of exactly 42 day objects:
 *  - previous month's "spillover"
 *  - current month's days
 *  - next month's "spillover"
 *
 * Each object:
 *  {
 *    date: Number (day of the month),
 *    isCurrentMonth: Boolean,
 *    isHighlighted: Boolean
 *  }
 */
function getCalendarDays(year, month) {
	const daysArray = [];

	// --- Current month info ---
	const totalCurrentMonthDays = new Date(year, month + 1, 0).getDate();
	const firstOfMonth = new Date(year, month, 1);

	// Convert Sunday=0 to Monday=0, Tuesday=1, ... Sunday=6
	const shiftMonday = day => (day === 0 ? 6 : day - 1);
	const firstDayIndex = shiftMonday(firstOfMonth.getDay()); // how many "leading" slots

	// --- Previous month info ---
	let prevMonthYear = year;
	let prevMonth = month - 1;
	if (prevMonth < 0) {
		prevMonth = 11;
		prevMonthYear -= 1;
	}
	const totalPrevMonthDays = new Date(prevMonthYear, prevMonth + 1, 0).getDate();

	// --- Fill previous month days (leading) ---
	// E.g. if firstDayIndex=2, we need 2 days from the end of the previous month
	for (let i = 0; i < firstDayIndex; i++) {
		const dayNum = totalPrevMonthDays - firstDayIndex + (i + 1);
		daysArray.push({
			date: dayNum,
			isCurrentMonth: false,
			isHighlighted: false
		});
	}

	// --- Fill current month days ---
	// Example highlight array (only for current month)
	const highlightedDays = [4, 8, 16, 17, 27, 28, 29];

	for (let d = 1; d <= totalCurrentMonthDays; d++) {
		daysArray.push({
			date: d,
			isCurrentMonth: true,
			isHighlighted: highlightedDays.includes(d)
		});
	}

	// --- Next month "spillover" ---
	// We want a total of 42 cells (6 rows * 7 days)
	const daysNeeded = 42 - daysArray.length;
	let nextMonthYear = year;
	let nextMonth = month + 1;
	if (nextMonth > 11) {
		nextMonth = 0;
		nextMonthYear += 1;
	}

	// Add the first "daysNeeded" days of the next month
	for (let i = 1; i <= daysNeeded; i++) {
		daysArray.push({
			date: i,
			isCurrentMonth: false,
			isHighlighted: false
		});
	}

	return daysArray;
}

const days = computed(() => {
	return getCalendarDays(currentYear, currentMonth);
});
</script>

<style scoped lang="scss">
@keyframes scale-up {
	from {
		transform: scale(0);
	}
	to {
		transform: scale(1);
	}
}
.calendar-container {
	padding: 1rem;
	border: 1px solid #e0e0e0;
	border-radius: 8px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
}

// Month name at the top
.calendar-header {
	font-size: clamp(24px, 2.5vw, 42px);
	text-transform: uppercase;
	font-weight: 900;
	color: $clr-midnight-blue; // example midnight-blue
	margin-bottom: clamp(20px, 2.3vw, 40px);
}

// A 7-column grid for weekdays and for days
.calendar-grid {
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: clamp(10px, 0.9vw, 17px);
	text-align: center;
}

// Weekday labels row
.calendar-weekdays {
	margin-bottom: 0.5rem;
	.weekday {
		font-size: clamp(16px, 1.3vw, 26px);
		font-weight: 500;
		color: #717171;
	}
}

// Actual days
.calendar-days {
	.day {
		@for $i from 1 through 42 {
			&:nth-child(#{$i}) {
				animation-delay: $i * 0.05s;
			}
		}
		animation: scale-up 0.3s backwards;
		aspect-ratio: 1;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;

		// Default background for normal days
		background-color: #f9fafb;
		font-size: clamp(16px, 1.3vw, 26px);
		font-weight: 500;
		color: #4b4b4b;

		// Non-current-month days
		&.notCurrentMonth {
			pointer-events: none;
			opacity: 0.3;
		}

		// Highlighted days
		&.highlight {
			background-color: #ebf5fa; // or any accent color
		}
	}
}
</style>
