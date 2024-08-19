import React from 'react'
import styled from 'styled-components'
import FadeInComponent from '../FadeInComponent'
import TeamCard from './TeamCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"




const TeamReviewsCarouselElement = styled(FadeInComponent)`
    width: 90%;

    //margin-left: 2.5%;
    margin-bottom: 16svh;
    margin-top: 15svh;
    align-self: center;
    @media(max-width: 600px){
        margin-bottom: 9svh;
        margin-top: 7svh;
        //margin-left: 0;
        width: 80%;
    }
`

const TeamReviews = [
    {
        teamName: 'Название Команды',
        photo: '',
        text: 'Здесь могут быть отзывы, но надо смотреть сколько влезет текста'
    },
    {
        teamName: 'Название Команды',
        photo: '',
        text: 'Здесь могут быть отзывы, но надо смотреть сколько влезет текста'
    },
    {
        teamName: 'Название Команды',
        photo: '',
        text: 'Здесь могут быть отзывы, но надо смотреть сколько влезет текста'
    },
    {
        teamName: 'Название Команды',
        photo: '',
        text: 'Здесь могут быть отзывы, но надо смотреть сколько влезет текста'
    },
    {
        teamName: 'Название Команды',
        photo: '',
        text: 'Здесь могут быть отзывы, но надо смотреть сколько влезет текста'
    },
    {
        teamName: 'Название Команды',
        photo: '',
        text: 'Здесь могут быть отзывы, но надо смотреть сколько влезет текста'
    },
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1930,
            settings: {
              slidesToShow: 5,
            }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
function TeamReviewsCarousel() {

    /*const handleScroll = (event: React.WheelEvent) => {
        if (event.deltaY !== 0) {
            event.preventDefault();
            event.stopPropagation();
            console.log(event)
        }
    };*/
    //TeamReviews.map(rev => <TeamCard review={rev}/>)
  return (
    <TeamReviewsCarouselElement threshold={0.5} type='div' >
        <Slider {...settings}>
        {
            TeamReviews.map(rev => <TeamCard review={rev}/>)
        }
        </Slider>
    </TeamReviewsCarouselElement>
  )
}

export default TeamReviewsCarousel