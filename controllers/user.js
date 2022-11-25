// primero requiero el modelo que necesito controlar
const User = require("../models/User.js");
const bcryptjs = require("bcryptjs"); //de esta libreria vamos a utilizar el método hashSync para encriptar la contraseña
const crypto = require("crypto"); //de este modulo vamos a requerir el método randomBytes
const accountVerificationEmail = require("./accountVerificationEmail");
const {
  userSignedUpResponse,
  userNotFoundResponse,
  invalidCredentialsResponse,
  userSignedOutResponse,
} = require("../config/responses");
 const jwt = require("jsonwebtoken");

const controller = {
  register: async (req, res, next) => {
    let { name, lastName,  role ,photo, age, mail, password} = req.body;
    let verified = false;
    let logged = false;
    let code = crypto.randomBytes(10).toString("hex");
    //encripto o hasheo la contraseña
    password = bcryptjs.hashSync(password, 10);

    try {
      //crea el usuario
      await User.create({
        name,
        lastName,
        role,
        photo,
        age,
        mail,
        password,
        verified,
        logged,
        code,
      });
      //envía mail de verificación (con transportador)
      await accountVerificationEmail(mail, code);
      return userSignedUpResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  verified: async (req, res, next) => {
    //método para que un usuario verifique su cuenta
    //requiere por params el código a verificar

    const { code } = req.params;
    console.log(code);
    try {
      //busca un usuario que coincida el código
      //y cambia verificado de false a true
      let user = await User.findOneAndUpdate(
        { code: code },
        { verified: true },
        { new: true }
      );
      if (user) {
        //si tiene éxito debe redirigir a alguna página (home, welcome, login)
        //con el metodo redirect, redirijo automaticamente al usuario (en el front)
        //hacia la pagina que quiero que se "mueva"
        return res.redirect("http://localhost:3000/index");
      } //si no tiene éxito debe responder con el error
      return userNotFoundResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  enter: async (req, res, next) => {
   const { password } = req.body; 
   const { user } = req;
   try {
     const verifiedPassword = bcryptjs.compareSync(password, user.password);

    if (verifiedPassword) {
     const userDb = await User.findOneAndUpdate(
        { _id: user.id },
        { logged: true },
          { new: true }
        );
        const token = jwt.sign(
          {
            id: userDb._id,
            name: userDb.name,
            lastName: userDb.lastName,
            role: userDb.role,
            photo: userDb.photo,
            logged: userDb.logged,
          },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 24 }
       );

       return res.status(200).json({
          response: { user , token },
          success: true,
           message: "Welcome " + user.name,
         });
       }

     return invalidCredentialsResponse(req, res);
   } catch (error) {
     next(error);
   }
 },

   enterWithToken: async (req, res, next) => {
    let { user } = req;
    try {
      return res.json({
         response: {
         user
        },
        success: true,
       message: "Welcome " + user.name,
     });
     } catch (error) {
       next(error);
    }
  },

  // leave: async (req, res, next) => {
  //   //método para que un usuario cierre sesión (cambia online de true a false)
  //   //solo para usuarios registrados en nuestra app (social logout se maneja en front)
  //   //si tiene éxito debe cambiar online de true a false
  //   //si no tiene éxito debe responder con el error
  //   const { id } = req.user;

  //   try {
  //     await User.findOneAndUpdate({ _id: id }, { online: false });

  //     return userSignedOutResponse(req, res);
  //   } catch (error) {
  //     next(error);
  //   }
  // },
  // read: async (req, res, next) => {
  //   let query = {};
  //   let order = { name: "asc" };
  //   if (req.query.name) {
  //     query.name = new RegExp(req.query.name, "i");
  //   }
  //   if (req.query.order) {
  //     order.name = req.query.order;
  //   }
  //   try {
  //     let all = await User.find(query).sort(order)
  //     if (all) {
  //       res.status(200).json({
  //         response: all,
  //         success: true,
  //         message: "se obtuvieron usuarios",
  //       });
  //     } else {
  //       res.status(404).json({
  //         success: false,
  //         message: "no hay usuarios",
  //       });
  //     }
  //   } catch (error) {
  //     next(error);
  //   }
  // },
};

// tercero exporto el controlador
module.exports = controller;
