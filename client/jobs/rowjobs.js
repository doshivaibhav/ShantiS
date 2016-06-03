Template.rowjobs.events({
'click tr':function(events)
{	
	window.location = "/job/"+this._id;
}
});