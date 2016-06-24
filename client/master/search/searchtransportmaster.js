Template.searchtransportmaster.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('transportMasterDetails');
});
});

Template.searchtransportmaster.helpers({
  transportIndex: () => TransportMasterIndex,
  
});