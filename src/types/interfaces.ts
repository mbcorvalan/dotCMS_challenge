export interface GetBlogsParams {
	year: string;
	limit: number;
	offset: number;
}

export interface GetBlogs {
	year: string;
}

export interface SelectedNews {
	id: string;
}
interface ImageMetaData {
	modDate: number;
	sha256: string;
	length: number;
	title: string;
	editableAsText: boolean;
	version: number;
	isImage: boolean;
	fileSize: number;
	name: string;
	width: number;
	contentType: string;
	height: number;
}

interface BlogContentElement {
	type: string;
	attrs?: {
		textAlign: string;
	};
	content?: BlogContentElement[];
}

interface BlogContent {
	type: string;
	content: BlogContentElement[];
}

export interface NewsData {
	postingDate: string;
	title: string;
	inode: string;
	ogDescription: string;
}

export interface Contentlet {
	pageTitle: string;
	ogTitle: string;
	publishDate: string;
	postingDate: string;
	metaDescription: string;
	ogType: string;
	inode: string;
	host: string;
	locked: boolean;
	stInode: string;
	contentType: string;
	sitemap: string;
	identifier: string;
	image: string;
	urlTitle: string;
	publishUserName: string;
	publishUser: string;
	creationDate: string;
	ogImage: string;
	tags: string;
	sitemapImportance: string;
	folder: string;
	hasTitleImage: boolean;
	sortOrder: number;
	hostName: string;
	modDate: string;
	imageMetaData: ImageMetaData;
	searchEngineIndex: string;
	blogContent: BlogContent;
	title: string;
	baseType: string;
	archived: boolean;
	ownerName: string;
	working: boolean;
	live: boolean;
	owner: string;
	imageVersion: string;
	imageContentAsset: string;
	languageId: number;
	URL_MAP_FOR_CONTENT: string;
	ogDescription: string;
	url: string;
	titleImage: string;
	modUserName: string;
	urlMap: string;
	hasLiveVersion: boolean;
	modUser: string;
	teaser: string;
	__icon__: string;
	contentTypeIcon: string;
	variant: string;
}

export interface ApiResponse {
	contentlets: Contentlet[];
}

export interface GetBlogsResponse {
	status: number;
}

export interface Option {
	value: string;
	label: string;
}

export interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export interface DateRanges {
	[key: string]: string;
}

export interface SidebarState {
	isOpen: boolean;
}

export interface NewsState {
	data: Contentlet[];
	isLoading: boolean;
	error: string | null;
}

export interface NewsSelectedState {
	data: Contentlet[];
	isLoading: boolean;
	error: string | null;
	id: string;
}

export interface useFetchResult {
	handleSubmit: () => void;
}

export interface LoadingProps {
	status: boolean;
	color: string;
	container: keyof JSX.IntrinsicElements;
}

export interface NotificationMsgProps {
	msg: string;
	container: keyof JSX.IntrinsicElements;
	type: string;
}

interface InputFieldConfig {
	type: 'input';
}

interface TextareaFieldConfig {
	type: 'textarea';
}

interface DateFieldConfig {
	type: 'date';
}
export interface FormConfig {
	title: InputFieldConfig;
	publishDate: DateFieldConfig;
	body: TextareaFieldConfig;
	categories: InputFieldConfig;
	tags: InputFieldConfig;
}

export interface SelectOptionProps {
	selectedOption: string;
	handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface PostNewsParams {
	title: string;
	publishDate: string;
	postingDate: string;
	body: string;
	categories: string;
	tags: string;
	contentType: string;
	urlTitle: string;
	contentHost: string;
}

export interface PaginationControlsProps {
	currentPage: number;
	totalPagesCount: number;
	prevPage: () => void;
	nextPage: () => void;
}

export interface PostNewsState {
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error: string | null;
}

export interface FormData {
	title: string;
	publishDate: string;
	postingDate: string;
	body: string;
	categories: string;
	tags: string;
	contentType: string;
	urlTitle: string;
	contentHost: string;
}

export interface FormFieldProps {
	label: string;
	name: string;
	value: string;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	error?: string | null;
	isTextArea?: boolean;
}
