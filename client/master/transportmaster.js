Template.transportmaster.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('transportMasterDetails');
});
});