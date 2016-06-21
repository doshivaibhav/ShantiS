Template.searchyardmaster.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('yardMasterDetails');
});
});

Template.searchyardmaster.helpers({
  yardIndex: () => YardMasterIndex,
  
});