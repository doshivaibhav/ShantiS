Template.fssai.onCreated(function(){
var self =this;
self.autorun(function(){
	//self.subscribe('fssaiDetails');
});
});

/*Template.fssai.helpers({
	fssaiMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = FssaiDetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	fssaiId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = FssaiDetails.findOne({JobId:id});
		console.log(id1._id)
		return id1;
	},
});
AutoForm.addHooks('fssaiDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('fssaiDetailsUpdateMethod',id);
	}
})*/