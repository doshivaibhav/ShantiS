Template.jobDetails.onCreated(function(){	
var self =this;
self.autorun(function(){
	self.subscribe('jobCreation');
});
});

Template.jobDetails.helpers({
    jobs:(event,template)=>{
    	var id = FlowRouter.getParam('id');
    	job1 = JobCreation.findOne({_id:id});
		//console.log(job1.PGASEL);
		Session.set('PGASELVAL',job1.PGASEL);
		return job1;
	},
	});