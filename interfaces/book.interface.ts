export interface IBook {
    _id: string;
    title: string;
    pageCount: number;
    createdAt: string;
    updatedAt: string;
    thumbnailUrl: string;
    shortDescription: string;
    longDescription: string;
    status: string;
    authors: string[]
}
