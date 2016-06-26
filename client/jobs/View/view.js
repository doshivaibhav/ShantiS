Template.view.onCreated(function(){
	
var self =this;
self.autorun(function(){
	self.subscribe('jobCreation');
});
});

Template.view.helpers({
    jobs:(event,template)=>{
    	var id = FlowRouter.getParam('id');
    	job1 = JobCreation.findOne({_id:id});
		//console.log(job1.PGASEL);
		Session.set('PGASELVAL',job1.PGASEL);
		return job1;
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

Template.view.events({
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