import {
	Option,
	DateRanges,
	NewsState,
	NewsSelectedState,
} from '../types/interfaces';

export const BASE_URL: string = 'https://demo.dotcms.com/api/content';
export const LANGUAGE_ID: number = 1;

export const LIMIT_PER_PAGE: number = 5;

export const DATE_RANGES: DateRanges = {
	'2023': '%5B20230101140000 TO 20231231160000%5D',
	'2022': '%5B20220101140000 TO 20221231160000%5D',
	'2021': '%5B20210101140000 TO 20211231160000%5D',
	'2020': '%5B20200101140000 TO 20201231160000%5D',
};

export const options: Option[] = [
	{ value: '', label: 'Filter' },
	{ value: '2023', label: '2023' },
	{ value: '2022', label: '2022' },
	{ value: '2021', label: '2021' },
	{ value: '2020', label: '2020' },
];

export const initialState: NewsState = {
	data: [],
	isLoading: false,
	error: null,
};

export const selectedNewsInitialState: NewsSelectedState = {
	data: [],
	isLoading: false,
	error: null,
	id: '',
};
