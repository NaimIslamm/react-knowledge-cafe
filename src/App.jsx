import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";
function App() {
  // for bookmarks
  const [bookmark, setBookmark] = useState([]);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmark, blog];
    setBookmark(newBookmarks);
  };
  // for bookmarks
  // for spend time on read
  const [readingTime, setreadingTime] = useState(0);

  const handleReadingTime = (time) => {
    const newreadingtime = readingTime + time;
    setreadingTime(newreadingtime);
  };
  // for spend time on read

  return (
    <>
      <div className="p-5">
        <Header></Header>
        <div className="md:flex gap-5  justify-between max-w-7xl mx-auto ">
          <Blogs
            handleBookmarks={handleBookmarks}
            handleReadingTime={handleReadingTime}
          ></Blogs>
          <Bookmarks bookmark={bookmark} readingTime={readingTime}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
