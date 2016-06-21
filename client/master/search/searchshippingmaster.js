Template.searchshippingmaster.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('shippingMasterDetails');
});
});

Template.searchshippingmaster.helpers({
  shippingIndex: () => ShippingMasterIndex,
  
});