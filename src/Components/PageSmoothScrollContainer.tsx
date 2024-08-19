import { PropsWithChildren, useEffect, useRef } from "react"
import { isDesktop } from "react-device-detect";
import  Scrollbar  from "smooth-scrollbar";
import styled from "styled-components";

const ScrollContainer=styled.div`
width: 100%;
height: 100svh;
`
export const PageScrollContainer=({children}: PropsWithChildren)=>{

    const ref =useRef(null);
    
    useEffect(()=>{
        if(ref.current && isDesktop){
            const scrollbar=Scrollbar.init(ref.current, {
                damping: 0.1,
                delegateTo: document,
            })
            
            return () => {
                scrollbar.destroy()
            }
        }
    },[])
    return <ScrollContainer ref={ref}>
        {
            children
        }
    </ScrollContainer>
}