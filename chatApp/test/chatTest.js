/******************************************************************************
 *  @Purpose        : For testing output of every functions
 *  @file           : chatTest.js        
 *  @author         : Dipali kelkar
 *  @version        : 1.33.1-1554971066
 ******************************************************************************/
/**
 * @description :chai is BDD/TDD assertion library can be paired with any javascript testing framework
 */
var chai = require('chai')
/**
 * @description:This is a addon plugin for the Chai Assertion Library
 */
var chaiHttp = require('chai-http')
chai.use(chaiHttp);
chai.should()
var server = require('../server/server');
var fs = require('fs')
/**
 * @description:taking data from JSON file for testing purpose
 */
function readFile() {
    var obj = fs.readFileSync('/home/user/chatApp/test/test.json')
    var data = JSON.parse(obj);
    return data;
}
describe('status and content', () => {
    /**
     * @description    : test Script for Registration
     */
    describe('Registration Page', () => {
        var data = readFile();
        it('status', (done) => {
            chai.request(server).post('/register').send(data.registration).end((err, res) => {
                if (err) {
                    console.log("expect ==>", err)
                    err.should.have.status(400);
                }
                else {
                    console.log('expect Body ==>', res.body)
                    res.should.have.status(200);
                }
                done();
            })
        })

    })
    /**
     * @description:test for login user
     */
    describe('Login User', () => {
        it("Login Or Not", (done) => {
            var data = readFile();
            chai.request(server).post("/login").send(data.login).end((err, res) => {
                if (err) {
                    console.log('expect Body ==>', err)
                    err.should.have.status(400)
                }
                else {
                    console.log('expect Body ==>', res.body);
                    res.should.have.status(200);
                }
                done();
            })
        })
    })
    /**
     * @description:Test for forgot password
     */
    describe('forgotPassword', () => {
        it("forgotPassword ", (done) => {
            var data = readFile();
            chai.request(server).post('/forgotPassword').send(data.forgotPassword).end((err, res) => {
                if (err) {
                    console.log('expect Body ==>', err)
                    err.should.have.status(400)
                }
                else {
                    console.log('expect Body ==>', res.body);
                    res.should.have.status(200);
                }
                done();
            })
        })
    })
    /**
     * @description:Test for verifying user
     */
    describe('verify user', () => {
        it("verify user", (done) => {
            var data = readFile();
            chai.request(server).post('/verifyUser').send(data.verifyUser).end((err, res) => {
                if (err) {
                    console.log('expect Body ==>', err)
                    err.should.have.status(400)
                }
                else {
                    console.log('expect Body ==>', res.body);
                    res.should.have.status(200);
                }
                done();
            })
        })
    })
    /**
     * @description:Testing for reset passowrd function
     */
    describe("Reset Password", () => {
        it("Reseting Password", (done) => {
            var data = readFile();
            chai.request(server).post('/resetPassword/:token').set('token', data.resetPassword.token).send(data.resetPassword).end((err, res) => {
                if (err) {
                    console.log("expect Body ==>", err);
                    err.should.have.status(400)
                }
                else {
                    console.log("expect Body ==>", res.body);
                    res.should.have.status(200);
                }
                done();
            })
        })
    })



})