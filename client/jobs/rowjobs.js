Template.rowjobs.onCreated(function(){
	
var self =this;
self.autorun(function(){
	var id = this._id;
	//console.log(id);
	self.subscribe('dODetails',id);
	self.subscribe('originalDoc',id);
	self.subscribe('yardDetails',id);
	self.subscribe('deliveryDetails',id);
	self.subscribe('iGMDetails',id);
	self.subscribe('beDetails',id);
    self.subscribe('billingDetails',id);

});
});

Template.rowjobs.helpers({
	vessel:function(){
		var id = this._id;
		console.log(id);
    	ves = IGMDetails.findOne({JobId:id},{fields:{InwardDate:1}});
    	console.log(ves);
    	if(ves.InwardDate == '' || typeof ves == 'undefined')
    	{
    		return true;
    	}
    	else{return false;}
		
	},
	orD:function(){
		var id = this._id;
    	orDoc = OriginalDoc.findOne({JobId:id},{fields:{OrRec:1}});
    	console.log(orDoc);
    	if(typeof orDoc == 'undefined')
    	{
    		return true;
    	}
    	else{return false;}
		
	},
	DOCollected:function(){
		var id = this._id;
    	DOCol = DODetails.findOne({JobId:id},{fields:{DOCollectedBy:1}});
    	//console.log(DOCol);
    	if(typeof DOCol == 'undefined' || DOCol.CollectedBy=='')
    	{
    		return true;
    	}
    	else{return false;}
	},
	Arr:function(){
		var id = this._id;
		console.log('abv');
    	contAr = YardDetails.findOne({JobId:id},{fields:{ContainerArr:1}});
    	console.log(contAr);
    	if(typeof contAr == 'undefined' || contAr.ContainerArr=='')
    	{
    		return true;
    	}
    	else{return false;}
		
	},
	thoka:function(){

		var id = this._id;
		//console.log('abv');
    	th = BeDetails.findOne({JobId:id},{fields:{No:1}});
    	console.log(th);
    	if(typeof th == 'undefined' || th.No=='')
    	{
    		return true;
    	}
    	else{return false;}
	},
	dutyPaid:function(){

		var id = this._id;
		//console.log('abv');
    	dd = BeDetails.findOne({JobId:id},{fields:{DutyDate:1}});
    	console.log(dd);
    	if(typeof dd == 'undefined' || dd.DutyDate == '')
    	{
    		return true;
    	}
    	else{return false;}
	},
	delivery:function(){
		var id = this._id;
		//console.log('abv');
    	del = DeliveryDetails.findOne({JobId:id},{fields:{DeliveryOutOn:1}});
    	console.log(del);
    	if(typeof del == 'undefined' || del.DeliveryOutOn == '')
    	{
    		return true;
    	}
    	else{return false;}
	},
	bill:function(){
		var id = this._id;
		console.log(id);
    	bil = BillingDetails.findOne({JobId:id},{fields:{CourierDate:1}});
    	console.log(bil);
    	if(typeof bil == 'undefined' || bil.CourierDate == '')
    	{
    		return true;
    	}
    	else{return false;}	
	},
	jobid: function()
	{
		return _id;
	}
});


Template.rowjobs.events({
/*'click .Add':function(events)
{	
	window.location = "/job/"+this._id;
},*/
'click .Show':function(events)
{	
	FlowRouter.go("/job/view/:id",{id: this._id});
	// window.location = "/job/view/"+this._id;
}
});

