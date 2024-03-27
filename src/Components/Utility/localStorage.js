const getStoredReadBooks = () =>{
    const storedReadBooks = localStorage.getItem('Read-Books');

    if (storedReadBooks) {
        return JSON.parse(storedReadBooks);
    } 
    return [];
}

const saveReadBooks = Id => {
    const storedReadBooks = getStoredReadBooks(); 
    const exists = storedReadBooks.find(bookId => bookId === Id);
    if (!exists) {
        storedReadBooks.push(Id);
        localStorage.setItem('Read-Books', JSON.stringify(storedReadBooks))
    }
}

export{getStoredReadBooks, saveReadBooks}