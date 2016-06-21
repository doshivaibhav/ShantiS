Template.textile.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('textDetails',id);
});
});

Template.textile.helpers({
	textileMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = TextDetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	textId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = TextDetails.findOne({JobId:id});
		console.log(id1._id)
		return id1;
	},
});
AutoForm.addHooks('textDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('textDetailsUpdateMethod',id);
		alert('Data Updated');
	}
});

AutoForm.addHooks('textDetailsInsert', {
  	onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log(arguments);
    return false;
  },
	onSuccess:function(id,doc)
	{
		alert('Data Inserted');
	}
});
SimpleSchema.debug = true;