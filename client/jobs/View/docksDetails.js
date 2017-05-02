Template.docksDetails.onCreated(function(){	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('docDocks',id);
});
});

Template.docksDetails.helpers({
	docks:function(){
		var id = FlowRouter.getParam('id');
		var id1 = DocDocks.findOne({JobId:id});
		//console.log(id1._id)
		return id1;
	},
});

Template.docksDetails.events({
	'click #btnDocDocks':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/checked",{id:id});;
	},
});