// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
import { Img, Item, Raiting, Description } from "./PopularSliderItem.styled";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/swiper.min.css";
import { Link } from "react-router-dom";

function raitingFilm(num){
    
    if(num < 50){
        return 'red'
    }
    if(num >= 50 && num < 70){
        return 'orange'
    }
    if(num >= 71){
        return 'green'
    }
    }

const PopularSliderItem = ({item}) => {
    
    return (
        <>
        <Swiper
      spaceBetween={50}
      slidesPerView={10}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}>
        
        {item.map((el) => (
            <SwiperSlide key={el.id}>
                <Item key={el.id}>
                    <Link to={`movies/${el.id}`}>
                        <div>
                        <Img src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} alt="" />
                        <Raiting style={{ backgroundColor: raitingFilm(el.vote_average.toFixed(1) * 10)}}>
                            <p>{el.vote_average.toFixed(1) * 10}%</p>
                        </Raiting>
                        <Description>
                            <p>{el.original_title}</p>
                            <p>({el.release_date.substring(0,4)})</p>
                        </Description>
                        </div>
                    </Link>
                </Item>
                </SwiperSlide>
            
        ))}
        <div className="prev" />
    <div className="next" />
        </Swiper>
        </>
    )
}

export default PopularSliderItem;