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