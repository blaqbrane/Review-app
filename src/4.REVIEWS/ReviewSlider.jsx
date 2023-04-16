import { useEffect, useState } from "react";
import { Data } from "./data";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = Data.length - 1;
  const { name, job, image, text } = Data[currentIndex];

  const NextReview = () => {
    setCurrentIndex(currentIndex === length ? 0 : currentIndex + 1);
  };
  const PrevReview = () => {
    setCurrentIndex(currentIndex === 0 ? length : currentIndex - 1);
  };
  const RandomReview = () =>{
    let randomuser = Math.floor(Math.random() * Data.length)
    if(randomuser === currentIndex){
        randomuser = currentIndex + 1
        if(randomuser > Data.length - 1){
            return 0;
        }
    }
    console.log(randomuser)
    setCurrentIndex(randomuser)
  }
  useEffect(() => {
    const intervals = setInterval(() =>{
        setCurrentIndex(currentIndex === length ? 0 : currentIndex + 1)
    }, 5000)
    return () => {
        clearInterval(intervals)
    }
  }, [currentIndex])
  return (
    <div className="max-w-[400px] mx-auto flex flex-col items-center justify-center mt-10 ">
      <div className="relative w-[150px] h-[150px] rounded-[50%] bg-[purple]">
        <img src={image} alt="images" className="relative w-full h-full object-cover rounded-[50%] ml-[-8px]"/>
        <span className="absolute top-0 left-0 w-[36px] h-[36px] text-white flex flex-col justify-center items-center rounded-[50%] bg-[purple] "> <FaQuoteRight /></span>
      </div>
      <h3 className="capitalize text-xl my-2">{name}</h3>
      <p  className="capitalize text-[purple]">{job}</p>
      <p className="text-center text-[gray]">{text}</p>
      <div className="flex justify-between mt-4 gap-44 text-[purple]">
        <button onClick={PrevReview}><FaChevronLeft /></button>
        <button onClick={NextReview}><FaChevronRight /></button>
      </div>
      <button className="mt-5 px-6 py-1 bg-purple-400 rounded " onClick={RandomReview}>Suprise Me</button>
    </div>
  );
};

export default ReviewSlider;
