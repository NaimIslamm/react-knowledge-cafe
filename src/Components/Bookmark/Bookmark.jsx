import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div>
      <h3 className="text-lg font-semibold p-4 rounded-lg bg-white my-4 mx-2">
        {title}
      </h3>
    </div>
  );
};

export default Bookmark;
