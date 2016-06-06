Template.stampduty.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('stampDutyDetails');
});
});

Template.stampduty.helpers({
	stampMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = StampDutyDetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	stampId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = StampDutyDetails.findOne({JobId:id});
		console.log(id1._id)
		return id1;
	},
});
AutoForm.addHooks('stampDutyFormUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('stampDutyFormUpdateMethod',id);
	}
})