
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
	},
	docMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = OriginalDoc.findOne({JobId:id});
		//console.log(id1.length);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	docDate:function(){
		var id = FlowRouter.getParam('id');
		var id1 = OriginalDoc.findOne({JobId:id},{fields:{OrRecDate:1}});
		return id1;
	},
});

AutoForm.addHooks('orDocRec', {
  	onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log(arguments);
    return false;
  },
	onSuccess:function(id,doc)
	{
		alert('Original Document Recieved');
	}
});
SimpleSchema.debug = true;