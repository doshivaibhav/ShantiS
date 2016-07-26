Meteor.publish('jobs',function(){
return Jobs.find({CreatedBy: this.userId});
});

Meteor.publish('jobCreation',function(){
return JobCreation.find({});
});

Meteor.publish('originalDoc',function(id){
return OriginalDoc.find({JobId:id});
});

Meteor.publish('shippingDetails',function(id){
return ShippingDetails.find({JobId:id});
});

Meteor.publish('dODetails',function(id){
return DODetails.find({JobId:id});
});

Meteor.publish('iGMDetails',function(id){
return IGMDetails.find({JobId:id});
});

Meteor.publish('yardDetails',function(id){
return YardDetails.find({JobId:id});
});

Meteor.publish('docDocks',function(id){
return DocDocks.find({JobId:id});
});

Meteor.publish('deliveryDetails',function(id){
return DeliveryDetails.find({JobId:id});
});

Meteor.publish('beDetails',function(id){
return BeDetails.find({JobId:id});
});

Meteor.publish('billingDetails',function(id){
return BillingDetails.find({JobId:id});
});

Meteor.publish('fssaiDetails',function(id){
return FssaiDetails.find({JobId:id});
});

Meteor.publish('pqDetails',function(id){
return PqDetails.find({JobId:id});
});

Meteor.publish('textDetails',function(id){
return TextDetails.find({JobId:id});
});

Meteor.publish('stampDutyDetails',function(id){
return StampDutyDetails.find({JobId:id});
});

Meteor.publish('partyMasterDetails',function(){
return PartyMasterDetails.find({});
});

Meteor.publish('shippingMasterDetails',function(){
return ShippingMasterDetails.find({});
});

Meteor.publish('yardMasterDetails',function(){
return YardMasterDetails.find({});
});

Meteor.publish('emptyYardMasterDetails',function(){
return EmptyYardMasterDetails.find({});
});

Meteor.publish('transportMasterDetails',function(){
return TransportMasterDetails.find({});
});

Meteor.publish('ports',function(){
return Ports.find({});
});