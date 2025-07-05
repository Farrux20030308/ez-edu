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
  return (
    <>
      {items.map((item, index) => (
        <img
          key={index}
          className={`bg-items ${item.className}`}
          src={item.src}
          alt={item.alt}
        />
      ))}
    </>
  )
}

export default BgItems
