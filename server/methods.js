/*Meteor.methods({
	'updateDeliveryDoc':function(doc)
	{
		console.log("updateDeliveryDoc");
		if(isClient)
			var id = FlowRouter.getParam('id');
		DeliveryDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	}
});*/