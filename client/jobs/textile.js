Template.textile.onCreated(function(){
var self =this;
self.autorun(function(){
	//self.subscribe('textileDetails');
});
});
/*
Template.textile.helpers({
	textileMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = TextileDetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	textileId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = TextileDetails.findOne({JobId:id});
		console.log(id1._id)
		return id1;
	},
});
AutoForm.addHooks('textileDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('textileDetailsUpdateMethod',id);
	}
})*/