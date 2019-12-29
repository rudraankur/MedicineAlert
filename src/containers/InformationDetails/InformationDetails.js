import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SearchResults from '../../components/SearchResults/SearchResults';
import SearchContext from '../../context/SearchContext';

class InformationDetails extends Component {
	state = {
		member_details : [],
		asset_information : []
	}

	render(){
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<Link to={{pathname : '/search'}}>Back to Search Page</Link>
						<SearchContext.Provider value = {{
							search_results : this.state.member_details,
							asset_details : this.state.asset_information
						}}>
							<SearchResults/>
						</SearchContext.Provider>

					</div>
				</div>
			</div>
		);
	}

	componentDidMount(){
		const query = new URLSearchParams(this.props.location.search);
		for(let param of query.entries()){
			this.member_id = param[1];
		}
		this.fetchMemberDetails();
	}

	fetchMemberDetails(){
		const request_data = {
			member_id : this.member_id
		}

		axios.get('./assets/jsons/SearchResults.json').then(
			result => {
				this.fetchAssetDetails(result.data);
			}).catch(
			error => {
				this.props.history.push('/search');
			}
		);
	}

	fetchAssetDetails(member_details){
		axios.get('./assets/jsons/AssetsResults.json').then(
			result => {
				this.setState({
					member_details : member_details,
					asset_information : result.data
				});
			}).catch(
			error => {
				this.setState({
					member_details : member_details
				});
			}
		);
	}
}

export default InformationDetails;