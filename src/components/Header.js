import React from "react";

const Header = ({ setSearch, search, handleSearch, setResults, results }) => {
	const clearData = () => {
		setResults([]);
	};

	return (
		<header>
			<h1>Wekepedia Api</h1>
			<form className="search-box" onKeyUp={handleSearch}>
				<input
					type="text"
					placeholder="what are you looking for?"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
				{search && (
					<span
						onClick={() => {
							clearData();
							setSearch("");
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
