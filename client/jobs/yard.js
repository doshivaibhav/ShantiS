Template.yard.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('yardDetails',id);
	self.subscribe('yardMasterDetails');
	self.subscribe('transportMasterDetails');
});
});

Template.yard.helpers({
	yardMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = YardDetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	yardId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = YardDetails.findOne({JobId:id});
		//console.log(id1._id);
		return id1;
	},
	yardNames:function(){
		var yardCol = YardMasterDetails.find({},{fields:{YrdName:1}});
			var yardarr = [];
			yardCol.forEach(function(obj){
				yardarr.push({label:obj.YrdName,value:obj.YrdName});
			})
			//console.log(portarr);
			return yardarr;
	},
	transNames:function(){
		var transCol = TransportMasterDetails.find({},{fields:{TransName:1}});
			var transarr = [];
			transCol.forEach(function(obj){
				transarr.push({label:obj.TransName,value:obj.TransName});
			})
			//console.log(portarr);
			return transarr;
	},
});
AutoForm.addHooks('yardDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('yardDetailsUpdateMethod',id);
		alert('Data Updated');
		window.history.back();
	}
});

AutoForm.addHooks('yardDetailsInsert', {
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