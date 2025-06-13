import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtag,
  } = blog;
  return (
    <div className="">
      <img
        className="max-w-[850px] w-full mb-7 object-cover rounded-2xl"
        src={cover}
        alt={`cover picture of the ${title}`}
      />

      <div className="flex justify-between items-center">
        <div className="flex gap-6">
          <img
            className="rounded-full w-[60px] object-cover"
            src={author_img}
            alt=""
          />
          <div className="">
            <h3 className="text-[24px] font-semibold">{author}</h3>
            <p className="text-[16px] font-semibold text-gray-500">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <p className="text-[20px]  text-gray-500">{reading_time}</p>
          <button onClick={() => handleBookmarks(blog)}>
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl my-7">{title}</h2>
      <p className="text-gray-500 text-[20px]">{hashtag}</p>
      <button className="text-[#6047EC] underline my-8">Mark as Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.function,
};

export default Blog;
