Template.yard.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('yardDetails');
});
});

Template.yard.helpers({
	yardMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = YardDetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	yardId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = YardDetails.findOne({JobId:id});
		//console.log(id1._id);
		return id1;
	},
});
AutoForm.addHooks('yardDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('yardDetailsUpdateMethod',id);
	}
})