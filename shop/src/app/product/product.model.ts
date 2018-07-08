export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public description: string,
        public weight?: number,
        public isAvailable?: boolean,
        public category?: any,
        public status?: boolean
    ) {
        this.id = id || null;
        this.weight = weight || 0;
        this.isAvailable = isAvailable || false;
        this.description = description || 'This is the most popular product in our shop.';
        this.category = category || 'Russia';
    }
}