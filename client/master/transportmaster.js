Template.transportmaster.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('transportMasterDetails');
});
});


var postHooks = {
	before: { 
     insert: function(doc) { 
     	doc.TransName = doc.TransName.toUpperCase();   
      	//console.log(doc.TransName);
      return doc; 
     } 
   } 
}

AutoForm.addHooks('TransportMasterDetailsInsert', postHooks);