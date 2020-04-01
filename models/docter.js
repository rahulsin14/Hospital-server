const mongoose=require('mongoose');
const docterSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique: true
    },
    password:{
        type:String,
        require:true
    },
    confirm_password:{
        type:String,
        require:true
    }
},{
    timestamps:true
});
const Docter=mongoose.model('Docter',docterSchema);
module.exports=Docter;