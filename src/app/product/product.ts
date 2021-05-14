export class Product {
    data2 !: {
        title: string;
        price: number;
        image?: string;
        showPrice: number;
        description: string;
        id: number;
        name: string;
        topFolderId: number;
    };
    description!: string;
    name!: string;
    id!: number;
    topFolderId!: number;
    price!: number;
    title!: string;
    quantity!: number;
    status!: number;
    minLevel!: number;
    data = [];
}
