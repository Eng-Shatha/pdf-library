import { useState, useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

  .books-page {
    min-height: 100vh;
    background: #0f0e0c;
    color: #f0ead6;
    font-family: 'DM Sans', sans-serif;
    padding: 2rem;
  }

  .books-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .books-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: #e8c98a;
    letter-spacing: -1px;
    margin: 0 0 0.5rem;
  }

  .books-subtitle {
    font-size: 0.95rem;
    color: #8a8070;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .search-bar {
    display: flex;
    max-width: 600px;
    margin: 0 auto 3rem;
    gap: 0;
    border: 1px solid #3a3428;
    border-radius: 4px;
    overflow: hidden;
  }

  .search-input {
    flex: 1;
    background: #1a1814;
    border: none;
    padding: 0.85rem 1.2rem;
    color: #f0ead6;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    outline: none;
  }

  .search-input::placeholder { color: #5a5448; }

  .search-btn {
    background: #e8c98a;
    color: #0f0e0c;
    border: none;
    padding: 0.85rem 1.5rem;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: background 0.2s;
  }

  .search-btn:hover { background: #f0d8a0; }
  .search-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  .status-message {
    text-align: center;
    padding: 4rem;
    color: #5a5448;
    font-size: 1rem;
  }

  .results-count {
    text-align: center;
    color: #6a6050;
    font-size: 0.85rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .book-card {
    background: #1a1814;
    border: 1px solid #2a2820;
    border-radius: 6px;
    overflow: hidden;
    transition: transform 0.25s, border-color 0.25s;
    display: flex;
    flex-direction: column;
  }

  .book-card:hover {
    transform: translateY(-4px);
    border-color: #e8c98a40;
  }

  .book-cover {
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    display: block;
    background: #252218;
  }

  .book-cover-placeholder {
    width: 100%;
    aspect-ratio: 2/3;
    background: linear-gradient(135deg, #252218 0%, #1a1814 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: #3a3428;
  }

  .book-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .book-title {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    color: #f0ead6;
    margin: 0 0 0.35rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .book-author {
    font-size: 0.8rem;
    color: #8a8070;
    margin: 0 0 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .book-year {
    font-size: 0.75rem;
    color: #e8c98a;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  .read-btn {
    margin-top: auto;
    display: block;
    text-align: center;
    background: transparent;
    border: 1px solid #e8c98a60;
    color: #e8c98a;
    padding: 0.5rem;
    border-radius: 4px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
  }

  .read-btn:hover {
    background: #e8c98a;
    color: #0f0e0c;
  }

  .error-box {
    text-align: center;
    padding: 3rem;
    color: #c87060;
    border: 1px solid #3a1818;
    border-radius: 6px;
    max-width: 500px;
    margin: 0 auto;
  }
`;

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("programming");
  const [inputValue, setInputValue] = useState("programming");

  const fetchBooks = (searchQuery) => {
    setLoading(true);
    setError(null);
    const requestOptions = { method: "GET", redirect: "follow" };

    fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}&limit=24`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.docs || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("فشل تحميل الكتب. تأكد من الاتصال بالإنترنت.");
        setLoading(false);
        console.error(err);
      });
  };

  useEffect(() => {
    fetchBooks(query);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setQuery(inputValue);
    fetchBooks(inputValue);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="books-page">
        <div className="books-header">
          <h1 className="books-title">Open Library</h1>
          <p className="books-subtitle">استكشف ملايين الكتب</p>
        </div>

        <form className="search-bar" onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            placeholder="ابحث عن كتاب..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="search-btn" type="submit" disabled={loading}>
            {loading ? "..." : "بحث"}
          </button>
        </form>

        {loading && <div className="status-message">جاري التحميل...</div>}
        {error && <div className="error-box">{error}</div>}

        {!loading && !error && books.length > 0 && (
          <>
            <p className="results-count">{books.length} نتيجة لـ "{query}"</p>
            <div className="books-grid">
              {books.map((book) => {
                const coverId = book.cover_i;
                const title = book.title || "بدون عنوان";
                const author = book.author_name?.[0] || "مؤلف غير معروف";
                const year = book.first_publish_year;
                const bookUrl = `https://openlibrary.org${book.key}`;

                return (
                  <div className="book-card" key={book.key}>
                    {coverId ? (
                      <img
                        className="book-cover"
                        src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
                        alt={title}
                        loading="lazy"
                      />
                    ) : (
                      <div className="book-cover-placeholder">📖</div>
                    )}
                    <div className="book-info">
                      <h3 className="book-title">{title}</h3>
                      <p className="book-author">{author}</p>
                      {year && <span className="book-year">{year}</span>}
                      <a
                        className="read-btn"
                        href={bookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        اقرأ الكتاب
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {!loading && !error && books.length === 0 && (
          <div className="status-message">لا توجد نتائج لـ "{query}"</div>
        )}
      </div>
    </>
  );
}

export default Books;