import React, { PropsWithChildren } from 'react'
import { useInView } from 'react-intersection-observer'
import { styled, css } from 'styled-components'

interface FadeInProps {
    inView: boolean
}
//Общий стиль появления для элементов 
const FadeInStyle = css<FadeInProps>`
    opacity: ${({ inView }) => (inView ? '1' : '0')};
    transform: ${({ inView }) => (!inView ? 'translateY(4svh)' : 'none')};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
`
const FadeInDiv = styled.div<FadeInProps>`
    ${FadeInStyle}
`
//Появляющийся заголовок
const FadeInH1 = styled.h1<FadeInProps>`
    ${FadeInStyle}
`
const FadeInImg = styled.img<FadeInProps>`
    ${FadeInStyle}
`

const FadeInA = styled.a<FadeInProps>`
    ${FadeInStyle}
`
const values: Record<string, any> = {
    'img': FadeInImg,
    'h1': FadeInH1,
    'div': FadeInDiv,
    'a': FadeInA
}

interface FadeInComponentProps {
    threshold: number;
    type: string,
    [key: string]: any
}
function FadeInComponent({ children, threshold, type, ...rest }: PropsWithChildren<FadeInComponentProps>) {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: threshold
    })

    const Element = values[type]

    return (
        <Element inView={inView} ref={ref} {...rest}>
            {children}
        </Element>
    )
}

export default FadeInComponent