// importar chai
const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");
const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");


describe("GET /api/cities", function () {
  let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODEwMjQwODA2YjgzYjMyMjk5Mzk0NiIsIm5hbWUiOiJNZXNzaSIsInBob3RvIjoiaHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0UzQVgxc3FWVUFBSWk0Vi5qcGciLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTU5NzgyMywiZXhwIjoxNjY5Njg0MjIzfQ.-JB_Dy68O0G0-atkma3AaabOgjGIZOS3kJkst0uSHsM";
  it("it should get me an array of objects", function (done) {
    request(app)
      .get("/api/cities")
      .auth(token, {type: "bearer"})
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
  let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODEwMjQwODA2YjgzYjMyMjk5Mzk0NiIsIm5hbWUiOiJNZXNzaSIsInBob3RvIjoiaHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0UzQVgxc3FWVUFBSWk0Vi5qcGciLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTU5NzgyMywiZXhwIjoxNjY5Njg0MjIzfQ.-JB_Dy68O0G0-atkma3AaabOgjGIZOS3kJkst0uSHsM";
  it("the name must be a String", function (done) {
    request(app)
      .post("/api/cities")
      .auth(token, {type: "bearer"})
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
      .auth(token, {type: "bearer"})
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
describe("DELETE /api/cities/:id", function () {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODEwMjQwODA2YjgzYjMyMjk5Mzk0NiIsIm5hbWUiOiJNZXNzaSIsInBob3RvIjoiaHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0UzQVgxc3FWVUFBSWk0Vi5qcGciLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTU5NzgyMywiZXhwIjoxNjY5Njg0MjIzfQ.-JB_Dy68O0G0-atkma3AaabOgjGIZOS3kJkst0uSHsM";
  it("It must be delete a city", function (done) {
    request(app)
      .delete("/api/cities/638366426546a1922ac4bc1f")
      .auth(token, {type: "bearer"})
      .expect((response) => {
        assert.equal(response.status, 200);
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});


