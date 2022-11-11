
export enum Legality{
    Legal = 'legal',
    NoLegal = 'not_legal'
};

export default interface ICard {
    id: string;
    name: string;
    lang: string;
    released_date: Date;
    image_uris?: {
        [name: string] : string
    };
    collection_name: string;
    legalities?:  {
        [name: string] : Legality
    };
}