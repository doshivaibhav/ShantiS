Template.status.onCreated(function(){
	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('shippingDetails',id);
	self.subscribe('originalDoc',id);
	self.subscribe('yardDetails',id);
	self.subscribe('deliveryDetails',id);
	self.subscribe('iGMDetails',id);
	self.subscribe('beDetails',id);
});
});

Template.status.helpers({
	vessel:function(){
		var id = FlowRouter.getParam('id');
    	ves = IGMDetails.findOne({JobId:id},{fields:{InwardDate:1}});
    	console.log(ves);
    	if(ves.InwardDate == '' || typeof ves == 'undefined')
    	{
    		return true;
    	}
    	else{return false;}
		
	},
	orD:function(){
		var id = FlowRouter.getParam('id');
    	orDoc = OriginalDoc.findOne({JobId:id},{fields:{OrRec:1}});
    	console.log(orDoc);
    	if(typeof orDoc == 'undefined')
    	{
    		return true;
    	}
    	else{return false;}
		
	},
	DOCollected:function(){
		var id = FlowRouter.getParam('id');
    	DOCol = ShippingDetails.findOne({JobId:id},{fields:{DO:1}});
    	//console.log(DOCol);
    	if(typeof DOCol == 'undefined' || DOCol.DO.CollectedBy=='')
    	{
    		return true;
    	}
    	else{return false;}
	},
	Arr:function(){
		var id = FlowRouter.getParam('id');
		//console.log('abv');
    	contAr = YardDetails.findOne({JobId:id},{fields:{ContainerArr:1}});
    	//console.log(contAr);
    	if(typeof contAr == 'undefined' || contAr.ContainerArr=='')
    	{
    		return true;
    	}
    	else{return false;}
		
	},
	thoka:function(){

		var id = FlowRouter.getParam('id');
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

		var id = FlowRouter.getParam('id');
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
		var id = FlowRouter.getParam('id');
		//console.log('abv');
    	del = DeliveryDetails.findOne({JobId:id},{fields:{DeliveryOutOn:1}});
    	console.log(del);
    	if(typeof del == 'undefined' || del.DeliveryOutOn == '')
    	{
    		return true;
    	}
    	else{return false;}
	},
});
