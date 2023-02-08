import { useState } from "react";

export const useResetForm = () => {
	const [, updateForm] = useState();

	const reset = (event) => {
		const form = event.target.closest('form');
		if (!form) return;
		updateForm({});
		form.reset();

	}

	return reset
}