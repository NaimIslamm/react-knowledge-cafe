import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";
function App() {
  // for bookmarks
  const [bookmark, setBookmark] = useState([]);

  const handleBookmarks = (blog) => {
    // ek tar beshi add korte dewa hbena eijnno find diye khujlam j add ase naki jodi thake tahle else a alert show korbe r jodi na thake tahle add hbe
    const isExist = bookmark.find((item) => item.id == blog.id);
    if (!isExist) {
      const newBookmarks = [...bookmark, blog];
      setBookmark(newBookmarks);
    } else {
      alert("Already Added to the bookmark");
    }
  };
  // for bookmarks
  // for spend time on read
  const [readingTime, setreadingTime] = useState(0);

  const handleMarkasRead = (id, time) => {
    const newreadingtime = readingTime + time;
    setreadingTime(newreadingtime);

    // remove the read id by filter
    // console.log("remove id", id);

    const remainingBookmarks = bookmark.filter((blog) => blog.id != id);
    setBookmark(remainingBookmarks);
  };
  // for spend time on read

  // remove/delete bookmark
  const handleDeleteBookmark = (item) => {
    const remainingBookmarks = bookmark.filter((blog) => blog.id != item.id);
    setBookmark(remainingBookmarks);
  };
  // remove/delete bookmark

  return (
    <>
      <div className="p-5">
        <Header></Header>
        <div className="md:flex gap-5 justify-between max-w-7xl mx-auto ">
          <Blogs
            handleBookmarks={handleBookmarks}
            handleMarkasRead={handleMarkasRead}
          ></Blogs>
          <Bookmarks
            bookmark={bookmark}
            readingTime={readingTime}
            handleDeleteBookmark={handleDeleteBookmark}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
