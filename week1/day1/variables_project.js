/* PART 1 */

/**
	p1 - no output
	p2 - The value of x is 1
	p3 - All Star Code!
	p4 - 50 ABCdef 2030
	p5 - Sum: 13
	p6 - Sum: 8
	p7 - err bc of const
*/

/** PART 2 (SOLUTION) */

/**
	We're going to earn a profit by reselling tickets.
	We bought some tickets to see Billie Eilish:
		4 regular tickets for $45 each
		2 front row tickets for $75 each
*/
const cost = (45 * 4 + 75 * 2); 
console.log('Cost:', cost);
 
// We're reselling the tickets for 50% above the original price
let sellingPrice = cost * 1.5;
console.log('Selling price:', sellingPrice);
 
// But StubHub, the online ticket selling platform, charges a 20% seller fee
let sellerFee = sellingPrice * 0.2;
console.log('Seller fee:', sellerFee);
 
// Our total profit:
console.log('Profit:', sellingPrice - cost - sellerFee);
