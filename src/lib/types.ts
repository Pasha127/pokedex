export type SearchResult = {
    count: null | string,
    next: null | string,
    previous: null | string,
    results: Record<string,string>[]
}

export interface AppState { 
    searchValue: string | undefined;
    pokemonData: Record<string, unknown> | undefined;
    searchResults: SearchResult | undefined
}

