Template.alljobs.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('jobCreation');
	self.subscribe('ports');
});
});
/*Template.newJob.events({
	'submit form': function(event){
		event.preventDefault();
		var JobNoVar = event.target.JobNo.value;
		var ImporterNameVar = event.target.ImporterName.value;
		var PartyJobNoVar = event.target.PartyJobNo.value;
		var PortVar = event.target.Port.value;
		var MCVar = event.target.MC.value;
		var MCDateVar = event.target.MCDate.value;
		var DescriptionVar = event.target.Description.value;
		var TypeCargoVar = event.target.TypeCargo.value;
		var PkgNoVar = event.target.PkgNo.value;
		var GrossWtVar = event.target.GrossWt.value;
		var CBMVar = event.target.CBM.value;
		var LoadPortVar = event.target.LoadPort.value;
		var MBLNoVar = event.target.MBLNo.value;
		var HBLNoVar = event.target.HBLNo.value;
		var VesselBLVar = event.target.VesselBL.value;
		var VoyageVar = event.target.Voyage.value;
		
		Job.insert({
			JobNo:JobNoVar,
			Port:PortVar,
			PartyJob:PartyJobNoVar,
			ImporterName:ImporterNameVar,
			Doc:{
				Rec: MCVar,
				RecDate:MCDateVar,
			},
			BE:{
				Desc: DescriptionVar
			},
			BL:{
				TypeOfCargo:TypeOfCargo
			},
			
		});
	}
});*/

Template.newJob.helpers({
	MC:
		function()
		{
			return [{label:'Mail',value:'Mail'},{label:'Courier',value:'Courier'}]
		},
	TOC:function(){
		return [{label:'LCL',value:'LCL'},{label:'20" FCL',value:'20" FCL'},{label:'40" FCL',value:'40" FCL'}]
	},
	port:function(){
		var portCol = Ports.find({});
			var portarr = [];
			portCol.forEach(function(obj){
				portarr.push({label:obj.name,value:obj.name});
			})
			//console.log(portarr);
			return portarr;
	},
	
});


//AutoForm.hooks({ newJobInsert: { before: { insert: function(doc) { console.log(doc); } }, after: { insert: function(error, result) { console.log('Occured error: ' + error); } }, beginSubmit: function() { console.log('begin submit'); }, onSuccess: function(formType, result) { console.log("Insert succeeded"); console.log('Result ' + result); }, onError: function(formType, error) { console.log('Error!!!'); console.log(error); } } }); 
AutoForm.addHooks('customerItem', {
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log(arguments);
    return false;
  }
});
SimpleSchema.debug = true;