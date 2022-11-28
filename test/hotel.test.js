// importar chai
const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");
const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");



describe("GET /api/hotels/:id", function () {
  it("When parameter is an unknown id, then response should be 404 ", function (done) {
    request(app)
      .get("/api/hotels/8987986")
      .expect(404)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
describe("POST /hotels", function () {
  it("capacity is a number", function (done) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODEwMjQwODA2YjgzYjMyMjk5Mzk0NiIsIm5hbWUiOiJNZXNzaSIsInBob3RvIjoiaHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0UzQVgxc3FWVUFBSWk0Vi5qcGciLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTU5NzgyMywiZXhwIjoxNjY5Njg0MjIzfQ.-JB_Dy68O0G0-atkma3AaabOgjGIZOS3kJkst0uSHsM"; 
    request(app)
      .post("/api/hotels")
      .send({
        name: "Hotel fronteras",
        photo: [
          "https://media-cdn.tripadvisor.com/media/photo-s/25/04/93/1e/blossom-hotel-houston.jpg",
          "https://media-cdn.tripadvisor.com/media/photo-s/25/04/93/1e/blossom-hotel-houston.jpg",
          "https://media-cdn.tripadvisor.com/media/photo-s/25/04/93/1e/blossom-hotel-houston.jpg",
        ],
        capacity: 5020,
        cityId: "636d975f45f1e59ed7a377b7",
        userId: "6381a0577954f5eb0e896e24",
      })
      .auth(token, { type: "bearer" }) 
      .expect((res) => {
        let response = res.body.response.capacity;
        console.log(response);
        assert.isNumber(response, "is number");
      })
      .expect((res) => {
        let response = res.status;
        assert(response, 201);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
  it(`The  hotel has been created`, function (done) {
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODEwMjQwODA2YjgzYjMyMjk5Mzk0NiIsIm5hbWUiOiJNZXNzaSIsInBob3RvIjoiaHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0UzQVgxc3FWVUFBSWk0Vi5qcGciLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTU5NzgyMywiZXhwIjoxNjY5Njg0MjIzfQ.-JB_Dy68O0G0-atkma3AaabOgjGIZOS3kJkst0uSHsM";
    request(app)
      .post(`/api/hotels/`)
      .send({
        name: "HOTEL PRUEBA",
        photo: [
          "https://www.barcelo.com/guia-turismo/wp-content/uploads/2021/12/fin-de-semana-madrid-pal-3.jpg",
          "https://www.barcelo.com/guia-turismo/wp-content/uploads/2021/12/fin-de-semana-madrid-pal-3.jpg",
          "https://www.barcelo.com/guia-turismo/wp-content/uploads/2021/12/fin-de-semana-madrid-pal-3.jpg",
        ],
        capacity: 35435,
        cityId: "636d975f45f1e59ed7a377b7",
        userId: "636d82abcedcaf6f80f42e72",
      })
      .auth(token, { type: "bearer" })
      .expect(201)
      .end(function (err) {
        if (err) return done(err);
        done();
      });
  });
 
}); 

describe("DELETE /api/hotels/:id", function () {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODEwMjQwODA2YjgzYjMyMjk5Mzk0NiIsIm5hbWUiOiJNZXNzaSIsInBob3RvIjoiaHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0UzQVgxc3FWVUFBSWk0Vi5qcGciLCJsb2dnZWQiOnRydWUsImlhdCI6MTY2OTU5NzgyMywiZXhwIjoxNjY5Njg0MjIzfQ.-JB_Dy68O0G0-atkma3AaabOgjGIZOS3kJkst0uSHsM";
  it("It must be a hotels", function (done) {
    request(app)
      .delete("/api/hotels/638423c4cf00227c48737d3e")
      .auth(token, {type: "bearer"})
      .expect(response => {
        assert.isTrue(response.body.success);
      })
      .end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});


