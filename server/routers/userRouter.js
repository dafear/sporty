const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const morgan = require('morgan');
const mongoose = require('mongoose');
const http = require('http');
const path = require('path');
const methodOverride = require('method-override');
const request = require('request');
const uuid = require('uuid');
const ObjectId = require('mongodb').ObjectID;



mongoose.Promise = global.Promise;



  router.use(bodyParser.urlencoded({ 
   extended: false, 
   parameterLimit: 1000000
 
 }));
  
 router.use(bodyParser.json());
 router.use(methodOverride());


const {User} = require('../models/user.js');


 


   router.get('/users', (req, res) => {
    // let email = req.query.email; 
    User
    .find()
     // .find({ email: email })

      .limit(100)

     .exec()
     .then(users => {
      
        res.status(200).json(users)
       
    })
      .catch(
        err => {
          console.error(err);
          res.status(500).json({message: 'Internal server error'});
      });
  });




router.post('/users', (req, res) => {

  const requiredFields = ['email', 'password'];
  for (let i=0; i<requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`
      console.error(message);
      return res.status(400).send(message);
    }
  }

  User
    .create({
      email: req.body.email,
      password: req.body.password,})
      
    .then(
      users => res.status(201).json(searches.apiRepr()))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });
});





const toUpdate = {};
const updateableFields = ['email', 'password'];




      router.put('/users/:email', (req, res) => {

        console.log("i got here");
         console.log(req.params);
 
           if (!(req.params.email && req.body.email && req.params.email === req.body.email)) {
           
          const message = ( `Request path email (${req.params.email}) and request body email` +
           `(${req.body.email}) must match`); 
           console.error(message);
            res.status(400).json({message: message});
     

          }

                   updateableFields.forEach(field => {
                     if (field in req.body) {
                   toUpdate[field] = req.body[field];
   
               }

          });
 
      

        User
            .findByIdAndUpdate(mongoose.Types.ObjectId(req.params.email), {$set: toUpdate})
            .exec()
            .then(users => res.status(200).send(req.body))
            .catch(err => {
           console.log(err);
           res.status(500).json({message: 'Internal server error'})
        
        });
 
      });





          router.delete('/searches/:email', (req, res) => {
          Search
         .findByIdAndRemove(req.params.id)
         .exec()
         .then(users => res.status(204).end())
         .catch(err => {
          console.log(err);
          res.status(500).json({message: 'Internal server error'});


        })

    });




 




module.exports = router;