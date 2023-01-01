import React from "react";

interface HeaderListItem {
	id: number,
	listNumber: number,
	text: string,
	iconBefore?: string,
	iconAfter?: string,
}

export type HeaderList = HeaderListItem[];

export type TTitle = {
	addClass?: string,
	children: React.ReactNode
}

export type TSearch = {
	handleSubmit: (param: object) => void,
	searchInputValue: string,
	handleChange: (param: object) => void,
	className?: string,
	placeholder?: string,
}

export type TCard = {
	title: string,
	id?: number,
	img: string,
	text: string,
	date: string,
}

export type TNewsProps = {
	itemsPerPage: number,
}

export type TLinks = {
	name: string,
	link: string,
	current: boolean
}

export type TBreadcrumbProps = {
	className: string,
	links: TLinks[],
}