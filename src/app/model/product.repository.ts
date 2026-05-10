import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { Product } from "./product.model";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = []

    constructor(private dataSource: StaticDataSource) {
        this.dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(product => product.category)
            .filter((category): category is string => category !== undefined)
            .filter((category, index, array) => array.indexOf(category) === index).sort();
        });
    }
        getProducts(category:string | null = null): Product[] {
            return this.products.filter(
                product => category === null || category === product.category
            );
        }
        getProduct(id: number): Product | undefined {
            return this.products.find(product => product.id ===id);
        }
        getCategories(): string[] {
            return this.categories;
        }
    }