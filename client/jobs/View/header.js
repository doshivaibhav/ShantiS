Template.header.onCreated(function(){
	
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('jobCreation');
});
});

Template.header.helpers({
    jobs:(event,template)=>{
    	var id = FlowRouter.getParam('id');
    	job1 = JobCreation.findOne({_id:id},{fields:{JobNo:1,Port:1,PartyJob:1}});
		//console.log(job1.PartyJob);
		return job1;
	},
	partyJobMode:function(){
		var id = FlowRouter.getParam('id');
    	job1 = JobCreation.findOne({_id:id},{fields:{PartyJob:1}});
		//console.log(job1.PartyJob);
		if(job1.PartyJob == '')
			return true;
		else
			return false;
	},
});