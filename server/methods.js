Meteor.methods({
	'updateDeliveryDoc':function(id)
	{
		DeliveryDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'updateDockDocsDoc':function(id){
		DocDocks.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'shipDetailsUpdateMethod':function(id){
		ShippingDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'stampDutyFormUpdateMethod':function(id){
		ShippingDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'beDetailsUpdateMethod':function(id){
		BeDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'iGMDetailsUpdateMethod':function(id){
		IGMDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'yardDetailsUpdateMethod':function(id){
		YardDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
});
