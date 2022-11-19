// importar chai
const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

// describe agrupa test cases
// it test cases

describe("GET /api/cities", function () {
  it("it should get me an array of objects", function (done) {
    request(app)
      .get("/api/cities")
      .expect((response) => {
        assert.isArray(response.body.response);
        response.body.response.forEach((element) => {
          assert.isObject(element);
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
