import mongoose, { Schema } from "mongoose";
import ICard from "../../entities/Card";
import { ICardRepository, IParamsGetAll, IParamsGetById, IParamsGetByLegal, IParamsGetByName } from "./interfaces";

export const CardSchema = new Schema({
    name: { type: String, required: true },
    lang: { type: String, required: true },
    released_date: { type: Date, required: true },
    image_uris: { type: Object, required: false },
    collection_name: { type: String, required: true },
    legalities: { type: Object, required: false },
});

class CardRepository implements ICardRepository{

    private cardModel = mongoose.model("Card", CardSchema);

    async getAllByCollection(params: IParamsGetAll): Promise<Array<ICard>> {
        const cards = await this.cardModel.find({
            collection_name : params.collectionName
        });

        if(!cards){
            throw new Error('Cards not found');
        }

        const cardsMapped = cards.map(card => {
            return card as ICard;
        });

        return cardsMapped;
    }

    async getById(params : IParamsGetById) : Promise<ICard>{
        const card = await this.cardModel.findById(params.id);

        if(!card){
            throw new Error('Card not found');
        }

        return card as ICard;
    }

    async getByName(params: IParamsGetByName) : Promise<Array<ICard>>{

        const cards = await this.cardModel.find({
            name : params.name
        });

        if(!cards){
            throw new Error('Card not found');
        }

        const cardsMapped = cards.map(card => {
            return card as ICard;
        });

        return cardsMapped;
    }

    async getAllByLegalGameMode(params : IParamsGetByLegal): Promise<Array<ICard>>{

        const cards = await this.cardModel.find({
            [`legalities.${params.gameMode}`] : params.legality
        });

        if(!cards){
            throw new Error('Card not found');
        }

        const cardsMapped = cards.map(card => {
            return card as ICard;
        });

        return cardsMapped;
    }

}

export default CardRepository;