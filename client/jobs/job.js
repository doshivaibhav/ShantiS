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
		//window.location = "/"+id+"/orDoc";
		FlowRouter.go("/:id/orDoc",{id:id});
	},
	'click #btnShip':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		//window.location = "/"+id+"/ship";
		FlowRouter.go("/:id/ship");
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
			FlowRouter.go("/:id/yard",{id:id});
	},
	'click #btnBe':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/boe",{id:id});;
	},
	'click #btnDocDocks':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/checked",{id:id});;
	},
	'click #btnDelivery':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/delivery",{id:id});;
	},
	'click #btnBill':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/bill",{id:id});;
	},
	'click #btnDO':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/dorder",{id:id});;
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
			FlowRouter.go("/:id/stampduty",{id:id});;
	},
	'click #btnIGM':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/iGMDetails",{id:id});;
	
	},

	'click #btnFSSAI':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		//console.log('hi');
		FlowRouter.go("/:id/fssai",{id:id});;
	},
	
	'click #btnPQ':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/pq",{id:id});;
	},
	
	'click #btnTXT':function(e)
	{
		var id = FlowRouter.getParam('id');
		e.preventDefault();
		FlowRouter.go("/:id/textile",{id:id});;
	},
});