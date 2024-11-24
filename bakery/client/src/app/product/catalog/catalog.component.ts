import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product.type';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products: Product[] | null = [];
  hasResult: boolean = true;

  constructor(private productService: ProductService, private userApi: UserService) { }

  get loggedIn(): boolean {
    return this.userApi.isLoggedIn;
  }

  allProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);

    if (this.products?.length === 0) {
      this.hasResult = false;
    }


  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((data) => {
      this.products = data;

      if (this.products?.length === 0) {
        this.hasResult = false;
      }
      return this.products;
    })


    //console.log(this.hasResult)
  }



}
