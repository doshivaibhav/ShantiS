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
		console.log(id1._id)
		return id1;
	},
});