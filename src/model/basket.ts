export interface BasketItem {
    productId: number;
    userId: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
    unitsInStock: number;
    quantity: number;
}

export interface Basket {
    id: number;
    buyerId: string;
    basketItems: BasketItem[];
}