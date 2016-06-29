Template.iGMDetails.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('iGMDetails',id);
	self.subscribe('yardMasterDetails');
});
});

Template.iGMDetails.helpers({
	igmMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = IGMDetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	igmId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = IGMDetails.findOne({JobId:id});
		console.log(id1._id)
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
});
AutoForm.addHooks('iGMDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('iGMDetailsUpdateMethod',id);
		alert('Data Updated');
		window.history.back();
		
	}
});

AutoForm.addHooks('iGMDetailsInsert', {
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