let comments = [
    {
      "showId": "6382583faf8b0f64c39c6c48",
      "userId": "636d8755f23e35d46c4c0862",
      "comment": "Que buen show",
     
    },
    {
        "showId": "6382d29647af47fd8d54c9d0",
        "userId": "6381a0577954f5eb0e896e24",
        "comment": "Me gusto mucho",
       
      },
      {
        "showId": "6382583faf8b0f64c39c6c48",
        "userId": "636d8755f23e35d46c4c0862",
        "comment": "Que bueeen",
       
      },
      {
        "showId": "637bd77b8c5c2d10697fd35b",
        "userId": "636d82abcedcaf6f80f42e70",
        "comment": "Estuvo muy bueno",
       
      },
   
  ]

  require('dotenv').config()
  require('../database')
const Comment = require('../../models/Comment')

  comments.forEach(elemento =>{
    Comment.create({
        showId: elemento.showId,
        userId: elemento.userId,
        comment: elemento.comment,
        
    })
  })