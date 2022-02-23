import React, { useState } from "react";
import { useDebounce } from "use-debounce";
export const SearchContext = React.createContext();

export function SearchProvider(props) {
	const [search, setSearch] = useState("");

	const [results, setResults] = useState([]);
	const [finalResults] = useDebounce(results, 1000);
	const clearData = () => {
		setResults([]);
	};
	const handleSearch = async (e) => {
		e.preventDefault();
		console.log(search);
		console.log(search.length);
		if (search.length === 0) return setResults([]);

		const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

		const response = await fetch(endpoint);

		if (!response.ok) {
			throw Error(response.statusText);
		}

		const json = await response.json();

		setResults(json.query.search);
	};

	return (
		<SearchContext.Provider
			value={{
				search,
				setSearch,
				results,
				setResults,
				finalResults,
				clearData,
				handleSearch,
			}}
		>
			{props.children}
		</SearchContext.Provider>
	);
}
