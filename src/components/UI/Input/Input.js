import React from 'react';

const Input = (props) => {
	return (
		<div className="form-group row">
			<label htmlFor={props.element_config.label_id} className="col-sm-2 col-form-label">{props.element_config.label}</label>
			<div className="col-sm-6">
					<input type="text" className="form-control" id={props.element_config.label_id} placeholder={props.element_config.placeholder} onChange={props.changed} value={props.value}/>
			</div>
		</div>
	);
}

export default Input;