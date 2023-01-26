const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const path=require("path");
const app = express()


// Macking DataBase
mongoose.connect('mongodb://0.0.0.0:27017/mcqDB',{useNewUrlParser : true , useUnifiedTopology : true })

//Onbject
 let currentEmail="";
 let currentUser=""

//Schema
const sinUpSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const testSchema=mongoose.Schema({
    name:String,
    email:String,
    correct:Number,
    missQuestion:Number,
    answerSet:[String],
    wrong:Number
})


//collection
const SingUp=mongoose.model("singUp",sinUpSchema);
const Test=mongoose.model("test",testSchema)
// const Data=mongoose.model("data",dataSechema)

//Use
app.use(express.static("public"))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
const port = 3000;

//Defalt user
const user1=new SingUp({
    name:"Anurag",
    email:"anurag2222@gmail.com",
    password:"zxcv"
})
const user2=new SingUp({
    name:"Jitu",
    email:"jitu3333gmail.com",
    password:"qwer"
})

// set
app.set("view engine", "ejs");
const defaltUserArray=[user1,user2];

// SingUp.insertMany(defaltUserArray,function(err){
//   if(err){
//     console.log("Defalt user are not Stored =>"+err);
//   }
//   else{
//     console.log("SucessFull Inserted Defalt user");
//   }
// })


//Get
app.get('/',(req,res)=>{
    res.render("login",{setEmail:""})
})
app.get('/singUp',(req,res)=>{
   res.sendFile(path.join(__dirname,"views/singUp.html"))
})
app.get('/test',(req,res)=>{
    console.log(currentEmail)
    SingUp.findOne({email:currentEmail},(err,result)=>{
        if(!err){
            currentUser=result.name;
        }
    })

    res.sendFile(path.join(__dirname,"views/test.html"))
})

app.get("/algebra",(req,res)=>{
   res.render("algebra",{Username:currentUser})
})

app.get("/result",(req,res)=>{
    const tempResult={
            testname:"Null",
            Mark:0,
            wrong:0,
            Miss:0,
            name:"Null"
    }
    Test.findOne({email:currentEmail},function(err,result){
        if(!err){
           
            tempResult.testname=result.name;
            tempResult.Miss=result.missQuestion;
            tempResult.wrong=result.wrong;
            tempResult.Mark=result.correct;


            res.render("result",{
                userName:currentUser,
                email:currentEmail,
                attempt:(tempResult.wrong+tempResult.Mark),
                skip:tempResult.Miss,
                correct:tempResult.Mark,
                wrong:tempResult.wrong
            })
        }
        else{
            console.log(err)
        }
    })
})
// app.get("/data",async (req,res)=>{
//     console.log("i ma in data Section")
//     await Data.findOne({test:"maths"},(err,result)=>{
//           if(!err){
//               console.log(result.data)
//               res.json(result.data)
//           }
//           else{
//             console.log("Some error in feach data "+ err);
//           }
//     })
// })

//Post
app.post("/",(req,res)=>{
    console.log("it is post request from login.ejs")
    const Getpassword=req.body.password;
    const Getemail=req.body.email;
    const Getbtn=req.body.btn;
     
    if(Getbtn==="singUp"){
        res.redirect("/singUp");
    }else{
        console.log(Getemail+" , "+Getpassword)
        SingUp.findOne({email:Getemail,password:Getpassword},function(err,result){
            if(err){
                 console.log("==>"+err)
            }
            else{
                  if(result===null){
                      res.render("login",{setEmail:""})
                  }
                  else{
                      currentEmail=result.email;
                      console.log("email=======>"+currentEmail)
                      res.redirect("/test");
                  }
            }
      })
    } 
})

app.post("/test",(req,res)=>{

    console.log("it is post request from test")
    if(req.body.btn==="restart"){
        res.redirect("/test");
    }
    else{
        const testName=req.body.test;
        const test=new Test({
            name:testName ,
            email:currentEmail,      
        })
        test.save();
        res.redirect("/algebra")
    }
})

app.post("/result",(req,res)=>{
    res.redirect("/result")
})

app.post("/posts",(req,res)=>{
    console.log("Hellow")
    console.log(req.body)
    
   const ResultValue=req.body;
    
     Test.findOneAndUpdate({email:currentEmail},{
            answerSet:ResultValue.AnsArray,
            correct:ResultValue.Mark,
            missQuestion:ResultValue.Miss,
            wrong:ResultValue.wrong
            
         },function(err){
                 if(!err){
                         console.log("Result is Sotored in Database")
                         res.redirect("/result");
                       }
          })
    
  
})

app.post("/singUp",(req,res)=>{
    console.log("it is post request from sinUp")
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const repetPassword=req.body.repetPassword;
    const btn=req.body.btn;
    if(btn==="logIn"){
        res.redirect("/")
    }
    else{
        console.log(password);
        console.log(email)
    if(password!==repetPassword||password===""&&name===""&&email===""&&repetPassword===""){
        res.redirect("/singUp")
        console.log("Both pasword are diffrent ");
    }
    else{
    SingUp.findOne({email:email},function(err,result){
       if(err){
         console.log(err)
       }
       else{

           if(result===null){
               const newUser=new SingUp({
                   name:name,
                   email:email,
                   password:password
               })
               newUser.save();
               res.redirect("/")
           }
           else{
            res.redirect("/singUp")
            console.log("Account Alredy exist with this email")
            }
       }
   }) 
 }
} 
    
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
 })



