var mongoose = require('mongoose');
var Register = mongoose.model('userRegister');
var Login = mongoose.model('userlogin');
var userPersonalinfo = mongoose.model('userPersonalinfo');

//userRegister Api
exports.create_user = function(req,res){
    var name = req.body.name
    var user = new Register(req.body);
    console.log(req.body);
    user.save(function(err,result){
        if(err)
        res.send(err);
        if(result.name===name){
            res.json({"result":"success"});
        }
        else 
        {
            res.json({"result":"failure"});
        }
    });
};

//Login Authentication

exports.login_user = function(req,res){
    var email = req.body.email;
    console.log(req.body);
    Register.find({"email": email},function(err,result){
        if(err)
          res.send(err);
        console.log(result);
        if (result[0].password === req.body.password){
            console.log("login");
            res.json({"result":"success"});
        }else{
            console.log("failed");
            res.json({"result":"failure"});
        }
    })
};


//userPersonal API

exports.create_personal = function (req, res) {
    var firstName = req.body.firstName
    var Personal = new userPersonalinfo(req.body);
    console.log(firstName);
    Personal.save(function (err, result) {
        if (err)
        res.send(err);   
        console.log(result);
        if(result){
            res.json({"result":"success"});
        }
        // else{
            // res.json({"result":"failure"});
        // }
    });
};


exports.update_a_task = function (req, res) {
    var email = req.body.email;
    console.log(email);
        userPersonalinfo.findOneAndUpdate({"email": email },req.body,{new :true}, function (err, result) {
            if (err)
                throw err
                if(result){
                    res.json({"result":"success"});
                }
                });
    }

    // exports.read_a_task = function(req,res){
    //     userPersonalinfo.findById(req.params.taskId,function(err,result){
    //         if(err)
    //         throw err;
    //         res.json(result);
    //     })
    // }

    exports.list_all_tasks = function(req,res){
        var email = req.body.email;
        userPersonalinfo.find({"email": email},function(err,result){
            if(err)
            throw err;
            res.json(result);
        })
    }
    // exports.read_a_task = function(req,res)
    // {
    //     userPersonalinfo.find({"email":email},function(err,result){
    //         if(err)
    //         throw err;
    //         res.json(result);
    //     })
    // }