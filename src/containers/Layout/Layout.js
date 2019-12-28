import React from 'react';
import Aux from '../../hoc/Auxiliary';

import Header from '../../components/Header/Header';
import SearchControl from '../../components/SearchControl/SearchControl';
import SearchResults from '../../components/SearchResults/SearchResults';

function Layout(props){
	return (
		<Aux>
			<Header/>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<SearchControl/>
						<SearchResults/>
					</div>
				</div>
			</div>
		</Aux>
	)
}

export default Layout;