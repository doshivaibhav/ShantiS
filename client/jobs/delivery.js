Template.delivery.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('deliveryDetails');
});
});
Template.delivery.helpers({
	deliveryMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = DeliveryDetails.findOne({JobId:id});
		console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	deliveryId:function(){
		var id = FlowRouter.getParam('id');
		id1 = DeliveryDetails.findOne({JobId:id});
		console.log(id1._id)
		return id1._id;
	},
});