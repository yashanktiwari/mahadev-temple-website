import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const RightArrowCarousel = ({arr, setIndex}) => {
  return (
    <div className="w-screen flex justify-end">
      <div className="absolute h-10 w-10 mr-4 mt-[calc((100%-68rem)/2)] bg-gray-600 text-white rounded-full flex justify-center items-center bg-opacity-60 cursor-pointer" onClick={() => {
        setIndex(prevIndex => (prevIndex + 1) % arr.length);
      }}>
        <KeyboardArrowRightIcon />
      </div>
    </div>
  );
};

export default RightArrowCarousel;
