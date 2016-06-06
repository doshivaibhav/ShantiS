Template.ship.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('shippingDetails');
});
});

Template.ship.helpers({
	shipMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = ShippingDetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	shipId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = ShippingDetails.findOne({JobId:id});
		console.log(id1._id)
		return id1;
	},
});

AutoForm.addHooks('shipDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('shipDetailsUpdateMethod',id);
	}
})