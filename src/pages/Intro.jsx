import React, { useEffect } from 'react'
import './Intro.css'
import { useSnapshot } from 'valtio'
import state from '../store/index.js'
import gsap from 'gsap'

const Intro = () => {
    const snap = useSnapshot(state)

    let tl = gsap.timeline()

    useEffect(() => {
        tl.to('.intro__title', {
            clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
            duration: 0.6,
            ease: 'power2.inOut',
            delay: 0.5
        }).to('.intro__title', {
            y: 0, 
            duration: 1, 
            delay: 0.5,
            ease: 'power2.inOut'
        }).to('.intro__slogan', {
            clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
            ease: 'power2.inOut',
            duration: 1
        }).to('.line1', {
            clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
            ease: 'power2.inOut',
            delay: 1
        }).to('.line2', {
            clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
            ease: 'power2.inOut'
        }).to('.intro__btn', {
            opacity: 0.8,
            duration: 0.5,
            ease: 'power2.inOut'
        })
    }, [])



    const onConfigure = () => {
        tl.to('.text', {
            opacity: 0,
            duration: 1,
        }).to('.intro', {
            background: '#C5C4B8',
            opacity: 0,
            duration: 1.5
        }, '-=0.5')

        setInterval(() => {
            state.intro = false
        }, 5000)
        
    }

    return (

        
        <div className='intro'>
            <h1 className='intro__title text'>Aurora Elegance</h1>
            <h2 className='intro__slogan text'>Elegance in Every Second</h2>
            <button className='intro__btn text' onClick={onConfigure}>Configure</button>
            <svg className='line1 text' width="327" height="216" viewBox="0 0 327 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M326.555 214.383C287.822 210.807 286.607 56.09 194.237 84.0866C38.4581 131.302 35.6927 19.0719 0.8235 1.01107" stroke="#808080" strokeWidth="2"/>
            </svg>

            <svg className='line2 text' width="343" height="207" viewBox="0 0 343 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M342.049 201.311C304.421 211.163 217.974 209.49 173.217 123.974C128.46 38.4592 39.3934 6.91869 0.454514 1.83782" stroke="#808080" strokeWidth="2"/>
            </svg>



        </div>
        
    )
}

export default Intro