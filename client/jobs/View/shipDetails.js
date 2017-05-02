Template.shipDetails.onCreated(function(){	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('shippingDetails',id);
});
});

Template.shipDetails.helpers({
	ship:function(){
		var id = FlowRouter.getParam('id');
		var id1 = ShippingDetails.findOne({JobId:id});
		//console.log(id1._id)
		return id1;
	},
});

Template.shipDetails.events({
	'click #btnShip':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/ship",{id:id});
	},
});