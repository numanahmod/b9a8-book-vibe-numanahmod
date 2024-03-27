

const Chart = ({ books }) => {
  // Calculate maximum totalPages for scaling
  const maxPages = Math.max(...books.map(book => book.totalPages));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {books.map(book => (
        <div key={book.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ marginRight: '10px', width: '100px' }}>{book.name}</div>
          <div style={{
            width: `${(book.totalPages / maxPages) * 200}px`, // Adjust width as needed
            height: '20px', // Height of the bars
            backgroundColor: '#007bff', // Bar color
            borderRadius: '10px', // Rounded corners
          }}></div>
          <div style={{ marginLeft: '10px' }}>{book.totalPages}</div>
        </div>
      ))}
    </div>
  );
};

const PagesToReadPage = () => {
  // Example data for read-listed books
  const readListedBooks = [
    { id: 1, name: 'Book A', totalPages: 300 },
    { id: 2, name: 'Book B', totalPages: 250 },
    { id: 3, name: 'Book C', totalPages: 400 },
  ];

  return (
    <div>
      <h1>Pages to Read</h1>
      <BookBarChart books={readListedBooks} />
    </div>
  );
};

export default Chart;
