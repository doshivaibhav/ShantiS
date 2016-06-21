Template.docDocks.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('docDocks',id);
});
});
Template.docDocks.helpers({
	docksMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = DocDocks.findOne({JobId:id});
		//console.log(id1);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	docksId:function(){
		var id = FlowRouter.getParam('id');
		id1 = DocDocks.findOne({JobId:id});
		//console.log(id1._id)
		return id1;
	},
});
AutoForm.addHooks('docDocksFormUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('updateDockDocsDoc',id);
		alert('Data Updated');
		window.history.back();
	}
});


AutoForm.addHooks('docDocksFormInsert', {
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