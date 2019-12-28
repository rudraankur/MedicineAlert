import React, {Component} from 'react';

class SearchControl extends Component{
	render(){
		return (
			<form>
  				<div className="form-group row">
    				<label for="member_id" className="col-sm-2 col-form-label">Member ID: </label>
					<div className="col-sm-6">
  						<input type="text" className="form-control" id="member_id" placeholder="Email"/>
					</div>
				</div>

				<p>or enter the following:</p>

				<div className="form-group row">
    				<label for="first_name" className="col-sm-2 col-form-label">First Name: </label>
					<div className="col-sm-6">
  						<input type="text" className="form-control" id="first_name" placeholder="First Name"/>
					</div>
				</div>
				<div className="form-group row">
    				<label for="last_name" className="col-sm-2 col-form-label">Last Name: </label>
					<div className="col-sm-6">
  						<input type="text" className="form-control" id="last_name" placeholder="Last Name"/>
					</div>
				</div>

				<div className="form-group row">
					<div className="offset-sm-2 col-sm-10">
  						<button type="submit" className="btn btn-primary">Submit Query</button>
					</div>
				</div>
			</form>
		)
	}
}

export default SearchControl;