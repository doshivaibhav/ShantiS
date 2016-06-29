//Meteor.subscribe('jobCreation');
Template.job.onCreated(function(){
	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('jobCreation');
	self.subscribe('shippingDetails',id);
	self.subscribe('originalDoc',id);
	self.subscribe('yardDetails',id);
	self.subscribe('docDocks',id);
	self.subscribe('deliveryDetails',id);
	self.subscribe('stampDutyDetails',id);
	self.subscribe('iGMDetails',id);
	self.subscribe('beDetails',id);
	self.subscribe('billingDetails',id);
	self.subscribe('dODetails',id)
});
});
Template.job.helpers({
    jobs:(event,template)=>{
    	var id = FlowRouter.getParam('id');
    	job1 = JobCreation.findOne({_id:id});
		//console.log(job1.PGASEL);
		Session.set('PGASELVAL',job1.PGASEL);
		return job1;
	},
	docMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = OriginalDoc.findOne({JobId:id});
		//console.log(id1.length);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	pgaselfssai:function(){
			if(Session.get('PGASELVAL')=='FSSAI')
				{return true;}
			return false;
			},
	pgaselpq:function(){
		if(Session.get('PGASELVAL')=='PQ')
				{return true;}
			return false;
	},
	pgaselfssaipq:function(){
		if(Session.get('PGASELVAL')=='FSSAI - PQ')
				{return true;}
			return false;
		},
	pgaseladc:function(){
		if(Session.get('PGASELVAL')=='ADC')
				{return true;}
			return false;
	},
	pgaselwlro:function(){
		if(Session.get('PGASELVAL')=='WLRO')
				{return true;}
			return false;
		},
	pgaseltextile:function(){
		if(Session.get('PGASELVAL')=='TEXTILE')
				{return true;}
			return false;
	},
});

Template.job.events({
	'click #btnDocRec':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/orDoc";	
	},
	'click #btnShip':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/ship";
	},
	'click #btnYard':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		var id = FlowRouter.getParam('id');
		var id1 = iGMDetails.findOne({JobId:id});
		if(typeof id1 == 'undefined')
			alert("Please Fill IGM Details First");
		else
			window.location = "/"+id+"/yard";
	},
	'click #btnBe':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/boe";
	},
	'click #btnDocDocks':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/checked";
	},
	'click #btnDelivery':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/delivery";
	},
	'click #btnBill':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/bill";
	},
	'click #btnDO':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/dorder";
	},
	'click #btnStampDuty':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		var id = FlowRouter.getParam('id');
		var id1 = BeDetails.findOne({JobId:id});
		if(typeof id1 == 'undefined')
			alert("Please Fill BE Details First");
		else
			window.location = "/"+id+"/stampduty";
	},
	'click #btnIGM':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/iGMDetails";
	
	},

	'click #btnFSSAI':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		//console.log('hi');
		window.location = "/"+id+"/fssai";
	},
	
	'click #btnPQ':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/pq";
	},
	
	'click #btnTXT':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		window.location = "/"+id+"/textile";
	},
});