console.log("this is the product.js file");

let laptopPrice = 500000 , quantity = 23 ;
export let order = function(buyer , item){
    console.log(`${buyer} order this ${item}`);
}
export {laptopPrice , quantity as quantity};

export default order ;