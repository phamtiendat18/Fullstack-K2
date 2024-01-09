const SearchInput = () => {
  return (
    <form className="search-container">
      <input
        type="text"
        id="search-bar"
        placeholder="What can I help you with today?"
      />
      <a href="#">
        <img
          className="search-icon"
          src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
        />
      </a>
    </form>
  );
};

export default SearchInput;
