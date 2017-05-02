Template.boeDetails.onCreated(function(){	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('beDetails',id);
});
});

Template.boeDetails.helpers({
	boe:function(){
		var id = FlowRouter.getParam('id');
		var id1 = BeDetails.findOne({JobId:id});
		//console.log(id1._id)
		return id1;
	},
});

Template.boeDetails.events({
	'click #btnBe':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/boe",{id:id});
	},
});