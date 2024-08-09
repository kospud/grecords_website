import { useInView } from "react-intersection-observer"
import styled from "styled-components"

interface FadeInImageContainerProps {
    withGap?: boolean
}
const FadeInImageContainer = styled.div<FadeInImageContainerProps>`
overflow: hidden;
width: ${({ withGap }) => withGap ? '95%' : "100%"};
aspect-ratio: 314/100;
margin-bottom: ${({ withGap }) => withGap ? '4svh' : "0"};
position: relative;

@media (max-width: 600px){
    aspect-ratio: none;
    width: 100%;
    height: 45svh;
    object-position: 35% 0;
    
    }
`

const FadeInImageBlock = styled.div<{inView: boolean}>`
width: 100%;
height: 100%;
transform: ${({ inView }) => inView ? 'translateY(0%)' : "translateY(-100%)"};
transition: transform .3s ease-in-out;
overflow: hidden;
`
const FadeInImageImg = styled.img<{ inView: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    scale: ${({ inView }) => inView ? '1.1' : "1"};
    transform: ${({ inView }) => inView ? 'translateY(0)' : "translateY(100%)"};
    //clip-path: ${({ inView }) => inView ? 'inset(0px 0px 0% 0px)' : "inset(0px 0px 100% 0px)"};
    //-webkit-clip-path: ${({ inView }) => inView ? 'inset(0px 0px 0% 0px)' : "inset(0px 0px 100% 0px)"};
    transition: scale 1s ease-in-out, transform .3s ease-in-out;;
    //clip-path .3s ease-in-out,

    @media (max-width: 600px){
    object-position: 35% 0;
    height: 45svh;
    }
`
interface FadeInImageProps {
    src: string
    withGap?: boolean
}
export const FadeInImage = ({ src, withGap = false }: FadeInImageProps) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 1
    })

    return (
        <FadeInImageContainer withGap={withGap} ref={ref}>
            <FadeInImageBlock inView={inView}>
                <FadeInImageImg inView={inView} src={src} />
            </FadeInImageBlock>
        </FadeInImageContainer>
    )
}