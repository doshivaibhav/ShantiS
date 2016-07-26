Template.eyardmaster.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('emptyYardMasterDetails');
});
});


var postHooks = {
	before: { 
     insert: function(doc) { 
     	doc.EYrdName = doc.EYrdName.toUpperCase();   
      	//console.log(doc.YrdName);
      return doc; 
     } 
   } 
}

AutoForm.addHooks('EmptyYardMasterDetailsInsert', postHooks);