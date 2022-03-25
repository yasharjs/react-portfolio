import React ,{useEffect} from "react";


export default function Header(props) {
  const { categories, currentCategory, setCurrentCategory } = props;

  // set window title to the current nav link
  useEffect(() => {
    document.title = currentCategory;
  }, [currentCategory]);

  return (
    <div className="p-4 flex justify-evenly items-center space-x-2 ">
      <header className="flex-1 text-3xl md:text-5xl">
        <h2>
          <a href="/">Yashar</a>
        </h2>
      </header>
      <div className="flex-1">
        <nav>
          <ul className="flex justify-evenly space-x-4 text-base md:text-2xl">
            {categories.map((c) => (
              <li key={c} onClick={() => setCurrentCategory(c)}>
                {c}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
