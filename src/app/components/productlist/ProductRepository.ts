import { Product } from "src/app/models/Product";
 
export class ProductRepository{
    private product:Product[]=[
        {id:1,title:"Telefon",description:"Çok güzel telefon",price:10,active:true}
    ]

    public getAllPost(){
        return this.product;
    }
    public getProductById(id:number){
         return this.product.filter(product=>product.id===id)
    }
}