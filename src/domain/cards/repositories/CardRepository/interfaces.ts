import ICard, { Legality } from "../../entities/Card";

export interface IParamsGetAll{
   collectionName : string;
}

export interface IParamsGetById{
    id : string;
}

export interface IParamsGetByName{
    name: string;
}

export interface IParamsGetByLegal{
    gameMode: string;
    legality : Legality;
}

export interface ICardRepository{
    getAllByCollection(params : IParamsGetAll): Promise<Array<ICard>>;
    getById(params : IParamsGetById): Promise<ICard>;
    getByName(params: IParamsGetByName): Promise<Array<ICard>>;
    getAllByLegalGameMode(params : IParamsGetByLegal): Promise<Array<ICard>>;
}