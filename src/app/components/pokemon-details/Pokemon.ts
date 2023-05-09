export interface Pokemon{
    name: string;
    
    types: {
        type: {
            name: string
        }
    }[];

    id: number;
    photo: string;
    abilities: {
        ability: {
            name: string
        }
    }[];

    height: number;
    weight: number;

    stats: {
        base_stat: number;
        stat: {
            name: string
        }
    }[];
}