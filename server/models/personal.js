let mongoose = require('mongoose');

let Personalinfo = mongoose.Schema({
    firstName:{
        type:String,
     //   required:true,
        default:""
    },
    lastName:{
        type:String,
       // required:true,
        default:""
    },
    email:{
        type:String,
        //required:true,
        default:""
    },
    linkedin:{
        type:String,
      //  required:true,
        default:""
    },
    address:{
        type:String,
       // required:true,
        default:""
    },
    phone:{
        type:Number,
        //required:true,
        default:""
    }, 
    university:{
        type:String,
       // required:true,
        default:""
    },
    
    degree:{
        type:String,
        enum:[ 'BBA', 'BCA','MBA','GED','MCA','Bachelor of Arts','Bachelor of Science',
            'Masters of Arts','M.D.','Ph.D','Accociate of Science',
            'Accociate of Applied Science','Information technology',
            'Bachelor of technology',null],
       // required:true,
        default:"BBA"
    },
    g_month:{
        type:String,
        enum:['January','February','March','April','May','June',
        'July','August','September','October','November','December',null],
      //  required:true,
        default:"May"
    },
    g_year:{
        type:Number,
        enum:[2020,2021,2022,2023,null],
        //required:true,
        default:null
    },
    percent:{
        type:Number,
       // required:true,
        default:null
    },
    created_data:{
        type:Date,
        default:Date.now
    },
    matric_board:{
        type:String,
       // required:true,
        default:""
    },
    matric_percent:{
        type:Number,
     //   required:true,
        default:""
    },
    sec_board:{
        type:String,
        //required:true,
        default:""
    },
    sec_percent:{
        type:Number,
        //required:true,
        default:""
    },
    skill1:{
        type:String,
     //   required:true,
        default:""
    },
    skill1_level:{
        type:String,
       // required:true,
        default:""
    },
    skill2:{
        type:String,
       // required:true,
        default:""
    },
    skill2_level:{
        type:String,
       // required:true,
        default:""
    },
    skill3:{
        type:String,
       // required:true,
        default:""
    },
    skill3_level:{
        type:String,
       // required:true,
        default:""
    },
    company:{
        type:String,
        default:""
    },
    internship:{
        type:String,
        default:""
    },
    start_month:{
        type:String,
        enum:['January','February','March','April','May','June',
        'July','August','September','October','November','December',null],
      //  required:true,
        default:"May"
    },
    start_year:{
        type:Number,
        enum:[2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,
            2011,2012,2013,2014,2015,2016,2018,2019,
            2020,2021,2022,2023,null],
        //required:true,
        default:null
    },
    end_month:{
        type:String,
        enum:['January','February','March','April','May','June',
        'July','August','September','October','November','December',null],
      //  required:true,
        default:"May"
    },
    end_year:{
        type:Number,
        enum:[2020,2021,2022,2023,2024,2025,null],
        //required:true,
        default:null
    }

});
 
module.exports=mongoose.model("userPersonalinfo",Personalinfo);