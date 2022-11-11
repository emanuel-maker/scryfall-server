import genericHandler from "../../../core/handlers/genericHandler"
import express from 'express';
import CardRepository from "../repositories/CardRepository";
import blGetByName from "../services/blGetByName";

const getByName = async (req : express.Request , res : express.Response ) => {
    const { params: { value } } = req;
    const cardRepository = new CardRepository();

    await genericHandler({
      blFunction: blGetByName,
      res,
      errorMsg: 'GET /cards/byname'
    })({ name : value, cardRepository });
};

export default getByName;