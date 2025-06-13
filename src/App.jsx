import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";
function App() {
  const [Bookmark, setBookmark] = useState([]);
  const handleBookmarks = (blog) => {
    const newBookmarks = [...Bookmark, blog];
    setBookmark(newBookmarks);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex justify-between max-w-7xl mx-auto">
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks Bookmark={Bookmark}></Bookmarks>
      </div>
    </>
  );
}

export default App;
