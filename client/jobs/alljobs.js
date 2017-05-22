//Meteor.subscribe('jobCreation');
Template.alljobs.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = this._id;
	console.log(id);
	self.subscribe('jobCreation');
	self.subscribe('dODetailsAll');
	self.subscribe('originalDocAll');
	self.subscribe('yardDetailsAll');
	self.subscribe('deliveryDetailsAll');
	self.subscribe('iGMDetailsAll');
	self.subscribe('beDetailsAll');
    self.subscribe('billingDetailsAll');
});
});
Template.alljobs.helpers({
    alljobs:()=>{
		return JobCreation.find({},{sort:{DateOfCreation:-1}});
	}
});