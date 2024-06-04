import { formatDate } from '../config/constants';

describe('formatDate', () => {
	test('should format the date correctly', () => {
		const date = new Date('2024-06-04T12:34:56');
		const formattedDate = formatDate(date);
		expect(formattedDate).toBe('2024-06-04 12:34');
	});

	test('should pad single-digit month and day with leading zero', () => {
		const date = new Date('2024-01-01T01:01:01');
		const formattedDate = formatDate(date);
		expect(formattedDate).toBe('2024-01-01 01:01');
	});

	test('should handle edge cases like midnight', () => {
		const date = new Date('2024-06-04T00:00:00');
		const formattedDate = formatDate(date);
		expect(formattedDate).toBe('2024-06-04 00:00');
	});
});
