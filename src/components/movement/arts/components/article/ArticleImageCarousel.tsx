import React, { useState , FC } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { ArticleImageCarouseleProps } from '../../../../../api/types';


export const ArticleImageCarousle:FC<ArticleImageCarouseleProps> = ({images}) => {

    const ApiUrl = "http://localhost:1337";
    const imageUrlsForCarousel = images.map(image => ({ url: ApiUrl + image.attributes.url }))

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? imageUrlsForCarousel.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === imageUrlsForCarousel.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='h-[580px] w-2/3 mt-4 mb-8 relative group'>
            <div
                style={{ backgroundImage: `url(${imageUrlsForCarousel[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {imageUrlsForCarousel.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}
