if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('jobs');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context,redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/',{
	name:'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('jobs');
		}
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/jobs', {
	name: 'jobs',
	action(){
		BlazeLayout.render('MainLayout',{main:'Jobs'});
	}
	
});

FlowRouter.route('/alljobs', {
	name: 'alljobs',
	action(){
		BlazeLayout.render('MainLayout',{main:'alljobs'});
	}
	});

FlowRouter.route('/master', {
	name: 'master',
	action(){
		BlazeLayout.render('MainLayout',{main:'masterhome'});
	}
	});

FlowRouter.route('/partymaster', {
	name: 'partymaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'partymaster'});
	}
	});

FlowRouter.route('/searchpartymaster', {
	name: 'searchpartymaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'searchpartymaster'});
	}
	});

FlowRouter.route('/searchshippingmaster', {
	name: 'searchshippingmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'searchshippingmaster'});
	}
	});

FlowRouter.route('/searchyardmaster', {
	name: 'searchyardmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'searchyardmaster'});
	}
	});

FlowRouter.route('/searchtransportmaster', {
	name: 'searchtransportmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'searchtransportmaster'});
	}
	});

FlowRouter.route('/shippingmaster', {
	name: 'shippingmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'shippingmaster'});
	}
	});

FlowRouter.route('/yardmaster', {
	name: 'yardmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'yardmaster'});
	}
	});
FlowRouter.route('/transportmaster', {
	name: 'transportmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'transportmaster'});
	}
	});
FlowRouter.route('/job/:id', {
	name: 'job',
	action(){
		BlazeLayout.render('MainLayout',{main:'job'});
	}
	});

FlowRouter.route('/job/view/:id', {
	name: 'view',
	action(){
		BlazeLayout.render('MainLayout',{main:'view'});
	}
	});

FlowRouter.route('/:id/orDoc', {
	name: 'orDoc',
	action(){
		BlazeLayout.render('MainLayout',{main:'orDoc'});
	}
	});

FlowRouter.route('/:id/ship', {
	name: 'ship',
	action(){
		BlazeLayout.render('MainLayout',{main:'ship'});
	}
	});
FlowRouter.route('/:id/yard', {
	name: 'yard',
	action(){
		BlazeLayout.render('MainLayout',{main:'yard'});
	}
	});
FlowRouter.route('/:id/boe', {
	name: 'boe',
	action(){
		BlazeLayout.render('MainLayout',{main:'boe'});
	}
	});
FlowRouter.route('/:id/fssai', {
	name: 'fssai',
	action(){
		BlazeLayout.render('MainLayout',{main:'fssai'});
	}
	});
FlowRouter.route('/:id/pq', {
	name: 'pq',
	action(){
		BlazeLayout.render('MainLayout',{main:'pq'});
	}
	});
FlowRouter.route('/:id/textile', {
	name: 'textile',
	action(){
		BlazeLayout.render('MainLayout',{main:'textile'});
	}
	});
FlowRouter.route('/:id/checked', {
	name: 'checked',
	action(){
		BlazeLayout.render('MainLayout',{main:'docDocks'});
	}
	});
FlowRouter.route('/:id/delivery', {
	name: 'delivery',
	action(){
		BlazeLayout.render('MainLayout',{main:'delivery'});
	}
	});
FlowRouter.route('/:id/stampduty', {
	name: 'stampduty',
	action(){
		BlazeLayout.render('MainLayout',{main:'stampduty'});
	}
	});
FlowRouter.route('/:id/iGMDetails', {
	name: 'iGMDetails',
	action(){
		BlazeLayout.render('MainLayout',{main:'iGMDetails'});
	}
	});