Template.pq.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('pqDetails',id);
});
});

Template.pq.helpers({
	pqMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = PqDetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	pqId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = PqDetails.findOne({JobId:id});
		console.log(id1._id)
		return id1;
	},
});
AutoForm.addHooks('pqDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('pqDetailsUpdateMethod',id);
		alert('Data Updated');
		window.history.back();
		
	}
});

AutoForm.addHooks('pqDetailsInsert', {
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