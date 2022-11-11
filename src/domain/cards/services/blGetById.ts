import ICard from "../entities/Card";
import { ICardRepository } from "../repositories/CardRepository/interfaces";

interface IParams{
    cardRepository : ICardRepository,
    id: string;
}

const blGetById = async ({  cardRepository, id } : IParams) : Promise<ICard> => {
    return await cardRepository.getById({ id });
}

export default blGetById;