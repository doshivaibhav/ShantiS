Template.shippingmaster.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('shippingMasterDetails');
});
});