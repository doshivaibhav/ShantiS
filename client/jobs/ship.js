Template.ship.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('shippingDetails',id);
	self.subscribe('shippingMasterDetails');
});
});

Template.ship.helpers({
	shipMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = ShippingDetails.findOne({JobId:id});
		//console.log(id1._id);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	shipId:function(){
		var id = FlowRouter.getParam('id');
		var id1 = ShippingDetails.findOne({JobId:id});
		console.log(id1._id)
		return id1;
	},
	shipPartyName:function(){
		var shipCol = ShippingMasterDetails.find({},{fields:{ScoName:1}});
			var shiparr = [];
			shipCol.forEach(function(obj){
				shiparr.push({label:obj.ScoName,value:obj.ScoName});
			})
			//console.log(portarr);
			return shiparr;
	},
});

AutoForm.addHooks('shipDetailsUpdate',{
	onSuccess:function(id,doc)
	{
		Meteor.call('shipDetailsUpdateMethod',id);
		alert('Data Updated');
		window.history.back();
	}
});

AutoForm.addHooks('shipDetailsInsert', {
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