//Express [Router, multer]
import { Router } from "express";
import multer from "multer";

//Controller Usado para Aula
import { firstController } from "./app/controller/FirstController";

//Middleware de Upload para o Avatar
import { uploadAvatar } from "./app/middleware/upload/avatar";

//Inicialização do Router
const router: Router = Router();

//Routes
router.post(
  //Rota de acesso
  "/",
  /*
    ***ATENÇÃO****
    Esse Middleware que fará com que aconteça o Upload
  */
  multer(uploadAvatar.getConfig).single("avatar"),
  //Controller
  firstController.uploadAvatar
);

export { router };
