export interface GetBlogsParams {
	year: string;
	limit: number;
	offset: number;
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

export interface Contentlet {
	pageTitle: string;
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

export interface Option {
	value: string;
	label: string;
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
