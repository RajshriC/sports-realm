import { Component } from "@angular/core";

import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
  selector: "store",
  templateUrl: "./store.component.html",
  standalone: false 

})
export class StoreComponent {
  public selectedCategory: string | null = null;
  public productsPerPage = 4;
  public selectedPage = 1;


  constructor(private repository: ProductRepository) {}

  get products(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage; 
    
    return this.repository
    .getProducts(this.selectedCategory)
    .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  get pageCount(): number {
    return Math.ceil(
        this.repository.getProducts(this.selectedCategory).length /
        this.productsPerPage
      );
  
  }

  changeCategory(newCategory: string | null): void {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }

  changePage(newPage: number): void {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number): void {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
}