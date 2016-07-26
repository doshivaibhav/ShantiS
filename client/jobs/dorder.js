Template.dorder.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('dODetails',id);
	self.subscribe('emptyYardMasterDetails');
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
	DispDays:function(){
		var d = AutoForm.getFieldValue('FreeDaysFrom');
		var ds = d.split('-');
		var dt = new Date(ds[0],ds[1]-1,ds[2]);
		dt.setDate(dt.getDate()+13);
		return dt.getDate() + '-' + (dt.getMonth()+1) +'-' +dt.getFullYear();
	},
	eyardNames:function(){
		var yardCol = EmptyYardMasterDetails.find({},{fields:{EYrdName:1}});
			var yardarr = [];
			yardCol.forEach(function(obj){
				yardarr.push({label:obj.EYrdName,value:obj.EYrdName});
			})
			//console.log(portarr);
			return yardarr;
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