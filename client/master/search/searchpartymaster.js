Template.searchpartymaster.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('partyMasterDetails');
});
});

Template.searchpartymaster.helpers({
  partyIndex: () => PartyMasterIndex,
  
});

/*Template.searchpartymaster.events({
	'click h4': function(){
		Session.set('showOther', !Session.get('showOther'));
	}
});*/