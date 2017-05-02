Template.igmDet.onCreated(function(){	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('iGMDetails',id);
});
});

Template.igmDet.helpers({
	igm:function(){
		var id = FlowRouter.getParam('id');
		var id1 = IGMDetails.findOne({JobId:id});
		//console.log(id1._id)
		return id1;
	},
});

Template.igmDet.events({
	'click #btnIGM':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/iGMDetails",{id:id});
	
	},
});