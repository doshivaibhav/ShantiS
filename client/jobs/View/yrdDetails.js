Template.yrdDetails.onCreated(function(){	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('yardDetails',id);
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
		window.location = "/"+id+"/yard";
	},
});