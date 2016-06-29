Jobs = new Mongo.Collection('jobs');
JobCreation = new Mongo.Collection('jobCreation');
OriginalDoc = new Mongo.Collection('originalDoc');
ShippingDetails = new Mongo.Collection('shippingDetails');
DODetails = new Mongo.Collection('dODetails');
YardDetails = new Mongo.Collection('yardDetails');
DocDocks = new Mongo.Collection('docDocks');
DeliveryDetails = new Mongo.Collection('deliveryDetails');
Ports = new Mongo.Collection('ports');
PartyMasterDetails = new Mongo.Collection('partyMasterDetails');
ShippingMasterDetails = new Mongo.Collection('shippingMasterDetails');
YardMasterDetails = new Mongo.Collection('yardMasterDetails');
TransportMasterDetails = new Mongo.Collection('transportMasterDetails');
BeDetails = new Mongo.Collection('beDetails');
StampDutyDetails = new Mongo.Collection('stampDutyDetails');
IGMDetails = new Mongo.Collection('iGMDetails');
BillingDetails = new Mongo.Collection('billingDetails');
FssaiDetails = new Mongo.Collection('fssaiDetails');
PqDetails = new Mongo.Collection('pqDetails');
TextDetails = new Mongo.Collection('textDetails');

PortsSchema = new SimpleSchema({
	name:{
		type:String,
		label:"Port Name",
	}
});



ContainerSchema = new SimpleSchema({
	containerNo:{
		type:String,
		label:"Container",
		max: 11,
		defaultValue:""
	}
});

OriginalDocSchema = new SimpleSchema({
		JobId:{
			type:String,
			autoValue:function(events,template)
			{
				if(Meteor.isClient)
				{var id = FlowRouter.getParam('id');
				console.log(id);
				return id;
		  }
				},
		  autoform:{
		  	type:"hidden",
		  },
		},
		OrRec:{
			type:Boolean,
			label:"Original Recieved?",
			defaultValue:0
		},
		OrRecDate:{
			type:String,
			label:"Reception Date",
			defaultValue:function(){
			return new Date();
		},
		autoform: {
      afFieldInput: {
        type: "date"
      }
    }
	}
});
DocSchema = new SimpleSchema({
	Rec:{
			type:String,
			label:"Mail/Courier",
			allowedValues: ['Mail', 'Courier']
		},
		RecDate:{
			type:Date,
			label:"Reception Date",
			defaultValue:"",
			autoform: {
      afFieldInput: {
        type: "date"
      }
		},
		
    }
		
});

