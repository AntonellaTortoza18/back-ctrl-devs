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

describe("POST /cities", function () {
  it("the name must be a String", function (done) {
    request(app)
      .post("/api/cities")
      .send({
        name: "Amsterdan",
        zone: "Nort",
        photo:
          "https://p4.wallpaperbetter.com/wallpaper/84/478/489/amsterdam-netherlands-europe-canal-wallpaper-preview.jpg",
        population: 17193499,
        userId: "636d82abcedcaf6f80f42e70",
      })
      .expect((res) => {
        let response = res.body.response.name;
        assert.isString(response, "is number");
      })
      .expect((res) => {
        let response = res.status;
        assert.strictEqual(response, 201);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
  it("Must be a status 400 when can't create a city", function (done) {
    request(app)
      .post("/api/cities")
      .send({
        name: "Amsterdan",
        zone: "Nort",
        photo: "ddw",
        population: 17193499,
        userId: "636d82abcedcaf6f80f42e70",
      })
      .expect((response) => {
        assert.equal(response.status, 400);
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
}); 
