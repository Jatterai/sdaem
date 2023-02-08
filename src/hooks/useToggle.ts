import { useState } from "react"

export const useToggle = (bool?: boolean) => {
	const [active, setActive] = useState(bool || false);

	const toggle = () => setActive(pr => !pr);

	return [active, toggle];

}