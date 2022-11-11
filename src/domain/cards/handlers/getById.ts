import genericHandler from "../../../core/handlers/genericHandler"
import express from 'express';
import CardRepository from "../repositories/CardRepository";
import blGetById from "../services/blGetById";

const getById = async (req : express.Request , res : express.Response ) => {
    const { params: { value } } = req;
    const cardRepository = new CardRepository();

    await genericHandler({
      blFunction: blGetById,
      res,
      errorMsg: 'GET /cards/byid'
    })({ id : value, cardRepository });
};

export default getById;