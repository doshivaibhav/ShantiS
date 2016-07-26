Template.searcheyardmaster.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('emptyYardMasterDetails');
});
});

Template.searcheyardmaster.helpers({
  eyardIndex: () => EmptyYardMasterIndex,
  
});