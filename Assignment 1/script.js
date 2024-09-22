//we begin the task by creating an array that holds our shopping items.
let cart = [];

//a func that adds items to the cart
const addItemToCart = (iD, name, quantity, price) => {
    let newItem = {iD, name, quantity, price};
    cart.push(newItem);
};

//a func that removes items form the cart
const removeItemFromCart = (iD) => {
    const index = cart.findIndex((item) => item.iD === iD);
    if(index !== -1){
        cart.splice(index, 1); //i used splice to remove the item from the
                               //cart such that i give it the index of the
                               //item,and the number of items to remove 
                               //following the provided index.
                               //it returns -1 if the item is not found.

    }else{
        console.log('Item not found');
    }
};

//a func to update quantity to a new quantity if the item exists in 
//inventory.
const updateItemQuantity = (iD, NewQuantity) => {
    cart = cart.map(product => //map function is used to because i did
                               //not want to change the original array.
                               //it returns a new array with the changes. 
        {if(product.iD === iD)
            return { ...product, quantity: NewQuantity }//if the product
                                                        //exists, it updates
                                                        //the old quantity  
                                                        //with the new one.
            else
             return product;}
    );
};

//a func that calculates the total price of the items in the cart.
const totalPrice = () => {
    //the same functionalty can be achieved by using the below code.
    /*let total = 0;
    cart.forEach((product) => 
        {
        total += product.price * product.quantity;
        }
    );*/

    //using reduce method.
    return cart.reduce((total, product) => total +(product.price * product.quantity), 0);
};

//a func that displays the items in the cart.
const displayCart = () => {
    //this could be achieved by using the below code.
    //console.log(cart);

    //using map method.
    return cart.map(product => ({
        name: product.name,
        quantity: product.quantity,
        total_price_for_it : product.price * product.quantity    
    }));
};

//a func that filters out the cart on upon some constraints.
const filterOutCart = () => {
    cart = cart.filter(product => product.quantity >0);
};

//
const applyDiscount = (discountCode) => {
    const discountPercentages = { 'SAVE10': 10, 'SAVE20': 20, '11/11 sale discount': 45 }; // Sample discount codes
    const discount = discountPercentages[discountCode] || 0;
    return totalPrice() * ((100 - discount) / 100);
};

// Adding items to the cart
addItemToCart(1, "Samsung S24 ultra", 1, 2400);
addItemToCart(2, "Iphone 16 pro", 2, 2500);
addItemToCart(3, "pixel 9 pro XL", 1, 2600);
addItemToCart(3, "Huawei mate 20", 0, 2600);

// Updating the quantity of an item (e.g., samsung quantity updated to 3)
updateItemQuantity(2, 3);

// Removing an item (e.g., removing iphone)
removeItemFromCart(1);

// Calculating total cost (for remaining items)
console.log("Total Cost:", totalPrice()); 

// Displaying cart summary
console.log("Cart Summary:", displayCart());

// Filtering out zero-quantity items
filterOutCart();
console.log('\n\nAfter filtering out zero-quantity items:');
//another way of displaying cart items is:
displayCart().forEach(item => console.log(item));

// Applying a discount code
console.log("Total with Discount (11/11 sale discount appplies here):", applyDiscount('11/11 sale discount'));
