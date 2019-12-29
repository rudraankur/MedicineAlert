import React, {Component} from 'react';
import Input from '../UI/Input/Input';
import './SearchControl.css';

class SearchControl extends Component{

	state = {
		search_form : {
			member_id : {
				element_config : {
					type : 'text' ,
					label_id : 'member_id',
					label : 'Member ID: ',
					placeholder : 'Member ID'
				},
				value : '',
				validations : {
					required : true,
					number : true
				},
				valid : false,
				touched : false
			},
			first_name : {
				element_config : {
					type : 'text' ,
					label_id : 'first_name',
					label : 'First Name: ',
					placeholder : 'First Name'
				},
				value : '',
				validations : {
					required : true,
					string : true
				},
				valid : false,
				touched : false
			},
			last_name : {
				element_config : {
					type : 'text' ,
					label_id : 'last_name',
					label : 'Last Name: ',
					placeholder : 'Last Name'
				},
				value : '',
				validations : {
					required : true,
					string : true
				},
				valid : false,
				touched : false
			}
		},
		search_term : ''
	}

	render(){
		return (
			<form onSubmit={(event)=>this.props.submitted(event,this.state)}>
  				<Input {...this.state.search_form.member_id} changed={(event)=> this.onChangeHandler(event, 'member_id')}/>

				<p>or enter the following:</p>

				<Input {...this.state.search_form.first_name} changed={(event)=> this.onChangeHandler(event, 'first_name')}/>
				<Input {...this.state.search_form.last_name} changed={(event)=> this.onChangeHandler(event, 'last_name')}/>

				<div className="form-group row">
					<div className="offset-sm-2 col-sm-10">
  						<button type="submit" className="btn btn-primary" disabled={!this.is_form_valid}>Submit Query</button>
					</div>
				</div>
			</form>
		)
	}

	onChangeHandler(event, input_identifier){
		const updated_form_state = {...this.state.search_form};
		const updated_form_element = {...updated_form_state[input_identifier]};
		updated_form_element.value = event.target.value;
		updated_form_element.touched = true;
		updated_form_element.valid = this.checkValidity(updated_form_element.value, updated_form_element.validations)
		updated_form_state[input_identifier] = updated_form_element;
		this.manipulateInputFieldValues(updated_form_state, input_identifier);
		this.is_form_valid = updated_form_state.member_id.valid || (updated_form_state.first_name.valid && updated_form_state.last_name.valid);
	}

	manipulateInputFieldValues(updated_form_state, input_identifier){
		let search_term = '';
		if(input_identifier == 'member_id' && !!updated_form_state[input_identifier]){
			search_term = 'ID_SEARCH';
			updated_form_state['first_name'].value = '';
			updated_form_state['last_name'].value = '';
			updated_form_state['first_name'].touched = false;
			updated_form_state['last_name'].touched = false;
			updated_form_state['first_name'].valid = false;
			updated_form_state['last_name'].valid = false;
		}else{
			if(!!updated_form_state[input_identifier]){
				search_term = 'NAME_SEARCH';
				updated_form_state['member_id'].value = '';
				updated_form_state['member_id'].touched = false;
				updated_form_state['member_id'].valid = false;
			}
		}
		this.setState({search_form : updated_form_state, search_term : search_term});
	}

	checkValidity(value, rules){
		let is_valid = true;
		if(rules.required){
			is_valid = value.trim() !=='' && is_valid;
		}
		if(rules.number){
			is_valid = /^[0-9]*$/.test(value) && is_valid;
		}
		if(rules.string){
			is_valid = /^[a-zA-Z]*$/.test(value) && is_valid;	
		}
		return is_valid;
	}
}

export default SearchControl;