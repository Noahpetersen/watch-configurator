import React, { useEffect } from 'react'
import './StylePicker.css'
import { useSnapshot } from 'valtio'
import state from '../store'
import { wristColors, pointerColors, dialColors } from '../config/constants'
import gsap from 'gsap'

const StylePicker = () => {

  const snap = useSnapshot(state)

  let tl = gsap.timeline()

  useEffect(() => {
    tl.to('.style-picker-container', {
      opacity: 1,
      duration: 1.5,
    })
  }, [])
  

  const onColorChange = (part, color) => {
    switch(part) {
      case "wrist-band":
        state.wristBandColor = color
        break
      case "dial":
        state.dialColor = color
        break
      case "pointer":
        state.pointerColor = color
        break
      default:
        break
    }
  };

  return (
    <section className='style-picker-container'>
      <section className='wrist-band-color'>
        <h3>Wrist-Band Color</h3>
        <section className='color__container'>
          {wristColors.map((color, index) => {
            return (
              <section key={index} className='color__badge' style={{background: color}} onClick={() => {onColorChange("wrist-band", color.color)}}>
                <section className="color" style={{backgroundColor: color.color}}></section>
                <p className='color__name'>{color.name}</p>
              </section>
            )
          })}
        </section>
      </section>
      <section className='wrist-band-color'>
        <h3>Dial Color</h3>
        <section className='color__container'>
          {dialColors.map((color, index) => {
            return (
              <section key={index} className='color__badge' style={{background: color}} onClick={() => {onColorChange("dial", color.color)}}>
                <section className="color" style={{backgroundColor: color.color}}></section>
                <p className='color__name'>{color.name}</p>
              </section>
            )
          })}
        </section>
      </section>
      <section className='wrist-band-color'>
        <h3>Pointer Color</h3>
        <section className='color__container'>
          {pointerColors.map((color, index) => {
            return (
              <section key={index} className='color__badge' style={{background: color}} onClick={() => {onColorChange("pointer", color.color)}}>
                <section className="color" style={{backgroundColor: color.color}}></section>
                <p className='color__name'>{color.name}</p>
              </section>
            )
          })}
        </section>
      </section>
    </section>
  )
}

export default StylePicker