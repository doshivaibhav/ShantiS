Template.rowjobs.events({
/*'click .Add':function(events)
{	
	window.location = "/job/"+this._id;
},*/
'click .Show':function(events)
{	
	FlowRouter.go("/job/view/:id",{id: this._id});
	// window.location = "/job/view/"+this._id;
}
});

Template.rowjobs.helpers({
	jobid: function()
	{
		return _id;
	}
});