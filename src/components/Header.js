import React, { useContext } from "react";
import { SearchContext } from "../SearchContext";

const Header = () => {
	const searchTerm = useContext(SearchContext);
	console.log(searchTerm);
	return (
		<header>
			<h1>Wikipedia Api</h1>
			<p>Write here for a random articles</p>
			<form className="search-box" onKeyUp={searchTerm.handleSearch}>
				<input
					type="text"
					placeholder="what are you looking for?"
					value={searchTerm.search}
					onChange={(e) => {
						searchTerm.setSearch(e.target.value);
					}}
				/>
				{searchTerm.search && (
					<span
						onClick={() => {
							searchTerm.clearData();
							searchTerm.setSearch("");
						}}
					>
						x
					</span>
				)}
			</form>
		</header>
	);
};

export default Header;
