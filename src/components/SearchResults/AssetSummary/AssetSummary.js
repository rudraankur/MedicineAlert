import React from 'react';

const AssetSummary = (props) => {
	return (
		<div className="row">
			<div className="col-6 col-sm-3"><strong>Name :</strong></div>
			<div className="col-6 col-sm-3">{props.data.Name}</div>
			<div className="col-6 col-sm-3"><strong>Engraving :</strong></div>
			<div className="col-6 col-sm-3">{props.data.maf_EngraveLine__c}</div>
			<div className="col-6 col-sm-3"><strong>Purchase Date :</strong></div>
			<div className="col-6 col-sm-3">{props.data.PurchaseDate}</div>
			<hr/>
		</div>
	)
}

export default AssetSummary;