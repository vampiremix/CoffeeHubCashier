export class ShopInfo {
    _id: string;
    user: {
        _id: string;
        displayName: string;
    };
    name: string;
    phone: string;
    shopid: string;
    email: string;
    created: Date;
    address: Array<addressShop>;
}
export class addressShop {
    address: string;
    province: string;
    postcode: string;
    _id: string;
}