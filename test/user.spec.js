const chai =  require('chai')
const chaiHttp =  require('chai-http')
const request =  require('supertest');
const should = chai.should();
const expect = require('chai').expect;

const server = require('../app');

chai.use(chaiHttp);

const username = 'Ram';
const fullname = 'Ram';
const email = 'Ram@gmail.com';
const password = 'data123';

describe("User authentication API",()=>{
    it("Get Register API property",()=>{
        const res = request(server)
        .post('/api/auth/register')
        .send({
            username : username,
            fullname : fullname,
            email : email,
            password : password
        });
        expect(res.method).to.equal('POST');  
    })

    it("POST Register API",()=>{
        chai.request(server)
        .post('/api/auth/register')
        .send({
            username : username,
            fullname : fullname,
            email : email,
            password : password
        })
        .end((err,res)=>{
            res.should.have.status(200);
        });   
    })

    it("Get login API property",()=>{
        const res = request(server)
        .post('/api/auth/isAuthenticated')
        .send({
            username : username,
            password : password
        });
        expect(res.method).to.equal('POST');  
    })

    it("POST login API",()=>{
        chai.request(server)
        .post('/api/auth/login')
        .send({
            username : username,
            password : password
        })
        .end((err,res)=>{
            res.should.have.status(200);
        });   
    })
    it("Get isAuthenticated API property",()=>{
        const res = request(server)
        .get('/api/auth/isAuthenticated')
        
        expect(res.method).to.equal('GET');  
    })

    it("GET isAuthenticated API",()=>{
        chai.request(server)
        .get('/api/auth/isAuthenticated')
        .end((err,res)=>{
            res.should.have.status(403);
        });
        
    })
});


describe("News Database API",()=>{
    it("Get isAuthenticated API property",()=>{
        const res = request(server)
        .get('/api/v1/news/')       
        expect(res.method).to.equal('GET');  
    })

    it("GET News API",()=>{
        chai.request(server)
        .get('/api/v1/news/')
        .end((err,res)=>{
            res.should.have.status(200);
        });
        
    })
});