import { Request, Response } from "express";

class FirstController {
  public uploadAvatar(req: Request, res: Response) {
    //Perguntamos se depois de validado existe o file dentro do request
    if (req.file) {
      //Se ele existir, retornamos um sucess com o payload do arquivo gerado
      //Aqui sua criatividade é o limite
      return res.json({
        response: req.file,
      });
    }

    //Caso não seja um arquivo validado, retornamos o status 409
    //Doc par ao status: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/409
    res.status(409);

    //E retornamos uma msg para o usuário final: Não é um tipo de arquivo válido
    return res.json({
      response: `Não é um tipo de arquivo válido`,
    });
  }
}

export const firstController = new FirstController();
