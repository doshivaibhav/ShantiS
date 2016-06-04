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
		//console.log(id1);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	deliveryId:function(){
		var id = FlowRouter.getParam('id');
		id1 = DeliveryDetails.findOne({JobId:id});
		//console.log(id1._id)
		return id1;
	},
});

/*Template.delivery.events({
'click submit':function(){
		DeliveryDetails.update(this.id,{$set:{
			JobId:function()
			{
				return FlowRouter.getParam('id');
			},
			updatedBy:function()
			{
				return Meteor.UserId;
			},
		}
});
	}
});*/

/*var hooksObject = {
	onSuccess:function(){
		var id = FlowRouter.getParam('id');
		id1 = DeliveryDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});

	}
}

Autoform.hooks({
deliveryDetailsUpdate:hooksObject
});*/


