Jobs = new Mongo.Collection('jobs');
JobCreation = new Mongo.Collection('jobCreation');
OriginalDoc = new Mongo.Collection('originalDoc');
ShippingDetails = new Mongo.Collection('shippingDetails');
YardDetails = new Mongo.Collection('yardDetails');
DocDocks = new Mongo.Collection('docDocks');
DeliveryDetails = new Mongo.Collection('deliveryDetails');






ContainerSchema = new SimpleSchema({
	containerNo:{
		type:String,
		label:"Container",
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
	Desc:{
		type:String,
		label:"Description",
		defaultValue:""
	},
	No:{
		type:String,
		label:"B/E No.",
		defaultValue:""
	},

	Date:{
		type:String,
		label:"B/E Date.",
		defaultValue:"",
		autoform: {
      afFieldInput: {
        type: "date"
      }
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
			defaultValue:""
		},

		GrossWt:{
			type:String,
			label:"Gross Weight",
			defaultValue:""
		},

		CBM:{
			type:String,
			label:"CBM",
			defaultValue:""
		},

		LoadPort:{
			type:String,
			label:"Port of Loading",
			defaultValue:""
		},

		MBLNo:{
			type:String,
			label:"MBL No.",
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



		HBLNo:{
			type:String,
			label:"HBL No.",
			optional: true,
			defaultValue:""
		},
		HBLDate:{
			type:String,
			label:"HBL Date",
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
			defaultValue:""
		},

		Voyage:{
			type:String,
			label:"Voyage",
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

NextAgentSchema = new SimpleSchema({
	Name:{type:String,label:"Next Agent Name",defaultValue:""},
	PhNo:{type:String,label:"Phone Number",defaultValue:0},
	Email:{type:String,label:"Email ID",defaultValue:""},
	LocatedAt:{type:String,label:"Located At Mumbai/Andheri/JNPT",defaultValue:""}
	
});
JNPTIGMSchema = new SimpleSchema({
	IGMNo:{type:String,label:"IGM No.",defaultValue:""},
	Date:{type:String,label:"Date of Entry",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	ItemNo:{type:String,label:"Item No.",defaultValue:""},
	InwardDate:{type:String,label:"Inward Date",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	DestuffingYard:{type:String,label:"Destuffing Yard",defaultValue:""},
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


MumbaiIGMSchema = new SimpleSchema({
	IGMNo:{type:String,label:"Mumbai IGM No",defaultValue:""},
	Date:{type:String,label:"Date",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	ItemNo:{type:String,label:"Item No",defaultValue:""},
	InwardDate:{type:String,label:"Inward Date",autoform: {
      afFieldInput: {
        type: "date"
      }}}
});

DOSchema = new SimpleSchema({
Charges:{type:Number,label:"D/O Charges Rs.",defaultValue:0},
InFavourOf:{type:String,label:"In favour of",defaultValue:""},
ValidTill:{type:String, label:"Valid Till",autoform: {
      afFieldInput: {
        type: "date"
      }}},
CoPersonName1:{type:String,label:"S. Co. Person Name 1",defaultValue:""},
CoPersonName2:{type:String,label:"S. Co. Person Name 2",defaultValue:""},
CollectedBy:{type:String,label:"D O Collected By",defaultValue:""},
CollectedDate:{type:String,label:"Date of Collection",defaultValue:""},
CourieredTo:{type:String,label:"Couriered To",defaultValue:""},
DateofCourier:{type:String,label:"Date of Courier",autoform: {
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

StampDutySchema = new SimpleSchema({
	StampDuty:{type:String,label:"Shipping Co./BPT/Bank",defaultValue:""},
	SurRel:{type:String,label:"B/L Surrender/Telex Release",defaultValue:""},
	Amount:{type:Number,label:"0.1% Stamp Duty Rs.",defaultValue:0},
	GRNNo:{type:String,label:"GRN No.",defaultValue:""},
	Date:{type:String,label:"Date of Update",autoform: {
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
	PQRIRONo:{type:String,label:"PQR IRO No.",defaultValue:""},
	DateIRO:{type:String, label:"Date of IRO",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	ShipCoName:{type:String, label:"Shipping Company Name",defaultValue:""},
	companyPh:{type:String, label:"Phone Number",defaultValue:""},
	companyEmail:{type:String, label:"Company Email of Contact",defaultValue:"", optional:true},
	LocatedAt:{type:String, label:"Located At Mumbai/Andheri/JNPT",defaultValue:""},
	VesselName:{type:String, label:"Vessel Name",defaultValue:""},
	ETA:{type:String,label:"Estimated Time of Arrival (ETA)",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	WorkingTimeFrom:{type:Number,label:"Working Time from",defaultValue:0},
	WorkingTimeTo:{type:Number,label:"Working Time To",defaultValue:0},
	WorkingSat:{type:Boolean,label:"Saturday Working?",defaultValue:0},
	FreightCharges:{type:Number, label:"Freight Charges Rs.",defaultValue:0},
	Bond:{type:Boolean, label:"Rs 100/- Bond",defaultValue:0},
	LetterHead:{type:Boolean,label: "Letter Head",defaultValue:0},
	Insurance:{type:Boolean,label:"Insurance",defaultValue:0},
	BlankCheque:{type:Boolean, label:"BLANK Cheque",defaultValue:0},
	BankVer:{type:Boolean,label:"Bank Verification",defaultValue:0},
	NOCLetter:{type:Boolean,label:"NOC Letter",defaultValue:0},
	DaysFree:{type:Boolean,label:"14 days Free",defaultValue:0},
	
	JNPTIGM:{type:JNPTIGMSchema, label:"JNPT IGM",},
	MumbaiIGM:{type:MumbaiIGMSchema, label:"Mumbai IGM"},
	NextAgent:{type:NextAgentSchema, label:"Next Agent"},
	DO:{type:DOSchema, label:"Delivery Order (DO)"},
	StampDuty:{type:StampDutySchema,label:"Stamp Duty Details"},
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
	PhNo:{type:String,label:"Phone Number",defaultValue:""},
	JobOrder:{type:Boolean,label:"Job Order",defaultValue:0},
	ContainerArr:{type:String,label:"Container Arrived On",defaultValue:""},
	ContainerDes:{type:String,label:"Container Destuffed On",defaultValue:""},
	Containerhold:{type:String,label:"Container Hold",defaultValue:""},
	YardPersonName:{type:String,label:"Yard Person's Name",defaultValue:""},
	YardCharges:{type:Number,label:"Yard Charges Rs.",defaultValue:0},
	ValidTill:{type:String,label:"Valid Till",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	DeliveryOutOn:{type:String,label:"Delivery Out On",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	TransporterName:{type:String,label:"Transporter's Name",defaultValue:""},
	EmptyYardName:{type:String,label:"Empty Yard's Name",defaultValue:""},
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
	PknListBy:{type:String, label:"Packing List Checked By",defaultValue:""},
	WLRO:{type:Boolean,label:"WLRO",defaultValue:0},
	ExamOrderOn:{type:String,label:"Examination Order checked On",autoform: {
      afFieldInput: {
        type: "date"
      }}},
	ExamOrderBy:{type:String,label:"Examination Order Checked By",defaultValue:""},
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
	Address:{type:String,label:"Delivery Address",defaultValue:""},
	TruckNo:{type:String, label:"Truck No",defaultValue:""},
	MobileNo:{type:String,label:"Mobile No",defaultValue:""},
	SealNo:{type:String, label:"Seal No",defaultValue:""},
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
		}}
	
});

jobCreationSchema = new SimpleSchema({
	JobNo:{
		type: String,
		label: "Job No",
		defaultValue:""
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
		defaultValue:""
	},

	PartyJob:{
		type:String,
		label:"Party's Job No.",
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
		defaultValue:""
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
});

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
JobCreation.attachSchema(jobCreationSchema);
OriginalDoc.attachSchema(OriginalDocSchema);
ShippingDetails.attachSchema(ShippingSchema);
YardDetails.attachSchema(YardSchema);
DocDocks.attachSchema(DocDocksSchema);
DeliveryDetails.attachSchema(DeliverySchema);

Jobs.allow({
	insert: function(userId,doc){
		console.log("Running");
		return !!userId;
	}
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

