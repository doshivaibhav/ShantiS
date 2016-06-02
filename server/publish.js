Meteor.publish('jobs',function(){
return Jobs.find({CreatedBy: this.userId});
});

Meteor.publish('jobCreation',function(){
return JobCreation.find({});
});

Meteor.publish('originalDoc',function(){
return OriginalDoc.find({});
});

Meteor.publish('shippingDetails',function(){
return ShippingDetails.find({});
});

Meteor.publish('yardDetails',function(){
return YardDetails.find({});
});
Meteor.publish('docDocks',function(){
return DocDocks.find({});
});
Meteor.publish('deliveryDetails',function(){
return DeliveryDetails.find({});
});
Meteor.publish('partyMasterDetails',function(){
return PartyMasterDetails.find({});
});