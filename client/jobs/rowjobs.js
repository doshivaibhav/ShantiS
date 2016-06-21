Template.rowjobs.events({
'click .Add':function(events)
{	
	window.location = "/job/"+this._id;
},
'click .Show':function(events)
{	
	window.location = "/job/view/"+this._id;
}
});