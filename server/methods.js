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
	'DODetailsUpdateMethod':function(id){
		DODetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'stampDutyFormUpdateMethod':function(id){
		StampDutyDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
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
	'fssaiDetailsUpdateMethod':function(id){
		FssaiDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'pqDetailsUpdateMethod':function(id){
		PqDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'textileDetailsUpdateMethod':function(id){
		TextDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
	'updatebillDoc':function(id){
		BillingDetails.update({JobId:id},{$set:{updatedBy:function(){return Meteor.userId();}}});
	},
});
