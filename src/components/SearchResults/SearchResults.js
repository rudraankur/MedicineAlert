import React, {Component} from 'react';

import ResultSummary from './ResultSummary/ResultSummary';
import AssetSummary from './AssetSummary/AssetSummary';

import Aux from '../../hoc/Auxiliary';

import SearchContext from '../../context/SearchContext';

class SearchResults extends Component {
	render(){
		return (
			<Aux>
				
				<SearchContext.Consumer>		
					{
						context => {
							const member_information_header = (!!context.search_results && context.search_results.length > 0) ? <h2 className="text-center">Member Information</h2> :null;
							const asset_information_header = (!!context.asset_details && context.asset_details.length > 0) ? <h2 className="text-center">Asset Information</h2> :null;
							const member_information =  context.search_results.map((search_result, index)=>{
								return <ResultSummary key={search_result.Id} data={search_result} display_link={!asset_information_header}/>;
							});
							const asset_information = !!context.asset_details && context.asset_details.length > 0 ? context.asset_details.map((asset_detail,index) => {
								return <AssetSummary key={index} data={asset_detail}/>;
							}) : null;

							return [member_information_header,member_information,asset_information_header,asset_information]
						}
					}
				</SearchContext.Consumer>
			</Aux>
		);
	}
}


export default SearchResults;