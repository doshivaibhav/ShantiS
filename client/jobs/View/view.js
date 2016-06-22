Template.view.onCreated(function(){
	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('originalDoc',id);
	self.subscribe('yardDetails',id);
	self.subscribe('docDocks',id);
	self.subscribe('deliveryDetails',id);
	self.subscribe('stampDutyDetails',id);
	self.subscribe('iGMDetails',id);
	self.subscribe('beDetails',id);
	
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