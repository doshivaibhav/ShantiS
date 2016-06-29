Template.dorder.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('dODetails',id);
});
});

Template.dorder.helpers({
	DOMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = DODetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	DOId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = DODetails.findOne({JobId:id});
		console.log(id1._id)
		return id1;
	},
});
AutoForm.addHooks('DODetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('DODetailsUpdateMethod',id);
		alert('Data Updated');
		window.history.back();
		
	}
});

AutoForm.addHooks('DODetailsInsert', {
  	onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log(arguments);
    return false;
  },
	onSuccess:function(id,doc)
	{
		alert('Data Inserted');
		window.history.back();
		
	}
});
SimpleSchema.debug = true;