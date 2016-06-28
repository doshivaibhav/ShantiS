Template.bill.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('billingDetails',id);
});
});
Template.bill.helpers({
	billMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = BillingDetails.findOne({JobId:id});
		console.log(id1);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	billId:function(){
		var id = FlowRouter.getParam('id');
		id1 = BillingDetails.findOne({JobId:id});
		//console.log(id1._id)
		return id1;
	},
});

AutoForm.addHooks('billDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('updatebillDoc',id);
		alert('Data Updated');
		window.history.back();
	}
});

AutoForm.addHooks('billDetailsInsert', {
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