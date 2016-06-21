Template.stampduty.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('stampDutyDetails',id);
	self.subscribe('beDetails',id)
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
	getBe:function(){
		var id = FlowRouter.getParam('id');
		var id1 = BeDetails.findOne({JobId:id},{fields:{TotalRs:1}});
		console.log(id1.TotalRs)
		return id1.TotalRs*0.001;
	}
});
AutoForm.addHooks('stampDutyFormUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('stampDutyFormUpdateMethod',id);
		alert('Data Updated');
		window.history.back();
	}
});

AutoForm.addHooks('stampDutyFormInsert', {
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