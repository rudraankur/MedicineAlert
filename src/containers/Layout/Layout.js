import React, {Component} from 'react';
import axios from 'axios';

import Aux from '../../hoc/Auxiliary';

import SearchControl from '../../components/SearchControl/SearchControl';
import SearchResults from '../../components/SearchResults/SearchResults';

import SearchContext from '../../context/SearchContext';

class Layout extends Component {
	state = {
		search_term : '',
		search_results : []
	}

	render(){
		return (
			<Aux>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<SearchControl submitted={(event,form_state)=>this.onSubmitHandler(event,form_state)}/>
							<SearchContext.Provider value = {{
								search_term : this.state.search_term,
								search_results : this.state.search_results
							}}>
								<SearchResults/>
							</SearchContext.Provider>
						</div>
					</div>
				</div>
			</Aux>
		)
	}

	onSubmitHandler(event,form_state){
		event.preventDefault();
		let request_data = {};
		if(form_state.search_term == 'ID_SEARCH'){
			request_data = {
				member_id : form_state.search_form.member_id.value
			}
		}else{
			request_data = {
				first_name : form_state.search_form.first_name.value,
				last_name : form_state.search_form.last_name.value
			}
		}

		console.log(request_data);

		axios.get('./assets/jsons/SearchResults.json').then(
			result => {
				console.log(result);
				this.setState({
					search_term : form_state.search_term,
					search_results : result.data
				});
			}
		);
	}
}

export default Layout;