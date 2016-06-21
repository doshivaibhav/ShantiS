Template.searchpartymaster.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('partyMasterDetails');
});
});

Template.searchpartymaster.helpers({
  partyIndex: () => PartyMasterIndex,
  
});