BESchema = new SimpleSchema({
	JobId:{
	type:String,
	autoValue:function(events,template)
	{
		if(Meteor.isClient)
		{var id = FlowRouter.getParam('id');
		console.log(id);
		return id;
		}
	},
  autoform:{
  	type:"hidden",
  },
},
	Desc:{
		type:String,
		label:"Product Description",
		defaultValue:"",
		max:100
	},
	No:{
		type:String,
		label:"BOE No.",
		defaultValue:"",
		max:8
	},
	Date:{type:String,label:"B/E Date.",defaultValue:"",
	autoform: { afFieldInput: 
		{ type: "date"
	}}
	},
	
	AV:{type:String,label:"A/V Rs.", max: 15, defaultValue:"0.00",autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	Duty:{type:String,label:"Duty Rs.", max: 10, defaultValue:"0.00",autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	DutyDate:{type:String,label:"Duty Payment Date",defaultValue:"",optional:true, autoform: { afFieldInput: 
		{ type: "date"
	}}},
	BndLic:{type:String,label:"Bond Amt. / Licence Amt. Rs.", max: 9, defaultValue:"0.00",autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	TotalRs:{type:String,label:"Total Rs.", max: 9, defaultValue:"0.00",autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	Octroi:{type:String,label:"Octroi %", max: 4, defaultValue:"0.00",autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	OctAmt:{type:String,label:"Octroi Amt. Rs.", max: 6, defaultValue:"0.00",autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	Insurance:{type:String,label:"Insurance", allowedValues:['By SSAPL','By Party'],defaultValue:'By SSAPL'},
	updatedBy:{
			type:String,
		label:"Prepared By",
		autoValue:function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}
		}
});

BLSchema = new SimpleSchema({
	TypeOfCargo:{
		type:String,
		label:"Type of Cargo",
		allowedValues: ['LCL', '20" FCL' , '40" FCL']
	},

		PkgNo:{
			type:String,
			label:"No. Of Packages",
			max: 4,
			defaultValue:"",
			autoform: {
      afFieldInput: {
        type: "number"
      }
    }
		},

		GrossWt:{
			type:String,
			label:"Gross Weight (Kgs)",
			max: 8,
			defaultValue:"",
			autoform: {
      afFieldInput: {
        type: "number"
      }
    }
		},

		CBM:{
			type:String,
			label:"CBM",
			max: 7,
			defaultValue:"",
			autoform: {
      afFieldInput: {
        type: "number"
      }
    }
		},	

		LoadPort:{
			type:String,
			label:"Port of Loading",
			defaultValue:"",
			max: 30,
		},

		HBLNo:{
			type:String,
			label:"HBL No.",
			optional: true,
			max: 30,
			defaultValue:""
		},
		HBLDate:{
			type:String,
			label:"HBL Date",
			optional: true,
			defaultValue:'',
			autoform: {
      		afFieldInput: {
        	type: "date"
      		}
    	}	
		},		

		MBLNo:{
			type:String,
			label:"MBL No.",
			max: 30,
			defaultValue:""
		},
		MBLDate:{
			type:String,
			label:"MBL Date",
			defaultValue:function(){
			return new Date();
		},
			autoform: {
      		afFieldInput: {
        	type: "date"
      		}
    	}	
		},			


		Container:{
			type:[ContainerSchema],
			label:"Container(s)"
		},

		VesselBL:{
			type:String,
			label:"Vessel in B/L",
			max: 50,
			defaultValue:""
		},

		Voyage:{
			type:String,
			label:"Voyage",
			max: 6,
			defaultValue:""
		},

		updatedBy:{
			type:String,
		label:"Prepared By",
		autoValue:function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}
		}
});

FssaiSchema = new SimpleSchema({
	JobId:{
	type:String,
	autoValue:function(events,template)
	{
		if(Meteor.isClient)
		{var id = FlowRouter.getParam('id');
		console.log(id);
		return id;
		}
	},
  autoform:{
  	type:"hidden",
  },
},	
	AppNo:{type:String,label:"FSSAI Application No.", max: 30, defaultValue:""},
	AppDate:{type:String,label:"FSSAI Application Date", autoform: {
      afFieldInput: {
        type: "date"
      }}},
    AptDate:{type:String,label:"FSSAI Appointment Date", autoform: {
      afFieldInput: {
        type: "date"
      }}}, 
    Fssichrgs:{type:String,label:"FSSAI Charges", max: 30, defaultValue:""},
    SampleFwd:{type:String,label:"FSSAI Sample Forwarding Date", autoform: {
      afFieldInput: {
        type: "date"
      }}},
    FssaiRpt:{type:String,label:"FSSAI Report Date", autoform: {
      afFieldInput:{
        type: "date"
      }}},
    FssaiSts:{type:String,label:"FSSAI Report Status", allowedValues:['Pass','Fail']},  
	updatedBy:{
	type:String,
	label:"Prepared By",
	autoValue:function(){
		return this.userId
	},
	autoform:{
	type:"hidden"
		}
	}
});

PqSchema = new SimpleSchema({
	JobId:{
	type:String,
	autoValue:function(events,template)
	{
		if(Meteor.isClient)
		{var id = FlowRouter.getParam('id');
		console.log(id);
		return id;
		}
	},
  autoform:{
  	type:"hidden",
  },
},	
	IroNo:{type:String,label:"PQ IRO No.", max: 30, defaultValue:""},
	IroAppDate:{type:String,label:"IRO Application Date", autoform: {
      afFieldInput: {
        type: "date"
      }}},
    IroAptDate:{type:String,label:"PQ Appointment Date", autoform: {
      afFieldInput: {
        type: "date"
      }}}, 
    Irochrgs:{type:String,label:"PQ Charges Rs.", max: 30, defaultValue:""},
    IroRpt:{type:String,label:"PQ Report Date", autoform: {
      afFieldInput:{
        type: "date"
      }}},
    IroSts:{type:String,label:"PQ Report Status", allowedValues:['Pass','Fail']},
 	updatedBy:{
	type:String,
	label:"Prepared By",
	autoValue:function(){
		return this.userId
	},
	autoform:{
	type:"hidden"
		}
	}
});

TxtSchema = new SimpleSchema({
	JobId:{
	type:String,
	autoValue:function(events,template)
	{
		if(Meteor.isClient)
		{var id = FlowRouter.getParam('id');
		console.log(id);
		return id;
		}
	},
  autoform:{
  	type:"hidden",
  },
},	
	TxtSampNo:{type:String,label:"Textile Sample No.", max: 30, defaultValue:""},
	TxtAppDate:{type:String,label:"Sample Draw Date", autoform: {
      afFieldInput: {
        type: "date"
      }}},
    TxtRcdDate:{type:String,label:"Sample Received Date", autoform: {
      afFieldInput: {
        type: "date"
      }}}, 
    Txtchrgs:{type:String,label:"Textiles Committee Charges Rs.", max: 30, defaultValue:""},
    TxtRpt:{type:String,label:"Textile Report Date", autoform: {
      afFieldInput:{
        type: "date"
      }}},
    TxtSts:{type:String,label:"Textile Report Status", allowedValues:['Pass','Fail']},
 	updatedBy:{
	type:String,
	label:"Prepared By",
	autoValue:function(){
		return this.userId
	},
	autoform:{
	type:"hidden"
		}
	}
});

IGMSchema = new SimpleSchema({
	JobId:{
	type:String,
	autoValue:function(events,template)
	{
		if(Meteor.isClient)
		{var id = FlowRouter.getParam('id');
		console.log(id);
		return id;
		}
	},
  autoform:{
  	type:"hidden",
  },
},
	IGMNo:{type:String,label:"IGM No.",defaultValue:"",max:7,autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	Date:{type:String,label:"Date of Entry",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	ItemNo:{type:String,label:"Item No.",defaultValue:"",max:5,autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	InwardDate:{type:String,label:"Inward Date",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	DestuffingYard:{type:String,label:"CFS Name",defaultValue:"",optional:true},
	MumbaiIGMNo:{type:String,label:"Mumbai IGM No",defaultValue:"",optional:true,autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	MumbaiDate:{type:String,label:"Date",optional:true,autoform: {
      afFieldInput: {
        type: "date",
      }}},
	MumbaiItemNo:{type:String,label:"Item No",optional:true,defaultValue:"",autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	MumbaiInwardDate:{type:String,label:"Inward Date",optional:true,autoform: {
      afFieldInput: {
        type: "date"
      }}},
	updatedBy:{
			type:String,
		label:"Prepared By",
		autoValue:function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}
		}
});


/*PGASchema = new SimpleSchema({
PGASEL:{type:String,label:"Select Partner Government Agency",
allowedValues: ['FSSAI','PQ','FSSAI & PQ','ADC','WLRO','TEXTILE']},
});*/

StampDutySchema = new SimpleSchema({
	JobId:{
	type:String,
	autoValue:function(events,template)
	{
		if(Meteor.isClient)
		{var id = FlowRouter.getParam('id');
		console.log(id);
		return id;
  }
		},
  autoform:{
  	type:"hidden",
  },
},
	StampDuty:{type:String,label:"Shipping Co./BPT/Bank",allowedValues: ['Shipping co.', 'BPT' , 'Bank' , 'GRAS Online']},
	//SurRel:{type:String,label:"B/L Type",allowedValues: ['Surrender', 'Telex' , 'OBL']},
	Amount:{type:String,label:"0.1% Stamp Duty Rs.",defaultValue:0,autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	GRNNo:{type:String,label:"GRN No.",defaultValue:""},
	Date:{type:String,label:"Date of Paymnet",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	updatedBy:{type:String,
		label:"Prepared By",
		autoValue:function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}}
});

DOSchema = new SimpleSchema({
	JobId:{
		type:String,
		autoValue:function(events,template)
		{
			if(Meteor.isClient)
			{var id = FlowRouter.getParam('id');
			console.log(id);
			return id;
	  }
			},
	  autoform:{
	  	type:"hidden",
	  },
	},
	DaysFree:{type:Boolean,label:"14 days Free"},
	FreeDaysFrom:{type:String,label:"Free Days from",optional:true,autoform: {
      afFieldInput: {
        type: "date"
      }}},
	FreeDaysTo:{type:String,label:"Free Days Till",optional:true,autoform: {
      afFieldInput: {
        type: "date"
      }}},
    
	Charges:{type:String,label:"D/O Charges Rs.", max: 7, defaultValue:0,autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
/*ValidTill:{type:String, label:"Valid Till",autoform: {
      afFieldInput: {
        type: "date"
      }}},

*/
	FreightCharges:{type:String, label:"Freight Charges Rs.",defaultValue:0,optional:true,autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	CollectedBy:{type:String,label:"D O Collected By",defaultValue:""},
	CollectedDate:{type:String,label:"Date of Collection",defaultValue:"",autoform: {
	      afFieldInput: {
	        type: "date"
	      }}},
	CourieredTo:{type:String,label:"Couriered To",defaultValue:""},
	DateofCourier:{type:String,label:"Date of Courier",autoform: {
	      afFieldInput: {
	        type: "date"
	      }}},
	EmptyYardName:{type:String,label:"Empty Yard's Name",defaultValue:""},
	
	updatedBy:{
		type:String,
			label:"Prepared By",
			autoValue:function(){
				return this.userId
			},
			autoform:{
				type:"hidden"
			}
	}
});

ShippingSchema = new SimpleSchema({
	JobId:{
		type:String,
		autoValue:function(events,template)
		{
			if(Meteor.isClient)
			{var id = FlowRouter.getParam('id');
			console.log(id);
			return id;
	  }
			},
	  autoform:{
	  	type:"hidden",
	  },
	},
	SurRel:{type:String,label:"B/L Type",allowedValues: ['Surrender', 'Telex' , 'OBL']},
	/*PQRIRONo:{type:String,label:"PQR IRO No.",defaultValue:""},
	DateIRO:{type:String, label:"Date of IRO",autoform: {
      afFieldInput: {
        type: "date"
      }}},*/
	ShipCoName:{type:String, label:"Shipping Company Name",defaultValue:""},
	LocatedAt:{type:String, label:"Located At Mumbai/Andheri/JNPT",defaultValue:""},
	VesselName:{type:String, label:"Vessel Name",defaultValue:"",optional:true},
	ETA:{type:String,label:"Estimated Time of Arrival (ETA)",autoform: {
      afFieldInput: {
        type: "date"
      }}},
    CoPersonName1:{type:String,label:"S. Co. Person Name 1",defaultValue:"",optional:true},
	CoPersonName2:{type:String,label:"S. Co. Person Name 2",defaultValue:"",optional:true},
	NextAgent:{type:String, label:"Next Agent",defaultValue:"",optional:true},
	updatedBy:{type:String,
		label:"Prepared By",
		autoValue:function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}}
	
});

YardSchema = new SimpleSchema({
	JobId:{
	type:String,
	autoValue:function(events,template)
	{
		if(Meteor.isClient)
		{var id = FlowRouter.getParam('id');
		console.log(id);
		return id;
  }
		},
  autoform:{
  	type:"hidden",
  },
},
	YardName:{type:String,label:"Yard Name",defaultValue:""},
	JobOrder:{type:Boolean,label:"Job Order",defaultValue:0,autoform:{
		type:"select-radio-inline",
		options:[{label:'Yes',value:true},{label:'No',value:false}]
	}},
	ContainerArr:{type:String,label:"Container Arrived On",autoform: {
      afFieldInput: {
        type: "date"
      }}},	
	ContainerDes:{type:String,label:"Container Destuffed On",optional:true,autoform: {
      afFieldInput: {
        type: "date"
      }}},	
	Containerhold:{type:String,label:"Container Hold",allowedValues: ['Yes', 'No'],optional:true,
	autoform:{
		type:"select-radio-inline",
		options:[{label:'Yes',value:'Yes'},{label:'No',value:'No'}]
	}
	},
	YardPersonName:{type:String,label:"Yard Person's Name",defaultValue:"",optional:true},
	YardCharges:{type:String,label:"Yard Charges Rs.",defaultValue:0,autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	ValidTill:{type:String,label:"Yard Charges Valid Till",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	updatedBy:{type:String,
		label:"Prepared By",
		autoValue:function(){
			return this.userId
		},
		autoform:{
			type:"hidden",
		}}
	
});

DocDocksSchema = new SimpleSchema({
	JobId:{
	type:String,
	autoValue:function(events,template)
	{
		if(Meteor.isClient)
		{var id = FlowRouter.getParam('id');
		console.log(id);
		return id;
  }
		},
  autoform:{
  	type:"hidden",
  },
},
	PknListOn:{type:String, label:"Packing List Checked On",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	/*PknListBy:{type:String, label:"Packing List Checked By",defaultValue:""},*/
	WLRO:{type:Boolean,label:"WLRO",defaultValue:0,autoform:{
		type:"select-radio-inline",
		options:[{label:'Yes',value:true},{label:'No',value:false}]
	}},
	/*ExamOrderBy:{type:String,label:"Examination Order Checked By",defaultValue:""},*/
	BLPL:{type:Boolean,label:"Invoice/BL/PL Matching?",defaultValue:0,autoform:{
		type:"select-radio-inline",
		options:[{label:'Yes',value:true},{label:'No',value:false}]
	}},
	Comment:{type:String,label:"If No Comment",defaultValue:"",optional:true,max:100},
	ExamOrderOn:{type:String,label:"Examination Order checked On",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	
	updatedBy:{type:String,
		label:"Prepared By",
		autoValue:function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}}
	
});

DeliverySchema = new SimpleSchema({
	JobId:{
	type:String,
	autoValue:function(events,template)
	{
		if(Meteor.isClient)
		{var id = FlowRouter.getParam('id');
		console.log(id);
		return id;
  }
		},
  autoform:{
  	type:"hidden",
  },
},
	Address:{type:String,label:"Delivery Address",defaultValue:"",max:100},
	TruckNo:{type:String, label:"Truck No",defaultValue:"",max:10},
	MobileNo:{type:String,label:"Mobile No",defaultValue:"",max:10,autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	SealNo:{type:String, label:"Seal No",defaultValue:"",max:10},
	DeliveryOutBy:{type:String, label:"Delivery Out By",defaultValue:""},
	DeliveryOutOn:{type:String, label:"Delivery Out On",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	updatedBy:{type:String,
		label:"Prepared By",
		autoValue:function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}},
	TransporterName:{type:String,label:"Transporter's Name",defaultValue:""},
	
});

BillingSchema = new SimpleSchema({
	JobId:{
	type:String,
	autoValue:function(events,template)
	{
		if(Meteor.isClient)
		{var id = FlowRouter.getParam('id');
		console.log(id);
		return id;
  		}
	},
  	autoform:{
  		type:"hidden",
  		},
	},
	BillNo:{type:String,label:"Bill No.",autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	BillDate:{type:String,label:"Bill Date",autoform: {
      afFieldInput: {
        type: "date"
      }}},
    BillMadeBy:{type:String,label:"Bill Made By",defaultValue:""},
    CourierName:{type:String,label:"Courier Name",defaultValue:""},
    TrackingNo:{type:String,label:"Tracking No.",defaultValue:""},
    CourierDate:{type:String,label:"Courier Date",autoform: {
      afFieldInput: {
        type: "date"
      }}},
    BillAmt:{type:String,label:"Bill Amount",defaultValue:"0",autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
    updatedBy:{type:String,
		label:"Prepared By",
		autoValue:function(){
			return this.userId
		},
		autoform:{
			type:"hidden"
		}}
	
});

PartyMasterSchema = new SimpleSchema({
	ClientName:{type:String,label:"Client Name", max: 50, defaultValue:""},
	IECCode:{type:String,label:"IEC NO.",max:10,defaultValue:""},
	Telephone:{type:String,label:"Telephone No.",defaultValue:0,autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	Mobile:{type:String,label:"Mobile",defaultValue:0,autoform: {
      afFieldInput: {
        type: "number"
      }
    }},
	Email:{type:String,label:"Email ID", max: 30, defaultValue:"",autoform: {
      afFieldInput: {
        type: "email"
      }
    }},
	BankName:{type:String,label:"Bank Name", max: 50, defaultValue:""},
	BankBranch:{type:String,label:"Bank Branch", max: 50, defaultValue:""},
	AcNo:{type:String,label:"A/C No", max: 15, defaultValue:""},
	AccountType:{type:String,label:"Account Type", allowedValues: ['Savings', 'Current']},
	Ifsc:{type:String,label:"IFSC Code", max: 15, defaultValue:""}

});


PartyMasterIndex = new EasySearch.Index({
	collection: PartyMasterDetails,
	fields:['ClientName','Telephone','Mobile','Email'],
	engine:new EasySearch.Minimongo(),
});

ShippingMasterSchema = new SimpleSchema({
	ScoName:{type:String,label:"Shipping Company Name", max: 50, defaultValue:""},
	ScoTelephone:{type:String,label:"S.CO Telephone No.", max: 10, defaultValue:0},
	ScoLocated:{type:String,label:"S.CO Location", max: 50, defaultValue:""},
	ScoMobile:{type:String,label:"S.CO Mobile No.", max: 10, defaultValue:0},
	ScoEmail:{type:String,label:"S.CO Email ID", max: 30, defaultValue:"",autoform: {
      afFieldInput: {
        type: "email"
      }
    }},
	ScoBankName:{type:String,label:"S.CO Bank Name", max: 50, defaultValue:""},
	ScoBankBranch:{type:String,label:"S.CO Bank Branch", max: 50, defaultValue:""},
	ScoAcNo:{type:String,label:"S.CO A/C No", max: 20, defaultValue:""},
	ScoAccountType:{type:String,label:"S.CO Account Type", allowedValues: ['Savings', 'Current']},
	ScoIfsc:{type:String,label:"S.CO IFSC Code", max: 15, defaultValue:""},
	WorkingSat:{type:Boolean,label:"Saturday Working?",defaultValue:0},
	Bond:{type:Boolean, label:"Rs 100/- Bond",defaultValue:0},
	LetterHead:{type:Boolean,label: "Letter Head",defaultValue:0},
	Insurance:{type:Boolean,label:"Insurance",defaultValue:0},
	BlankCheque:{type:Boolean, label:"BLANK Cheque",defaultValue:0},
	BankVer:{type:Boolean,label:"Bank Verification",defaultValue:0},
	NOCLetter:{type:Boolean,label:"NOC Letter",defaultValue:0},
	
});


ShippingMasterIndex = new EasySearch.Index({
	collection: ShippingMasterDetails,
	fields:['ScoName','ScoTelephone','ScoMobile','ScoEmail'],
	engine:new EasySearch.Minimongo(),
});

YardMasterSchema = new SimpleSchema({
	YrdName:{type:String,label:"CFS Name", max: 50, defaultValue:""},
	YrdTelephone:{type:String,label:"CFS Telephone No.", max: 10, defaultValue:0},
	YrdLocation:{type:String,label:"CFS Location", max: 50, allowedValues: ['JNPT/Nhavasheva', 'Panvel'] },
	/*ScoMobile:{type:String,label:"S.CO Mobile No.", max: 10, defaultValue:0},*/
	YrdEmail:{type:String,label:"CFS Email ID", max: 30, defaultValue:"",autoform: {
      afFieldInput: {
        type: "email"
      }
    }},
	YrdBankName:{type:String,label:"CFS Bank Name", max: 50, defaultValue:""},
	YrdBankBranch:{type:String,label:"CFS Bank Branch", max: 50, defaultValue:""},
	YrdAcNo:{type:String,label:"CFS A/C No", max: 20, defaultValue:""},
	YrdAccountType:{type:String,label:"CFS Account Type", allowedValues: ['Savings', 'Current']},
	YrdIfsc:{type:String,label:"CFS IFSC Code", max: 15, defaultValue:""}
});


YardMasterIndex = new EasySearch.Index({
	collection: YardMasterDetails,
	fields:['YrdName','YrdTelephone','YrdEmail'],
	engine:new EasySearch.Minimongo(),
});

TransportMasterSchema = new SimpleSchema({
	TransName:{type:String,label:"Transporter Name", max: 50, defaultValue:""},
	Transtelephone:{type:String,label:"Transporter Telephone No.", max: 12, defaultValue:0},
	TransMobile:{type:String,label:"Transporter Mobile No.", max: 10, defaultValue:0},
	TransEmail:{type:String,label:"Transporter Email ID", max: 30, defaultValue:"",
	autoform: {
      afFieldInput: {
        type: "email"
      }
    }},
	TransBankName:{type:String,label:"Transporter Bank Name", max: 50, defaultValue:""},
	TransBankBranch:{type:String,label:"Transporter Branch", max: 50, defaultValue:""},
	TransAcNo:{type:String,label:"Transporter A/C No", max: 20, defaultValue:""},
	TransAccountType:{type:String,label:"Transporter Account Type", allowedValues: ['Savings', 'Current']},
	TransIfsc:{type:String,label:"S.CO IFSC Code", max: 15, defaultValue:""},
});


TransportMasterIndex = new EasySearch.Index({
	collection: TransportMasterDetails,
	fields:['TransName','Transtelephone','TransMobile','TransEmail'],
	engine:new EasySearch.Minimongo(),
});

jobCreationSchema = new SimpleSchema({
	JobNo:{
		type: String,
		label: "Job No",
		max: 4,
	},

	DateOfCreation:{
		type:Date,
		label: "Date Of Creation",
		optional:true,
		autoValue: function(){return new Date()},
		autoform:{
			type:"hidden"
		}
	},

	Port:{
		type: String,
		label: "Port Name",
		max: 30,
		defaultValue:""
	},

	PartyJob:{
		type:String,
		label:"Party's Job No.",
		max: 10,
		optional:true,
		defaultValue:""
	},

	CreatedBy:{
		type:String,
		label:"Prepared By",
		optional:true,
		autoValue:function(){
			//console.log("Came here:"+this.userId);
			return Meteor.userId();
		},
		autoform:{
			type:"hidden"
		}
	},

	ImporterName:{
		type:String,
		label:"Importer M/s.",
		max: 100,
	},

	Doc:{
		type:DocSchema,
		label:"Copy Document Details"
	},
	/*BE:{
		type:BESchema,
		label:"BE Details"	
	},*/

	BLDetails:{
		type:BLSchema,
		label:"B/L Details"
	},

	PGASEL:{type:String,label:"Select Partner Government Agency",
		allowedValues: ['N/A','FSSAI','PQ','FSSAI - PQ','ADC','WLRO','TEXTILE'],
		defaultValue:"N/A"
	},	
	/*PGA:{
		type:PGASchema,
		label:"Select PGA"
	},*/	
});


/*PartySchema = new SimpleSchema({
	Create:{
		type: PartyMasterSchema,
		label:"Creation of Party Master"
}
}),

MasterShippingSchema = new SimpleSchema({
	Create:{
		type: ShippingMasterSchema,
		label:"Creation of Shipping Master"
}
}),

MasterYardSchema = new SimpleSchema({
	Create:{
		type: YardMasterSchema,
		label:"Creation of Yard Master"
}
}),
BOESchema = new SimpleSchema({
	Create:{
		type: BESchema,
		label:"Creation of BOE"
}
}),
*/
JobSchema = new SimpleSchema({

	Create:{
		type:jobCreationSchema,
		label:"Creation of new Job"
	},

	

	OrDoc:{
		type:OriginalDocSchema,
		optional:true,
		label:"Original Document"
	},
	

	

	ShippingDetails:{
		type:ShippingSchema,
		label:"Shipping Details for Loaded / Destuff"
	},

	YardDetails:{
		type:YardSchema,
		label:"Yard Tracing for Loaded / Destuff"
	},

	DocDocks:{
		type:DocDocksSchema,
		label:"Documents Checked By Docks"
	},

	DeliveryDetails:{
		type:DeliverySchema,
		label:"Delivery Details"
	}
	
});

/*Meteor.methods({
	newJobCreation:function(){
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

		});
	}
});
*/
Jobs.attachSchema( JobSchema );
BeDetails.attachSchema(BESchema);
StampDutyDetails.attachSchema(StampDutySchema);
PartyMasterDetails.attachSchema(PartyMasterSchema);
ShippingMasterDetails.attachSchema(ShippingMasterSchema);
YardMasterDetails.attachSchema(YardMasterSchema);
TransportMasterDetails.attachSchema(TransportMasterSchema);
JobCreation.attachSchema(jobCreationSchema);
OriginalDoc.attachSchema(OriginalDocSchema);
ShippingDetails.attachSchema(ShippingSchema);
DODetails.attachSchema(DOSchema);
YardDetails.attachSchema(YardSchema);
DocDocks.attachSchema(DocDocksSchema);
DeliveryDetails.attachSchema(DeliverySchema);
BillingDetails.attachSchema(BillingSchema);
Ports.attachSchema(PortsSchema);
IGMDetails.attachSchema(IGMSchema);
FssaiDetails.attachSchema(FssaiSchema);
PqDetails.attachSchema(PqSchema);
TextDetails.attachSchema(TxtSchema);

Jobs.allow({
	insert: function(userId,doc){
		console.log("Running");
		return !!userId;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}
});

BeDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return true;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}		
});

DODetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return true;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}
})

IGMDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return true;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}		
});

FssaiDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return true;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}		
}),

TextDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return true;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}		
}),
PqDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return true;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}		
}),
StampDutyDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return true;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}
});

PartyMasterDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return true;
	},		
});

YardMasterDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return true;
	},		
});

TransportMasterDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return true;
	},		
});

ShippingMasterDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return true;
	},		
});


JobCreation.allow({
	insert: function(userId,doc){
		console.log("Running");
		return true;
	},
		remove: function(userId,doc){
		console.log("Running");
		return true;
	}
});
OriginalDoc.allow({
	insert: function(userId,doc){
		console.log("Running");
		return !!userId;
	}
});
ShippingDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return !!userId;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}
});

YardDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return !!userId;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}
});

DocDocks.allow({
	insert: function(userId,doc){
		console.log("Running");
		return !!userId;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}
});

DeliveryDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return !!userId;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}
});

BillingDetails.allow({
	insert: function(userId,doc){
		console.log("Running");
		return !!userId;
	},
	update: function(userId,doc){
		console.log("Running");
		return !!userId;
	}
});

Ports.allow({
	insert: function(userId,doc){
		console.log("Running");
		return !!userId;
	},
});
