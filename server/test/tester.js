const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const should = chai.should();


const {User} = require('../models/user.js');
const {app, runServer, closeServer} = require('../index.js');
const {DATABASE_URL} = require('../config.js');


chai.use(chaiHttp);


describe('User', function() {

  before(function() {
    return runServer();
  });

  after(function() {
    return closeServer();
  });

  
  it('should list User items on GET', function() {
   
    return chai.request(app)
      .get('/users')
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        
        res.body.length.should.be.at.least(1);
        
        const expectedKeys = ['email', 'password'];
        res.body.forEach(function(item) {
          item.should.be.a('object');
          item.should.include.keys(expectedKeys);
        });
      }).catch(function(error) {
        console.log(error)
      })
    });
      
     

  
  it('should add User on POST', function() {
    const newUser = { email: 'anything@gmail.com', password: 'coffee'};
    return chai.request(app)
      .post('/users')
      .send(newUser)
      .then(function(res) {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.include.keys('email', 'password');
        res.body.id.should.not.be.null;
      
      }).catch(function(error) {
        console.log(error)
      })
  });

  
  
  it('should update User items on PUT', function() {
    
    const updateUserData = {
      name: 'foo',
      checked: true
    };

     chai.request(app)
     
      .get('/users')
      .then(function(res) {
        updateUserData.email = res.body[0].email;
        
         chai.request(app)
          .put(`/users/${updateUserData.email.password}`)
          .send(updateUserData);
      })
      
      .then(function(res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.deep.equal(updateUserData);
      }).catch(function(error) {
        console.log(error)
      })
       
      
  });

 
  it('should delete User id on DELETE', function() {
     chai.request(app)
     

      .get('/users')
      .then(function(res) {
      
         chai.request(app)
          .delete(`/users/${res.body[0].email}`);
    })
        .then(function(res) {
         res.should.have.status(204);
       }).catch(function(error) {
         console.log(error)
       })
  });
});