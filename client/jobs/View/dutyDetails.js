Template.dutyDetails.onCreated(function(){	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('stampDutyDetails',id);
});
});

Template.dutyDetails.helpers({
	duty:function(){
		var id = FlowRouter.getParam('id');
		var id1 = StampDutyDetails.findOne({JobId:id});
		//console.log(id1._id)
		return id1;
	},
});

Template.dutyDetails.events({
	'click #btnStampDuty':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		var id = FlowRouter.getParam('id');
		var id1 = BeDetails.findOne({JobId:id});
		if(typeof id1 == 'undefined')
			alert("Please Fill BE Details First");
		else
			FlowRouter.go("/:id/stampduty",{id:id});
	},
});