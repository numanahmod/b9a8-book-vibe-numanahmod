const getStoredWishlist = () =>{
    const storedWishlist = localStorage.getItem('Wishlist');

    if (storedWishlist) {
        return JSON.parse(storedWishlist);
    } 
    return [];
}

const saveWishlist = Id => {
    const storedWishlist = getStoredWishlist(); 
    const exists = storedWishlist.find(bookId => bookId === Id);
    if (!exists) {
        storedWishlist.push(Id);
        localStorage.setItem('Wishlist', JSON.stringify(storedWishlist))
    }
}

export{getStoredWishlist, saveWishlist}