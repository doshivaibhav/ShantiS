Template.yardmaster.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('yardMasterDetails');
});
});


var postHooks = {
	before: { 
     insert: function(doc) { 
     	doc.YrdName = doc.YrdName.toUpperCase();   
      	//console.log(doc.YrdName);
      return doc; 
     } 
   } 
}

AutoForm.addHooks('YardMasterDetailsInsert', postHooks);