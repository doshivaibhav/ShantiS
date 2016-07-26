
Template.shippingmaster.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('shippingMasterDetails');

});
});

var postHooks = {
	before: { 
     insert: function(doc) { 
     	doc.ScoName = doc.ScoName.toUpperCase();   
      	//console.log(doc.ScoName);
      return doc; 
     } 
   } 
}

AutoForm.addHooks('ShippingMasterDetailsInsert', postHooks);