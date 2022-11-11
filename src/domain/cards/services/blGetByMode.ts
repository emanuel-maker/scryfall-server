import ICard, { Legality } from "../entities/Card";
import { ICardRepository } from "../repositories/CardRepository/interfaces";

interface IParams{
    cardRepository : ICardRepository,
    gameMode: string;
}

const blGetByMode = async ({  cardRepository, gameMode } : IParams) : Promise<Array<ICard>> => {
    return await cardRepository.getAllByLegalGameMode({ gameMode, legality: Legality.Legal });
}

export default blGetByMode;