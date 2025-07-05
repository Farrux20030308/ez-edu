import { useEffect, useRef } from 'react'
import './BgItems.css'

import microscope from '../../assets/img/microscope.png'
import abc from '../../assets/img/abc.png'
import aplus from '../../assets/img/aplus.png'
import backpacks from '../../assets/img/backpacks.png'
import e from '../../assets/img/e.png'
import globus from '../../assets/img/globus.png'
import lamp from '../../assets/img/lamp.png'
import notebook from '../../assets/img/notebook.png'
import pen from '../../assets/img/pen.png'
import pencil from '../../assets/img/pencil.png'
import rocket from '../../assets/img/rocket.png'
import ruler from '../../assets/img/ruler.png'

const items = [
  { className: 'microscope', src: microscope, alt: 'microscope' },
  { className: 'abc', src: abc, alt: 'abc' },
  { className: 'aplus', src: aplus, alt: 'aplus' },
  { className: 'backpacks', src: backpacks, alt: 'backpacks' },
  { className: 'e-item', src: e, alt: 'e' },
  { className: 'globus', src: globus, alt: 'globus' },
  { className: 'lamp', src: lamp, alt: 'lamp' },
  { className: 'notebook', src: notebook, alt: 'notebook' },
  { className: 'pen', src: pen, alt: 'pen' },
  { className: 'pencil', src: pencil, alt: 'pencil' },
  { className: 'rocket', src: rocket, alt: 'rocket' },
  { className: 'ruler', src: ruler, alt: 'ruler' },
]

const BgItems = () => {
  const refs = useRef([])

  useEffect(() => {
    const multipliers = items.map((_, index) => 0.08 + (index % 5) * 0.03)
    const positions = []

    const updatePositions = () => {
      positions.length = 0
      refs.current.forEach((el) => {
        if (el) {
          const offsetTop = el.offsetTop
          const height = el.offsetHeight
          const maxOffset = document.body.scrollHeight - (offsetTop + height)
          positions.push({ offsetTop, height, maxOffset })
        }
      })
    }

    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom > 0
    }

    const handleScroll = () => {
      const scrollY = window.scrollY

      refs.current.forEach((el, index) => {
        if (el && positions[index] && isInViewport(el)) {
          const multiplier = multipliers[index]
          const offset = Math.min(scrollY * multiplier, positions[index].maxOffset)
          el.style.transform = `translateY(${offset}px)`
        }
      })
    }

    updatePositions()
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', updatePositions)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updatePositions)
    }
  }, [])

  return (
    <>
      {items.map((item, index) => (
        <img
          key={index}
          ref={(el) => (refs.current[index] = el)}
          className={`bg-items ${item.className}`}
          src={item.src}
          alt={item.alt}
          style={{
            transform: 'translateY(0)',
            transition: 'transform 0.1s linear',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  )
}

export default BgItems
