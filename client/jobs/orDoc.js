
Template.orDoc.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('originalDoc',id);
});
});

Template.orDoc.helpers({
	jobId:function(){
		var id = FlowRouter.getParam('id');
		console.log(id);
	}
});

AutoForm.addHooks('orDocRec', {
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