export interface IPlace {
    href: string,
    title: string,
    isFavorite: boolean,
    points: string,
    avatar: string,
    description: string,
    bonus: string,
    id: number
}


export interface IFavorite {
    isFavorite:boolean,
    id:number
}

export interface IAppState {
    placesList: IPlace[]
}