//Storage Controller
const StorageController = (function () {
   
})()
//Product Controller
const ProductController = (function () {
   //private 
   const Product = function(id,name,price){
      this.id = id;
      this.name = name;
      this.price = price;
   }

   const data = {
      products : [
         {id:0,name:'monitör',price:100},
         {id:1,name:'ram',price:200},
         {id:2,name:'klavye',price:300},
      ],
      selectedProduct:null,//kullanıcının secmiş olduğu ürünün saklanacağı yer.
      totalPrice :0
   }

   //public
   return{
      getProducts: function(){
         return data.products
      },
      getData: function(){
         return data;
      }
   }
})()

//UI Controller
const UIController = (function () {
   
})()
//App Controller
const AppController = (function (ProductCtrl,UIctrl,) {
   return{
      init: function(){
         console.log('starting app..')
         const products = ProductCtrl.getProducts()

         UIctrl.createProductList(products)
      }
   }
})(ProductController,UIController)

AppController.init();