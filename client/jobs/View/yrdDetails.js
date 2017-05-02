Template.yrdDetails.onCreated(function(){	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('yardDetails',id);
	self.subscribe('iGMDetails',id);
});
});

Template.yrdDetails.helpers({
	yard:function(){
		var id = FlowRouter.getParam('id');
		var id1 = YardDetails.findOne({JobId:id});
		//console.log(id1._id)
		return id1;
	},
});

Template.yrdDetails.events({
	
	'click #btnYard':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		var id = FlowRouter.getParam('id');
		var id1 = IGMDetails.findOne({JobId:id});
		if(typeof id1 == 'undefined')
			alert("Please Fill IGM Details First");
		else
			FlowRouter.go("/:id/yard",{id:id});
	},
});