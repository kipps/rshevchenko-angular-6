export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public description: string,
        public weight?: number,
        public isAvailable?: boolean,
        public category?: any,
        public imgUrl?:string,
        public count?: number,
        public cartCount?: number,
    ) {
        this.id = id;
        this.weight = weight || 0;
        this.isAvailable = isAvailable || false;
        this.description = description || 'We did not add this description yet.';
        this.category = category || 'Not Found';
        this.imgUrl = imgUrl || './assets/img/not-found.jpg';
        this.count = count || 0;
        this.cartCount = cartCount || 1;
    }
}