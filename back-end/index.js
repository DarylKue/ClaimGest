const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//database connection
const db = mysql.createConnection({
    host:'localhost',
    user:'Daryl',
    password:'root',
    port:3306,
    database:'gestclaim'
});

//checking database connection
db.connect(err=>{
    if(err){console.log(err,"dberr")}
    console.log("Database connected");
});

//Set up listen port
app.listen(3001, function(){
    console.log("Server started on port 3001...")
});

//get methods
app.get("/", function(req, res){
    res.send("Hello world");
});

app.get("/pays", function(req, res){
     let qr = 'select * from pays';
     db.query(qr, function(err, result){
         if(err){console.log(err,'errs')}

         if(result){
             res.send({
                 message:'Liste des pays',
                 data:result
             });
         }
     });
});

app.get("/membre", function(req, res){
    let qr = 'select * from membre';
    db.query(qr, function(err, result){
        if(err){console.log(err, 'errs')}

        if(result){
            res.send({
                message:'Liste des membres',
                data:result
            });
        }
    });
});

app.get("/reclamation", function(req, res){
    let qr = 'select * from reclamation';
    db.query(qr, function(err, result){
        if(err){console.log(err,'errs')}

        if(result){
            res.send({
                message:'Liste des reclamations',
                data:result
            });
        }
    });
});

//post methods
app.post("/pays", function(req, res){
    console.log(req.body);

    let nomPays = req.body.nompays;
    let descriptionPays = req.body.descriptionpays;

    let qr = `insert into pays(nom,description_pays) values('${nomPays}','${descriptionPays}')`;

    db.query(qr, function(err, result){
        if(err){console.log(err);}

        if(result){
            res.send({
                message:"Donnees inserees"
            });
        }
        else{
            res.send({
                message:"Une erreur est survenue..."
            });
        }
    });
});

app.post("/membre", function(req, res){
    console.log(req.body);

    let codePays = req.body.codepays;
    let nomMembre = req.body.nommembre;
    let prenomMembre = req.body.prenommembre;
    let dateNaiss = req.body.datenaiss;
    let descriptionMembre = req.body.descriptionmembre;

    let qr = `insert into membre(code_pays,nom,prenom,dateNaiss,description_membre) 
    values('${codePays}','${nomMembre}','${prenomMembre}','${dateNaiss}','${descriptionMembre}')`

    db.query(qr,function(err, reuslt){
        if(err){console.log(err);}

        if(result){
            res.send({
                message:"Donnees inserees"
            });
        }
        else{
            res.send({
                message:"Une erreur est survenue"
            });
        }
    });
});

app.post("/reclamation", function(req, res){
    console.log(req.body);

    let codeMembre = req.body.codemembre;
    let montant = req.body.montant;
    let dateReclam = req.body.datereclam;

    let qr = `insert into reclamation(code_membre,montant,dateReclam)
    values('${codeMembre}','${montant}','${dateReclam}')`;

    db.query(qr, function(err, result){
        if(err){console.log(err);}

        if(result){
            res.send({
                message:"Donnees inserees"
            });
        }
        else{
            res.send({
                message:"Une erreur est survenue..."
            });
        }
    });
});