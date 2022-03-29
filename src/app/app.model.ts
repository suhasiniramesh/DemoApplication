export interface ApiResponse {
    next_change_id: string;
    stashes: Stash[]
}
interface Stash {
    id: string;
    league: string;
    accountName: string;
    items: Item[]
}

interface Item {
    id: string;
    name: string;
    typeLine: string;
}