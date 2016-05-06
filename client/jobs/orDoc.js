
Template.orDoc.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('originalDoc');
});
});

Template.orDoc.helpers({
	jobId:function(){
		var id = FlowRouter.getParam('id');
		console.log(id);
	}
});