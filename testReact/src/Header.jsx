function Header({ toggleDarkMode }) {
  return (
    <div className="Header">
      <ul>
        <li>
          <a href="#">All posts</a>
        </li>
        <li>
          <a href="#">Top posts</a>
        </li>
        <li>
          <a href="#">About the author</a>
        </li>
      </ul>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}
export default Header;
