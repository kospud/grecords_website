import React, { useContext } from 'react'
import styled from 'styled-components'
import { GradientContext } from '../Providers/GradientProvider'


const GradientContaner = styled.div`
    position: fixed;
    height: 100svh;
    width: 100%;
    z-index: 0;
    filter: blur(20px);
    -webkit-filter: blur(20px);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
`

const Gradient1 = styled.div`
width: 100%;
height: 100%;
position: absolute;

&::after{
        content:'';
        position: absolute;
        width: 150%;
        height: 150%;
        top: -50%;
        left: -50%;
        background: radial-gradient(circle, rgba(248, 87, 14, 1) 0%, rgba(247,0,0,0) 50%);
        animation: first 10s linear infinite;
        overflow: visible;
        will-change: transform;
    }

    &::before{
        content:'';
        position: absolute;
        width: 150%;
        height: 150%;
        top: -50%;
        left: -50%;
        background: radial-gradient(circle, rgba(179, 10, 36, 1) 0%, rgba(247,0,0,0) 50%);
        animation: second 10s linear infinite;
        overflow: visible;
        will-change: transform;
    }

    @keyframes first{
        0% { transform: translate(-10%, -10%); }

      25% { transform: translate(10%, 20%); }

      50% { transform: translate(20%, 40%); }

      75% { transform: translate(10%, 20%); }

      100% { transform: translate(-10%, -10%); }
    }

    @keyframes second{
        0% { transform: translate(40%, 20%); }

        25% { transform: translate(30%, 30%); }

        50% { transform: translate(20%, 20%); }

        75% { transform: translate(30%, -10%); }

        100% { transform: translate(40%, 20%); }
            }
`

const Gradient2 = styled.div`
width: 100%;
height: 100%;
position: absolute;

&::after{
        content:'';
        position: absolute;
        width: 150%;
        height: 150%;
        top: -10%;
        left: -10%;
        background: radial-gradient(circle, rgba(52, 12, 32, 1) 0%, rgba(247,0,0,0) 60%);
        animation: move5 10s linear infinite;
        overflow: visible;
       // z-index: 1;
       will-change: transform;
    }

    &::before{
        content:'';
        position: absolute;
        width: 150%;
        height: 150%;
        top: -30%;
        left: -30%;
        background: radial-gradient(circle, rgba(18, 22, 58, 1) 0%, rgba(247,0,0,0) 50%);
        animation: move4 10s linear infinite;
        overflow: visible;
        z-index: 1;
        
    }

    @keyframes move4{
        0% { transform: translate(30%, 0%); }

      25% { transform: translate(25%, 20%); }

      50% { transform: translate(10%, 40%); }

      75% { transform: translate(20%, 20%); }

      100% { transform: translate(30%, 0%); }
    }

    @keyframes move5{
        0% { transform: translate(-30%, 30%); }

        25% { transform: translate(-30%, -10%); }

        50% { transform: translate(30%, -60%); }

        75% { transform: translate(5%, -10%); }

        100% { transform: translate(-30%, 30%); }
            }
`

const Gradient3 = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    &::after{
            content:'';
            position: absolute;
            width: 150%;
            height: 150%;
            top: -40%;
            left: -60%;
            background: radial-gradient(circle, rgba(239, 11, 27, 1) 0%, rgba(247,0,0,0) 50%);
            animation: move6 10s linear infinite;
            overflow: visible;
            
        }

    @keyframes move6{
        0% { transform: translate(10%, 10%); }

        25% { transform: translate(10%, 0%); }

        50% { transform: translate(0, -10&); }

        75% { transform: translate(20%, 0%); }

        100% { transform: translate(10%, 10%); }
    }
`
function Gradient() {

    const {isVisible}=useContext(GradientContext)!

    return isVisible && <GradientContaner>
            <Gradient1>
                <Gradient2>
                    <Gradient3>

                    </Gradient3>
                </Gradient2>
            </Gradient1>
        </GradientContaner>
    
}

export default Gradient