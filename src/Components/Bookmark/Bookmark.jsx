import PropTypes from "prop-types";
import { TiDelete } from "react-icons/ti";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;

  return (
    <div className="flex bg-white p-4 rounded-lg my-4 mx-2">
      <h3 className="text-lg font-semibold  ">{title}</h3>
      <button className="text-2xl text-[#6047EC] hover:text-[red]">
        <TiDelete></TiDelete>
      </button>
    </div>
  );
};

export default Bookmark;
