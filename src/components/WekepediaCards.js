import React from "react";

const WekepediaCards = ({ results }) => {
	return (
		<div className="results">
			{results.map((result, i) => {
				const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
				return (
					<a href={url} target="_blank" rel="noreferrer">
						<div className="result" key={i}>
							<h3>{result.title}</h3>
							<p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default WekepediaCards;
