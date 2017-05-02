Template.deliveryDetails.onCreated(function(){	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('deliveryDetails',id);
});
});

Template.deliveryDetails.helpers({
	delivery:function(){
		var id = FlowRouter.getParam('id');
		var id1 = DeliveryDetails.findOne({JobId:id});
		//console.log(id1._id)
		return id1;
	},
});

Template.deliveryDetails.events({
	'click #btnDelivery':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/delivery",{id:id});;
	},
});