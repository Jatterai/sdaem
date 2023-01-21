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

export type TIcon = {
	className?: string,
}

export type TSearch = {
	value?: string,
	onChange?: (param: object) => void,
	submitting?: string,
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

export type TModalProps = {
	onClick: () => void;
}

export type TOwner = {
	"name": string,
	"img": string,
	"phoneNumber": string,
	"links": {
		"website": string,
		"vk": string,
		"telegram": string,
		"email": string
	}
}

export type TOwnerCard = {
	owner: TOwner,
	isOpen: boolean,
	setIsOpen: (isOpen: boolean) => void,
}

export type TApartment = {
	"id": 1,
	"img": string,
	"price": number,
	"roomsCount": number,
	"bedroomCount": number,
	"adress": {
		"city": string,
		"street": string,
		"number": number,
		"subway": string,
		"district": string
	},
	"stuff": string[],
	"owner": TOwner,
}

export type TCardProps = {
	className?: string,
	item: TApartment,
}

export type TCalalogSlice = {
	catalogItems: TApartment[] | any[],
	isLoading: boolean
}