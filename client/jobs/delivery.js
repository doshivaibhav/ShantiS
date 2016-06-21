Template.delivery.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('deliveryDetails',id);
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

AutoForm.addHooks('deliveryDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('updateDeliveryDoc',id);
		alert('Data Updated');
		window.history.back();
	}
});

AutoForm.addHooks('deliveryDetailsInsert', {
  	onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log(arguments);
    return false;
  },
	onSuccess:function(id,doc)
	{
		alert('Data Inserted');
		window.history.back();
		
	}
});
SimpleSchema.debug = true;