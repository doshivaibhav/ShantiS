Template.billDetails.onCreated(function(){	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('billingDetails',id);
});
});

Template.billDetails.helpers({
	bill:function(){
		var id = FlowRouter.getParam('id');
		var id1 = BillingDetails.findOne({JobId:id});
		//console.log(id1._id)
		return id1;
	},
});

Template.billDetails.events({
	'click #btnbill':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/bill";
	},
});