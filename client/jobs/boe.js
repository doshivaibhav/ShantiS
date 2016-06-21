Template.boe.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('beDetails',id);
});
});
Template.boe.helpers({
	boeMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = BeDetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	boeId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = BeDetails.findOne({JobId:id});
		console.log(id1._id)
		return id1;
	},
	totalcost:function(){
		var av = Number(AutoForm.getFieldValue("AV"));
		var duty = Number(AutoForm.getFieldValue("Duty"));
		var bndlic = Number(AutoForm.getFieldValue("BndLic"));
		var total = av+duty+bndlic;
		return total;
		},
	octroiAmount:function(){
		var total = Number(AutoForm.getFieldValue('TotalRs'));
		var percent = Number(AutoForm.getFieldValue('Octroi'));

		var octCost = total*percent/100;
		return octCost;
	}

});
AutoForm.addHooks('beDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('beDetailsUpdateMethod',id);
		alert('Data Updated');
		window.history.back();
	}
});

AutoForm.addHooks('beDetailsInsert', {
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
/*Template.registerHelper("addition",function(){
	var av = Number(AutoForm.getFieldValue("AV"));
	var duty = Number(AutoForm.getFieldValue("Duty"));
	var bndlic = Number(AutoForm.getFieldValue("BndLic"));
	var total = av+duty+bndlic;
	return total;
})*/