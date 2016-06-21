//Meteor.subscribe('jobCreation');
Template.alljobs.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('jobCreation');
});
});
Template.alljobs.helpers({
    alljobs:()=>{
		return JobCreation.find({},{sort:{DateOfCreation:-1}});
	}
});