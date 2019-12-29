import React from 'react';
import {Link} from 'react-router-dom';

const NameResultSummary = (props) => {
	return (
		<div className="row">
			<div className="col-6 col-sm-3"><strong>Member ID :</strong></div>
			<div className="col-6 col-sm-3">{props.data.MemberID__c}</div>
			<div className="col-6 col-sm-3"><strong>Name :</strong></div>
			<div className="col-6 col-sm-3">{props.data.FirstName+' '+props.data.LastName}</div>
			<div className="col-6 col-sm-3"><strong>Phone :</strong></div>
			<div className="col-6 col-sm-3">{props.data.Phone}</div>
			<div className="col-6 col-sm-3"><strong>Mobile :</strong></div>
			<div className="col-6 col-sm-3">{props.data.MobilePhone}</div>
			<div className="col-6 col-sm-3"><strong>Fax :</strong></div>
			<div className="col-6 col-sm-3">{props.data.Fax}</div>
			<div className="col-6 col-sm-3"><strong>E-mail :</strong></div>
			<div className="col-6 col-sm-3">{props.data.Email}</div>
			<div className="col-6 col-sm-3"><strong>Birth :</strong></div>
			<div className="col-6 col-sm-3">{props.data.BirthDate}</div>
			{!!props.display_link ? <div className="col-12 text-center">
				<Link to={{
					pathname : '/details',
					search : '?member_id='+props.data.MemberID__c
				}}>View Details</Link>
			</div> : null}
		</div>
	)
}

export default NameResultSummary;