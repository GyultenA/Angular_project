import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product.type';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product = {} as Product;
  isOwner: boolean = false;
  showComments: boolean = false;
  productId: string = '';
  hasLike: boolean = false;
  hasRatedproduct: boolean = false;

  private paramsSubscription: Subscription = new Subscription();
  @Output() currentProductData = new EventEmitter<{
    hasLike: boolean;
    productId: string;
  }>();

  constructor(
    private userApi: UserService,
    private productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  get loggedIn(): boolean {
    return this.userApi.isLoggedIn;
  }

  get currentUser(): string | undefined {
    return this.userApi.currentUsername;
  }

  get currentUserId(): string | undefined {
    return this.userApi.currentUserId;
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activeRoute.params.subscribe((data) => {
      const id = data['productId'];
      this.productService.getOneProduct(id).subscribe(product => {
        this.product = product;

        if (product.owner._id === this.currentUserId) {
          this.isOwner = true;
          console.log(this.isOwner)
        }

        const userHasLiked =product.likedBy?.some((u) => u.user?._id === this.currentUserId);

        if (userHasLiked) {
          this.hasLike = true;
        }

        const userRated = product.usersWhoRated?.some((userId) => userId.toString() === this.currentUserId);

        if (userRated) {
          this.hasRatedproduct = true;
        }

      })

    })
  }

  onDelete(id:string): void {
    //const valueId = (this.product._id)?.toString();
    this.productService.deleteProduct(id).subscribe(() => {
      this.router.navigate(['/catalog']);
    })
  }

  requestProduct(id: string): void {
    const userId = this.currentUserId;
    const isRented = true;

    if(userId){
      this.productService.requestProduct(id, userId, isRented).subscribe(() => {
        this.router.navigate(['/catalog']);
      })
    }
  }


  cancelLike(id:string): void {
    const userId = this.currentUserId;

    if(userId){
      this.productService.cancelRequest(id,userId).subscribe(() => {
        this.router.navigate(['/catalog'])
      })
    }
  }

  onToggle(): void {
    this.showComments = !this.showComments;
  }


  sendProductData(){
    this.paramsSubscription = this.activeRoute.params.subscribe((data) => {
      this.productId = data['productId'];
      this.currentProductData.emit({
        hasLike: this.hasRatedproduct,
        productId: this.productId
      })
    })
  }

  toggleAndSendProductData(){
    this.onToggle();
    this.sendProductData();
  }

}
