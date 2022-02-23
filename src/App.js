import React from "react";
import { SearchProvider } from "./SearchContext";
import WekepediaCards from "./components/WekepediaCards";
import Header from "./components/Header";
import "./App.css";

function App() {
	return (
		<div className="App">
			<SearchProvider>
				<Header />
				<WekepediaCards />
			</SearchProvider>
		</div>
	);
}

export default App;
