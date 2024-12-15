import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { SearchService } from 'src/app/services/search.service';
import { Product } from 'src/app/types/product.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  searchResult: Product[] = [];
  isLoading: boolean= true;
  productFound: boolean= false;

  

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private searchService: SearchService,
     private router: Router,
        private activeRoute: ActivatedRoute,
  ){}

  types: string[] = ["SWEET", "SALTY"];

  searchProduct = this.fb.group({
    name:[''],
    type:[''],
  });


  ngOnInit(): void {
    if(this.searchService.searchParams){
      const params = this.searchService.searchParams;

      this.searchProduct.controls['name'].setValue(params.name);
      this.searchProduct.controls['type'].setValue(params.type)
    }

    if(this.searchService.searchResults){
      this.searchResult = this.searchService.searchResults;
    }

   // setTimeout(()=> {
     // this.isLoading = false;
   // },1000)
   
  }


  onSubmit(): void{
    if(this.searchProduct.valid){
      const name = this.searchProduct.value.name?.trim() || '';
      const type = this.searchProduct.value.type || '';
      console.log('search params',{name, type})

      this.productService.searchProducts(name, type).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.searchResult = response;
          this.searchService.searchParams = this.searchProduct.value;
          this.searchService.searchResults = response;

          if(this.searchResult.length !==0){
            console.log('products found');
            this.productFound= true;
            this.isLoading = false;
          }
        },
        error:(err)=> {
          console.log('products not found');
          this.productFound= false;
        }
      })
    }
  }

  clickDetails(id:any){
    this.router.navigate([`/catalog/${id}`])
  }

}

