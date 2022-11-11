import express from 'express';

interface IParams{
    blFunction : (params : any) => Promise<any>;
    httpCode?: number;
    res: express.Response;
    errorMsg: string;
}

const genericHandler = ({ blFunction, res, httpCode = 200, errorMsg} : IParams) => async (params : any) => {
    try {
      const result = await blFunction(params);
      res.status(httpCode).json(result);

    } catch (error) {
     console.log(errorMsg);
    }
};

export default genericHandler;