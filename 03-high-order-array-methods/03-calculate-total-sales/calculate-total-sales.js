function calculateTotalSalesWithTax(arr, taxRate) {
    // calculateTotalSalesWithTax(
    //     [
    //         { name: 'Apple', price: 0.5, quantity: 10 },
    //         { name: 'Banana', price: 0.3, quantity: 20 },
    //         { name: 'Orange', price: 0.6, quantity: 15 },
    //     ],
    //     8
    // ); // 21.6 (20 + 8% tax)

    // const arr1 = arr.map(el => el.price * el.quantity);


    const num = arr.reduce((acc, cur) =>
        (acc + cur.price * cur.quantity)
    , 0);

    return num + num * taxRate / 100;

}

module.exports = calculateTotalSalesWithTax;
