export interface ISearch {
    onQueryChange: (id: string) => void;
    onSortByChange: (id: string) => void;
    onOrderByChange: (id: string) => void;
    query: string;
    sortBy : string;
    orderBy : string;
}