import {} from '@material-tailwind/react'
import React, { useState } from 'react'

const Banner = () => {
  const items = [
    {
      src: 'https://picsum.photos/id/123/1200/400',
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1
    },
    {
      src: 'https://picsum.photos/id/456/1200/400',
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2
    },
    {
      src: 'https://picsum.photos/id/678/1200/400',
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3
    }
  ]
  // function Banner(args) {
  //   const [activeIndex, setActiveIndex] = useState(0)
  //   const [animating, setAnimating] = useState(false)

  //   const next = () => {
  //     if (animating) return
  //     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
  //     setActiveIndex(nextIndex)
  //   }

  //   const previous = () => {
  //     if (animating) return
  //     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
  //     setActiveIndex(nextIndex)
  //   }

  //   const goToIndex = (newIndex) => {
  //     if (animating) return
  //     setActiveIndex(nextIndex)
  //   }

  //   const slides = items.map((item) =>{
  //     return (
  //       Carou
  //     )
  //   })
  // }
  return <div>Banner</div>
}

export default Banner
