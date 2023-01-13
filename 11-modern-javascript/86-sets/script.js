// const sayilar = new Set([1,2,3]);
   const sayilar = new Set();

   sayilar.add(1);
   sayilar.add(2);
   sayilar.add(3);
   sayilar.add(3);
   sayilar.add("4");
// const dizi = [...sayilar];

   sayilar.delete(1);
   console.log(sayilar.has(1));

// sayilar.clear();

   for(let x of sayilar) {
      console.log(x);
   }

         
