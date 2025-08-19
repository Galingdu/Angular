import { Component ,ElementRef,ViewChild} from '@angular/core';
import { ProductServiceService } from '../Service/product-service.service';
import { ApiService } from '../Service/api.service';
import { CurrencyPipe } from '@angular/common';
declare const Swal: any;

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor( private productService:ProductServiceService,private apiService:ApiService){
    
  }
  drinks: any[] = [];
  async ngOnInit(){
    this.drinks = await this.apiService.getDrinks();
    
    }
  handleAddToCart(product: any) {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your item has been added successfully.',
      showConfirmButton: false,
      timer: 1500,
    });
    this.productService.getCart(product);
    
  }

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

 

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  allProduct: any = [
    {
      id: 100,
      name: '361° Sport / New in',
      imageUrl: 'https://poedagar.store/wp-content/uploads/2025/02/2-21.jpg',
      price: 23.51,
      oldPrice: 33.59,
      description: 'Basketball Sandals',
    },
    {
      id: 20,
      name: 'King Watch 201',
      imageUrl:
        'https://www.pop-collection254.store/cdn/shop/files/photo_2024-07-18_09-20-45.jpg?v=1721283724&width=1445',
      price: 80.5,
      oldPrice: 100.0,
      description: 'Luxury Watch',
    },
    {
      id: 30,
      name: '361° Sport / New in',
      imageUrl: 'https://poedagar.store/wp-content/uploads/2025/02/2-21.jpg',
      price: 23.51,
      oldPrice: 33.59,
      description: 'Basketball Sandals',
    },
    {
      id: 40,
      name: 'King Watch 201',
      imageUrl:
        'https://www.pop-collection254.store/cdn/shop/files/photo_2024-07-18_09-20-45.jpg?v=1721283724&width=1445',
      price: 80.5,
      oldPrice: 100.0,
      description: 'Luxury Watch',
    },
  ];
}
