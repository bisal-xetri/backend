 // console.log(req.headers);
    // console.log("hello");
    export default(req,res,next)=>{
    const token=req.headers.token;
    if(token&&token=="abc"){
        console.log('validate')
        next()
    }
    else{
        console.log("couldn't validate")
        res.status(403).send({success:false,message:"Invalid API Token"})
    }
}