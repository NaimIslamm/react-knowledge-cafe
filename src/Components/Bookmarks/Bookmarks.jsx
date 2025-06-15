import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmark, readingTime, handleDeleteBookmark }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-sky-200 p-4 mb-4 rounded-2xl text-center border-blue">
        <h3 className="text-[24px] text-[#6047EC] font-bold pb-2">
          Spent time on read :{readingTime} min
        </h3>
      </div>
      <div className=" rounded-2xl p-6 bg-zinc-200">
        <h2 className="text-[24px] font-semibold pb-2">
          Bookmarks Blogs:{bookmark.length}
        </h2>
        {bookmark.map((bookmark, idx) => (
          <Bookmark
            key={idx}
            bookmark={bookmark}
            handleDeleteBookmark={handleDeleteBookmark}
          ></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
