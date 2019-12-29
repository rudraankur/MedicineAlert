import React from 'react';

const SearchContext = React.createContext({
	search_term : '',
	search_results : [],
	asset_details : []
});


export default SearchContext;