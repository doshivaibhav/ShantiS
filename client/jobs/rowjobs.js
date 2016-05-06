Template.rowjobs.helpers({
	'abc':function(){
		console.log(Session.set('abc','123'));
	}
});
Template.rowjobs.events({
'click tr':function(events)
{

	window.location = "/job/"+this._id;
}
});