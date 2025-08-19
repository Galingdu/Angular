import { Injectable } from '@angular/core';
declare const axios: any;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiUrl:string='https://product-server-json.onrender.com/products';
drinks:any[]=[];
  constructor() { 
   
  }
  async getDrinks():Promise<any[]>{
    try{
      const response = await axios.get(this.apiUrl);
      this.drinks = response.data;
      console.log(this.drinks);
      return this.drinks;
    }catch(error){
      console.error(error);
      return [];
    }finally{
      console.log('Request completed');
    }
  }
}
