let users = [
    {
      "name": "Eric",
      "lastName": "Rodriguez",
      "role": "admin",
      "photo": "https://cdn-icons-png.flaticon.com/512/219/219983.png",
      "age": 23,
      "email": "feric.rodriguez@gmail.com",
      "password": "Chau6789",
      "code": "holachau",
      "verified": true,
      "logged": true
    },
    {
      "name": "Antonella",
      "lastName": "Tortoza",
      "role": "admin",
      "photo": "https://cdn-icons-png.flaticon.com/512/219/219983.png",
      "age": 24,
      "email": "anto.t@gmail.com",
      "password": "holachau",
      "code": "45da17q9",
      "verified": true,
      "logged": true
    },
    {
      "name": "Daniel",
      "lastName": "Perez",
      "role": "admin",
      "photo": "https://cdn-icons-png.flaticon.com/512/219/219983.png",
      "age": 21,
      "email": "danielp@gmail.com",
      "password": "Chausi",
      "code": "45da17q9",
      "verified": true,
      " logged": true
    },
    {
      "name": "Andres",
      "lastName": "Ramirez",
      "role": "admin",
      "photo": "https://cdn-icons-png.flaticon.com/512/219/219983.png",
      "age": 26,
      "email": "andrear@gmail.com",
      "password": "Chauhola",
      "code": "45da17q9",
      " verified": true,
      " logged": true
    }
  ]

  require('dotenv').config()
  require('../database')
const User = require('../../models/User')

  users.forEach(elemento =>{
    User.create({
        name: elemento.name,
        lastName: elemento.lastName,
        role: elemento.role,
        photo:elemento.photo,
        age: elemento.age,
        email: elemento.email,
        password: elemento.password,
        code: elemento.code,
        verified: elemento.verified,
        logged: elemento.logged,
    })
  })