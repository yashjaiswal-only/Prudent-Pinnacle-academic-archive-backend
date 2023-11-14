const router=require("express").Router();
const Btp = require("../models/Btp");
const Fdp = require("../models/Fdp");
const Mtp = require("../models/Mtp");
const Patents = require("../models/Patents");
const Phd = require("../models/Phd");
const Project = require("../models/Project");
const Society = require("../models/Society");
const Stc = require("../models/Stc");
const Talk = require("../models/Talk");
const consultancy = require("../models/consultancy");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./middleware");

//create the paper
router.post("/create/:type",verifyTokenAndAuthorization,async (req,res)=>{
    const type=req.params.type;
    var retVal={};
    const {_id,...rest}=req.body;
    const adderUid=_id;
    const record={...rest};
    if(type==='btp'){
        const newBtp = new Btp({uid:adderUid,...record});
        try{
            retVal=await newBtp.save(); 
        } catch(err){
            return res.status(500).json({message:err}); 
        }
    }
    else if(type==='mtp'){
        const newMtp = new Mtp({uid:adderUid,...record});
        try{
            retVal=await newMtp.save(); 
        } catch(err){
            return res.status(500).json({message:err}); 
        }
    }
    else if(type==='society'){
        const newSociety = new Society({uid:adderUid,...record});
        try{
            retVal=await newSociety.save(); 
        } catch(err){
            return res.status(500).json({message:err}); 
        }
    }
    else if(type==='stc'){
        const newStc = new Stc({uid:adderUid,...record});
        try{
            retVal=await newStc.save(); 
        } catch(err){
            return res.status(500).json({message:err}); 
        }
    }
    else if(type==='talk'){
        const newTalk = new Talk({uid:adderUid,...record});
        try{
            retVal=await newTalk.save(); 
        } catch(err){
            return res.status(500).json({message:err}); 
        }
    }
    else if(type==='fdp'){
        const newFdp = new Fdp({uid:adderUid,...record});
        try{
            retVal=await newFdp.save(); 
        } catch(err){
            return res.status(500).json({message:err}); 
        }
    }
    else if(type==='phd'){
        const newPhd = new Phd({uid:adderUid,...record});
        try{
            retVal=await newPhd.save(); 
        } catch(err){
            return res.status(500).json({message:err}); 
        }
    }
    else if(type==='project'){
        const newProject = new Project({uid:adderUid,...record});
        try{
            retVal=await newProject.save(); 
        } catch(err){
            return res.status(500).json({message:err}); 
        }
    }
    else if(type==='consultancy'){
        const newConsultancy = new consultancy({uid:adderUid,...record});
        try{
            retVal=await newConsultancy.save(); 
        } catch(err){
            return res.status(500).json({message:err}); 
        }
    }
    else if(type==='patent'){
        const newPatent = new Patents({uid:adderUid,...record});
        try{
            retVal=await newPatent.save(); 
        } catch(err){
            return res.status(500).json({message:err}); 
        }
    }
    else res.status(404).json({message:'no matching type'});

    return res.status(200).json({message:'saved successfully',record:retVal});

});

//update the paper
router.post("/update/:type",verifyTokenAndAuthorization,async (req,res)=>{
    const {_id,id,...others}=req.body; //_id is userid & id is record id
    const change=others;
    const type=req.params.type
    if(type==='btp'){
        try {
            let prev=await Btp.findById(id); 
            if(!prev || prev.uid!=_id){
                return res.status(404).send({message:"Unable to update"})
            };
            prev=await Btp.findByIdAndUpdate(id,{$set:change});
            return res.status(200).json({message:"Record Updated Successfully "});  
        }
        catch (error) {
            return res.status(500).json({message:error});
        }
    }
    else if(type==='mtp'){
        try {
            let prev=await Mtp.findById(id);
            if(!prev || prev.uid!=_id){
                return res.status(404).send({message:"Unable to update"})
            };
            prev=await Mtp.findByIdAndUpdate(id,{$set:change});
            return res.status(200).json({message:"Record Updated Successfully "});  
        }
        catch (error) {
            return res.status(500).json({message:error});
        }
    }
    else if(type==='society'){
        try {
            let prev=await Society.findById(id); 
            if(!prev || prev.uid!=_id){
                return res.status(404).send({message:"Unable to update"})
            };
            prev=await Society.findByIdAndUpdate(id,{$set:change});
            return res.status(200).json({message:"Record Updated Successfully "});  
        }
        catch (error) {
            return res.status(500).json({message:error});
        }
    }
    else if(type==='stc'){
        try {
            let prev=await Stc.findById(id); 
            if(!prev || prev.uid!=_id){
                return res.status(404).send({message:"Unable to update"})
            };
            prev=await Stc.findByIdAndUpdate(id,{$set:change});
            return res.status(200).json({message:"Record Updated Successfully "});  
        }
        catch (error) {
            return res.status(500).json({message:error});
        }
    }
    else if(type==='talk'){
        try {
            let prev=await Talk.findById(id); 
            if(!prev || prev.uid!=_id){
                return res.status(404).send({message:"Unable to update"})
            };
            prev=await Talk.findByIdAndUpdate(id,{$set:change});
            return res.status(200).json({message:"Record Updated Successfully "});  
        }
        catch (error) {
            return res.status(500).json({message:error});
        }
    }
    else if(type==='fdp'){
        try {
            let prev=await Fdp.findById(id); 
            if(!prev || prev.uid!=_id){
                return res.status(404).send({message:"Unable to update"})
            };
            prev=await Fdp.findByIdAndUpdate(id,{$set:change});
            return res.status(200).json({message:"Record Updated Successfully "});  
        }
        catch (error) {
            return res.status(500).json({message:error});
        }
    }
    else if(type==='phd'){
        try {
            let prev=await Phd.findById(id); 
            if(!prev || prev.uid!=_id){
                return res.status(404).send({message:"Unable to update"})
            };
            prev=await Phd.findByIdAndUpdate(id,{$set:change});
            return res.status(200).json({message:"Record Updated Successfully "});  
        }
        catch (error) {
            return res.status(500).json({message:error});
        }
    }
    else if(type==='project'){
        try {
            let prev=await Project.findById(id); 
            if(!prev || prev.uid!=_id){
                return res.status(404).send({message:"Unable to update"})
            };
            prev=await Project.findByIdAndUpdate(id,{$set:change});
            return res.status(200).json({message:"Record Updated Successfully "});  
        }
        catch (error) {
            return res.status(500).json({message:error});
        }
    }
    else if(type==='consultancy'){
        try {
            let prev=await consultancy.findById(id); 
            if(!prev || prev.uid!=_id){
                return res.status(404).send({message:"Unable to update"})
            };
            prev=await consultancy.findByIdAndUpdate(id,{$set:change});
            return res.status(200).json({message:"Record Updated Successfully "});  
        }
        catch (error) {
            return res.status(500).json({message:error});
        }
    }
    else if(type==='patent'){
        try {
            let prev=await Patents.findById(id); 
            if(!prev || prev.uid!=_id){
                return res.status(404).send({message:"Unable to update"})
            };
            prev=await Patents.findByIdAndUpdate(id,{$set:change});
            return res.status(200).json({message:"Record Updated Successfully "});  
        }
        catch (error) {
            return res.status(500).json({message:error});
        }
    }
    else res.status(404).json({message:'no matching type'});

    return res.status(200).json({message:'saved successfully',record:retVal});
    
});

