// importar chai
const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");



describe("GET /api/hotels/:id", function() {
  it('When parameter is an unknown id, then response should be 404 ',  function (done) {
     request(app)
    .get('/api/hotels/8987986')
    .expect(404)
    .end(function(err,res){
        if(err) return done(err);
        done()
    })
  
})
})
