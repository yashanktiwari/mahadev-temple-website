import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const LeftArrowCarousel = ({arr, setIndex}) => {
  return (
    <div className='absolute h-10 w-10 ml-4 mt-[calc((100%-68rem)/2)] bg-gray-600 text-white text-3xl rounded-full flex justify-center items-center bg-opacity-60 cursor-pointer' onClick={() => {
      setIndex(prevIndex => {
        if(prevIndex === 0) return arr.length-1;
        else return (prevIndex-1) % arr.length;
      })
    }}>
      <KeyboardArrowLeftIcon />
    </div>
  )
};

export default LeftArrowCarousel;