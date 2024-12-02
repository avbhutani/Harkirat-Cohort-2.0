/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function findValue(transaction,result) {
    const category = transaction.category.toLowerCase()
    const price = transaction.price
    let n = result.length
    for(let i = 0;i<n;i++) {
       
        if(result[i].category.toLowerCase() == category)  {
            result[i].totalSpent += price
            return
        }
    }
    const newEntry = {
        category:transaction.category,
        totalSpent:price
    }
    result.push(newEntry)
}
function calculateTotalSpentByCategory(transactions) {
    var result = []
    const n = transactions.length
    for(let i = 0;i<n;i++) {
        findValue(transactions[i],result)
    }

    result.forEach((obj)=> console.log(obj))
}
let transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656163200000,
        price: 20,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 3,
        timestamp: 1656249600000,
        price: 5,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 4,
        timestamp: 1656336000000,
        price: 50,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 5,
        timestamp: 1656422400000,
        price: 100,
        category: 'Electronics',
        itemName: 'Keyboard',
    },
    {
        id: 6,
        timestamp: 1656508800000,
        price: 15,
        category: 'Food',
        itemName: 'Sushi',
    },
    {
        id: 7,
        timestamp: 1656595200000,
        price: 300,
        category: 'Appliances',
        itemName: 'Microwave',
    },
    {
        id: 8,
        timestamp: 1656681600000,
        price: 8,
        category: 'Food',
        itemName: 'Coffee',
    },
    {
        id: 9,
        timestamp: 1656768000000,
        price: 200,
        category: 'Furniture',
        itemName: 'Chair',
    },
    {
        id: 10,
        timestamp: 1656854400000,
        price: 40,
        category: 'Clothing',
        itemName: 'Jeans',
    },
    {
        id: 11,
        timestamp: 1656940800000,
        price: 25,
        category: 'Food',
        itemName: 'Pasta',
    },
    {
        id: 12,
        timestamp: 1657027200000,
        price: 150,
        category: 'Electronics',
        itemName: 'Smartwatch',
    },
    {
        id: 13,
        timestamp: 1657113600000,
        price: 12,
        category: 'Books',
        itemName: 'Novel',
    },
    {
        id: 14,
        timestamp: 1657200000000,
        price: 400,
        category: 'Appliances',
        itemName: 'Vacuum Cleaner',
    },
    {
        id: 15,
        timestamp: 1657286400000,
        price: 9,
        category: 'Food',
        itemName: 'Ice Cream',
    },
];



calculateTotalSpentByCategory(transactions)
