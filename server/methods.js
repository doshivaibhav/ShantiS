Meteor.methods({
	'updateDeliveryDoc':function(id)
	{
		DeliveryDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	}
});