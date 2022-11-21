// importar chai
const app = require("../app");
const chai = require("chai");
const assert = chai.assert;
const request = require("supertest");

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
        userId: "636d82abcedcaf6f80f42e72",
      })
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
});
describe("POST/hotels", function () {
  it("should be status 201", function (done) {
    request(app)
      .post("/api/hotels")
      .send({
        name: "hotel manantiales",
        photo:[
          "https://media-cdn.tripadvisor.com/media/photo-s/25/04/93/1e/blossom-hotel-houston.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/25/04/93/1e/blossom-hotel-houston.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/25/04/93/1e/blossom-hotel-houston.jpg"],
        capacity: 450,
        cityId: "636d975f45f1e59ed7a377b7",
        userId: "636d82abcedcaf6f80f42e72",
      })
      .expect(res => {
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
});
