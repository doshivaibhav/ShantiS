//Meteor.subscribe('jobCreation');
Template.job.onCreated(function(){
	
var self =this;
self.autorun(function(){
	self.subscribe('jobCreation');
	self.subscribe('shippingDetails');
	self.subscribe('originalDoc');
	self.subscribe('yardDetails');
	self.subscribe('docDocks');
	self.subscribe('deliveryDetails');
});
});
Template.job.helpers({
    jobs:(event,template)=>{
    	var id = FlowRouter.getParam('id');
    	job1 = JobCreation.findOne({_id:id});
		return job1;
	},
	docMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = OriginalDoc.findOne({JobId:id});
		//console.log(id1.length);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
});

Template.job.events({
	'click #btnDocRec':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/orDoc";	
	},
	'click #btnShip':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/ship";
	},
	'click #btnYard':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/yard";
	},
	'click #btnBe':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		console.log('hi');
		window.location = "/"+id+"/boe";
	},
	'click #btnDocDocks':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/checked";
	},
	'click #btnDelivery':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/delivery";
	},
});