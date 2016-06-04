Template.yardmaster.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('yardMasterDetails');
});
});