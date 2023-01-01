import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useSearch() {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('q') || '';
	const [searchInputValue, setSearchInputValue] = useState(query);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchInputValue) {
			setSearchParams({ q: searchInputValue });
		} else {
			setSearchParams({})
		};
	}

	const handleChange = (e) => {
		setSearchInputValue(e.target.value)
	}

	return { handleSubmit, handleChange, searchInputValue, query, searchParams }
}