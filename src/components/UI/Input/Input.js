import React from 'react';

const Input = (props) => {
	let input_classes = ["form-control"];
	if(props.touched && !props.valid){
		input_classes.push("is-invalid");
	}
	return (
		<div className="form-group row">
			<label htmlFor={props.element_config.label_id} className="col-sm-2 col-form-label">{props.element_config.label}</label>
			<div className="col-sm-6">
					<input type="text" className={input_classes.join(" ")} id={props.element_config.label_id} placeholder={props.element_config.placeholder} onChange={props.changed} value={props.value}/>
					{ (props.touched && !props.valid)? <div className="invalid-feedback">
          					Please enter correct value.
        				</div> : null
					}
			</div>
		</div>
	);
}

export default Input;