 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 
 let total = 0;
 order.map((el) => {
     const {itemName, quantity, unitPrice} = el;
     console.log(`${itemName}   ${quantity}   ${unitPrice}`);

    total = total + unitPrice;
 })
 
 console.log(`total: ${total}`);

