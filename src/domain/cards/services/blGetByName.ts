import ICard from "../entities/Card";
import { ICardRepository } from "../repositories/CardRepository/interfaces";

interface IParams{
    cardRepository : ICardRepository,
    name: string;
}

const blGetById = async ({  cardRepository, name } : IParams) : Promise<Array<ICard>> => {
    return await cardRepository.getByName({ name });
}

export default blGetById;