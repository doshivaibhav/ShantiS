Template.dorderDetails.onCreated(function(){	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('dODetails',id);
});
});

Template.dorderDetails.helpers({
	dorder:function(){
		var id = FlowRouter.getParam('id');
		var id1 = DODetails.findOne({JobId:id});
		//console.log(id1._id)
		return id1;
	},
});

Template.dorderDetails.events({
	'click #btnDO':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/dorder",{id:id});;;
	},
});