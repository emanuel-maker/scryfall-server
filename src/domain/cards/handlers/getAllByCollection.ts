import genericHandler from "../../../core/handlers/genericHandler"
import express from 'express';
import blGetAllByCollection from "../services/blGetAllByCollection";
import CardRepository from "../repositories/CardRepository";

const getAllByCollection = async (req : express.Request , res : express.Response ) => {
    const { params: { value } } = req;
    const cardRepository = new CardRepository();

    await genericHandler({
      blFunction: blGetAllByCollection,
      res,
      errorMsg: 'GET /cards/bycollection'
    })({ collectionName : value, cardRepository });
};

export default getAllByCollection;