//get the paper of particular user
router.post('/getall/:type',verifyTokenAndAuthorization,async(req,res)=>{
    try {
        const type=req.params.type;
        const requesterUid=req.body._id;
        if(type==='btp'){
            try {
                const ret=await Btp.find({uid:requesterUid});
                return res.status(200).json(ret);
            }
            catch (error) {
                return res.status(500).json({message:error});
            }
        }
        else if(type==='mtp'){
            try {
                const ret=await Mtp.find({uid:requesterUid});
                return res.status(200).json(ret);
            }
            catch (error) {
                return res.status(500).json({message:error});
            }
        }
        else if(type==='society'){
            try {
                const ret=await Society.find({uid:requesterUid});
                return res.status(200).json(ret);
            }
            catch (error) {
                return res.status(500).json({message:error});
            }
        }
        else if(type==='stc'){
            try {
                const ret=await Stc.find({uid:requesterUid});
                return res.status(200).json(ret);
            }
            catch (error) {
                return res.status(500).json({message:error});
            }
        }
        else if(type==='talk'){
            try {
                const ret=await Talk.find({uid:requesterUid});
                return res.status(200).json(ret);
            }
            catch (error) {
                return res.status(500).json({message:error});
            }
        }
        else if(type==='fdp'){
            try {
                const ret=await Fdp.find({uid:requesterUid});
                return res.status(200).json(ret);
            }
            catch (error) {
                return res.status(500).json({message:error});
            }
        }
        else if(type==='patent'){
            try {
                const ret=await Patents.find({uid:requesterUid});
                return res.status(200).json(ret);
            }
            catch (error) {
                return res.status(500).json({message:error});
            }
        }
        else if(type==='project'){
            try {
                const ret=await Project.find({uid:requesterUid});
                return res.status(200).json(ret);
            }
            catch (error) {
                return res.status(500).json({message:error});
            }
        }
        else if(type==='consultancy'){
            try {
                const ret=await consultancy.find({uid:requesterUid});
                return res.status(200).json(ret);
            }
            catch (error) {
                return res.status(500).json({message:error});
            }
        }
        else if(type==='phd'){
            try {
                const ret=await Phd.find({uid:requesterUid});
                return res.status(200).json(ret);
            }
            catch (error) {
                return res.status(500).json({message:error});
            }
        }
        else res.status(404).json({message:'no matching type'});

    } catch (error) {  
        return res.status(500).json({message:error});
    }
});

router.post('/search/:type',verifyTokenAndAdmin,async(req,res)=>{
    try {
        // console.log(req.body)
        const uid=req.body.uid?req.body.uid:null;
        // const department=req.body.department?req.body.department:null;
        const type=req.params.type;
        var prev=[];
        if(type==='btp'){
            if(uid){
                prev=await Btp.find({
                    $and: [
                        { "year": { $gte: req.body.start?req.body.start:"1947-08-15" } },
                        { "year": { $lte: req.body.end?req.body.end:"2025-01-01" } },
                        { "uid": uid},
                      ]
                });
                prev.sort(function(b, a) {  //newest first
                    return ((a.year < b.year) ? -1 : ((a.year> b.year) ? 1 : 0));
                })
            }
        }
        if(type==='mtp'){
            if(uid){
                prev=await Mtp.find({
                    $and: [
                        { "year": { $gte: req.body.start?req.body.start:"1947-08-15" } },
                        { "year": { $lte: req.body.end?req.body.end:"2025-01-01" } },
                        { "uid": uid},
                      ]
                });
                prev.sort(function(b, a) {  //newest first
                    return ((a.year < b.year) ? -1 : ((a.year> b.year) ? 1 : 0));
                })
            }
        }
        
        console.log(prev) 
        return res.status(200).json(prev);

    } catch (error) {
        return res.status(500).json({message:error});
    }
});


module.exports=router;