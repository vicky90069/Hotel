const mongoose = require('mongoose');

//define perion schema
const personSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },

        age:{
            type:Number,
            require:true,
        },
        work:{
            type:String,
            enum:['chef','waiter','manager'],
            require:true,
        },

        mobile:{
            type:'number',
            require:true,
           
        },

        emial:{
            type:String,
            require:true,
            unique:true,
        },

        addrrss:{
            type:String,
            require:true,
        
        },
        salary:{
            type:Number,
            require:true,
        
        },
        username:{
            type: String,
            required: true,
             unique: true
        },
        password:{
            type:String,
            require:true,

        }

    });


    //create person model
    const person =mongoose.model('person',personSchema);
    module.exports =person;