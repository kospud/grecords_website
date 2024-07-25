import React, { useState } from 'react'
import styled from 'styled-components'
import backgroundImg from "../img/backgroundimg.png"
import { useRef, useEffect } from "react";
import Point from './Point';
//Исходные размеры фона
const DEFAULT_IMAGE_WIDTH=3840;
const DEFAULT_IMAGE_HEIGHT=2160;

const BackgroundContainerElement = styled.div`
    width: 100vw;
    height: 100vh;
   
    overflow-y: hidden;
    overflow-x: auto;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
    &::-webkit-scrollbar {
    display: none;  
    }   
`
const Background = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
`
const BacgroundImage = styled.img`
    height: 100%;
    min-width: 100%;
    object-fit: cover;
    object-position: left bottom;
    position: relative;
    
`

//Координаты точек. ВАЖНО: начало координат в правом нижнем углу
const pointsData = [
    { x: 0.065, y: 0.3, name: 'Комбик' },
    { x: 0.08, y: 0.7, name: 'Панель' },
    { x: 0.13, y: 0.47, name: 'Гитары' },
    { x: 0.247, y: 0.637, name: 'книга' },
    { x: 0.27, y: 0.35, name: 'Барабаны' },
    { x: 0.455, y: 0.62, name: 'Микрофон' },
    { x: 0.52, y: 0.52, name: 'Электро-гитара' },
    { x: 0.72, y: 0.5, name: 'Мониторы' },
    { x: 0.748, y: 0.565, name: 'Монитор' },
    { x: 0.92, y: 0.65, name: 'Синт' },
    { x: 0.835, y: 0.425, name: 'Стул' },
    { x: 0.615, y: 0.06, name: 'Миска' }
];

function BackgroundContainer() {

    const [points, setPoints] = useState([]);//Состояние для точек 
    const containerRef = useRef(null);//ссылка на контейнер
    const imgRef = useRef(null);//ссылка на элемент картинки

    //Изменение позиций точек при изменении размеров экрана
    useEffect(() => {

        const img = imgRef.current;
        const calculatePointsPosition = () => {
            
            if (img.complete) {
                const imgRect = img.getBoundingClientRect();
                console.log(imgRect)
              
                const ratio=imgRect.width / DEFAULT_IMAGE_WIDTH;//коэффициент соотношения изображения на страницы и оригинального

                const updatedPoints = pointsData.map(point => ({
                    left: DEFAULT_IMAGE_WIDTH * point.x*ratio,
                    bottom: DEFAULT_IMAGE_HEIGHT * point.y*ratio,
                    name: point.name
                }));

                
                setPoints(updatedPoints);
            }
        };

        window.addEventListener('resize', calculatePointsPosition);
        img.addEventListener('load', calculatePointsPosition);
        calculatePointsPosition();

        return () => {
            window.removeEventListener('resize', calculatePointsPosition)
            img.removeEventListener('load', calculatePointsPosition);
        }
    }, [])

    //Горизонтальный скролл колесиком мыши
    useEffect(() => {

        const container = containerRef.current;

        const scroll = (event) => {
            if (event.deltaY !== 0) {
                event.preventDefault();
                container.scrollLeft += event.deltaY;
            }
        };

        container.addEventListener("wheel", scroll);

        return () => {
            container.removeEventListener("wheel", scroll);
        }
    }, []);

    return (
        <BackgroundContainerElement ref={containerRef}>
            <Background>
                <BacgroundImage src={backgroundImg} alt="Фон" ref={imgRef} />
                {
                    points.map((point, index) => (<Point
                        key={index}
                        point={point}
                    />))
                }
            </Background>
        </BackgroundContainerElement>
    )
}

export default BackgroundContainer