import React, { useEffect, useState } from "react";
import axios from "axios";
import WekepediaCards from "./components/WekepediaCards";
import Header from "./components/Header";

import "./App.css";
function App() {
	const [search, setSearch] = useState("");

	const [results, setResults] = useState([]);

	const handleSearch = async (e) => {
		e.preventDefault();
		console.log(search);
		if (search === "") return;

		const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

		const response = await fetch(endpoint);

		if (!response.ok) {
			throw Error(response.statusText);
		}

		const json = await response.json();
		// setResults(json.query.search);
		setTimeout(() => {
			setResults(json.query.search);
		}, 3000);
	};

	return (
		<div className="App">
			<Header
				setSearch={setSearch}
				search={search}
				handleSearch={handleSearch}
				results={results}
				setResults={setResults}
			/>

			<WekepediaCards results={results} />
		</div>
	);
}

export default App;
