import genericHandler from "../../../core/handlers/genericHandler"
import express from 'express';
import CardRepository from "../repositories/CardRepository";
import blGetByMode from "../services/blGetByMode";

const getByMode = async (req : express.Request , res : express.Response ) => {
    const { params: { value } } = req;
    const cardRepository = new CardRepository();

    await genericHandler({
      blFunction: blGetByMode,
      res,
      errorMsg: 'GET /cards/bygamemode'
    })({ gameMode : value, cardRepository });
};

export default getByMode;