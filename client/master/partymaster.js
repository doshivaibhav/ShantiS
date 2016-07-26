Template.partymaster.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('partyMasterDetails');
});
});

var postHooks = {
	before: { 
     insert: function(doc) { 
     	doc.ClientName = doc.ClientName.toUpperCase();   
      	//console.log(doc.ClientName);
      return doc; 
     } 
   } 
}

AutoForm.addHooks('PartyMasterDetailsInsert', postHooks);