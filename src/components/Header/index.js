import React ,{useEffect} from "react";


export default function Header(props) {
  const { categories, currentCategory, setCurrentCategory } = props;

  // set window title to the current nav link
  useEffect(() => {
    document.title = currentCategory;
  }, [currentCategory]);

  return (
    <div className="p-6 flex items-center space-x-4 header-section">
      <header className="flex-1 text-3xl md:text-6xl">
        <h2 className="font-extrabold">
          <a href="/">Yashar</a>
        </h2>
      </header>
      <div className="flex-1">
        <nav className="nav-links">
          <ul className="flex justify-between space-x-2 md:space-x-4 text-base md:text-2xl ">
            {categories.map((c) => (
              <li 
                key={c} 
                onClick={() => setCurrentCategory(c)} 
                className={currentCategory === c && 'nav-active'}
                >
                {c}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
