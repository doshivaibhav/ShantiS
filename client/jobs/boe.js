Template.boe.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('beDetails');
});
});
Template.boe.helpers({
	boeMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = BeDetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	boeId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = BeDetails.findOne({JobId:id});
		console.log(id1._id)
		return id1;
	},
});
AutoForm.addHooks('beDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('beDetailsUpdateMethod',id);
	}
})