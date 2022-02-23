import React, { useContext } from "react";
import { SearchContext } from "../SearchContext";

const WekepediaCards = () => {
	const resultsContext = useContext(SearchContext);

	return (
		<div className="results">
			{resultsContext.finalResults.map((result, i) => {
				const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
				return (
					<a href={url} target="_blank" rel="noreferrer" key={i}>
						<div className="result">
							<h3>{result.title}</h3>
							<p
								dangerouslySetInnerHTML={{
									__html: result.snippet,
								}}
							></p>
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default WekepediaCards;
