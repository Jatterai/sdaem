import { useSearchParams } from "react-router-dom";

export const useSrchParams = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const params = {}
	const paramsKeys = Array
		.from(searchParams.keys())
		.forEach(el => {
			const kitten = searchParams.getAll(el);
			if (kitten.length > 1 || el == 'stuff') params[el] = kitten;
			else params[el] = kitten.join('');
		})

	return { searchParams, setSearchParams, params }
}