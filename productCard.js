
class ProductCard{
    // optional properties  (private)
    #rank=null;
    #off=0;
    //color list
    //size type
    //size list
    constructor(brandName,imageSrc,productName,price){
        this.brandName=brandName;
        this.imageSrc=imageSrc;
        this.productName=productName;
        this.imageAlt=productName;
        this.price=price;   
    }
    get Off(){
        return this.#off;
    }
    set Off(off){
        if(off>0 && off<100){
            this.#off=off;
        }
        else{
            throw new Error("the off is out of percent domain!!");
        }
    }
    get Rank(){
        return this.#rank;
    }
    set Rank(rank){
        if(rank<=0 && rank>=5){
            this.#rank=rank;
        }
        else{
            throw new Error("the rank is out of legal domain!!");
        }
    }
}

const productCard1=new ProductCard("اسپیور","./img/shegeftAviz/6e4fdba903bbc7d87f515906bd846f3931f379d0_1636273200-removebg-preview.png","تصویر محصول","کفش پیاده روی پاما کد 01 مدل SDDFDKDFDFSDFDFDFDSFDSFDFDFSFSFSFSFDFD",2160000);

const productCard1Div=document.createElement("div");
productCard1Div.classList.add("product-card");