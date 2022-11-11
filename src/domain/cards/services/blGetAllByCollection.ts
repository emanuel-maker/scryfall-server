import ICard from "../entities/Card";
import { ICardRepository } from "../repositories/CardRepository/interfaces";

interface IParams{
    cardRepository : ICardRepository,
    collectionName: string;
}

const blGetByCollection = async ({  cardRepository, collectionName } : IParams) : Promise<Array<ICard>> => {
    return await cardRepository.getAllByCollection({ collectionName });
}

export default blGetByCollection;