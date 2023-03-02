import { Swiper, SwiperSlide } from "swiper/react";
import { Img, Description, Item, Name, Role } from "./CastItem.styled";
import notImage from './not-image.png'
const CastItem = ({actors}) => {
    
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
              
              {actors.map((el) => (
                  <SwiperSlide key={el.id}>
                      <Item  key={el.id}>
                              <div>
                              <Img src={!el.profile_path ? notImage : `https://image.tmdb.org/t/p/w200/${el.profile_path}`} alt={el.name} />
                              
                              <Description>
                                  <Name>{el.name}</Name>
                                  <Role>{el.character}</Role>
                              </Description>
                              </div>
                          
                      </Item>
                      </SwiperSlide>
                  
              ))}

              </Swiper>
        
        </>
    )
}

export default CastItem;