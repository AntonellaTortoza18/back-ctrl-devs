// importar chai
const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

// describe agrupa test cases
// it test cases

describe("GET /api/cities", function () {
  it("deberia traerme un array", function (done) {
    request(app)
      .get("/api/cities")
      .expect((response) => {
        assert.isArray(response.body.response);
        response.body.response.forEach((element) => {
          assert.typeOf(element, "object");
        });
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
