
import { getShoppingCart } from "../utilities/fakedb";

export const bookCartLoader = async () => {

    const res = await fetch('https://api.itbook.store/1.0/new');
    const {books} = await res.json();

    const shoppingCart = getShoppingCart();
    const newBookCart = [];
    for (const id in shoppingCart) {
        const addedBook = books.find((bk) => bk.isbn13 === id);
        if (addedBook) {
            addedBook.quantity = shoppingCart[id];
            newBookCart.push(addedBook);
        }
    }
    return { newBookCart }
}