Template.searchtransportmaster.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('TransportMasterDetails');
});
});

Template.searchtransportmaster.helpers({
  transportIndex: () => TransportMasterIndex,
  
});