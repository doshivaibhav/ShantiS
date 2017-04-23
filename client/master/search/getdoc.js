Template.getdoc.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('getDocDetails');
});
});

Template.getdoc.helpers({
  getDocIndex: () => GetDocIndex,
  
});