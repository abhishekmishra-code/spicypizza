import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'
import SlideCard from './SlideCard'

const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true }),
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    setIsPlaying(autoScroll.isPlaying())
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])

  return (
    <div className="embla mx-auto">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <SlideCard
              imgSrc={'./images/Inferno Pepperoni.webp'}
              alt={'Inferno Pepperoni'}
              price={399}
              heatLevel={4}
            >
              {
                'Double pepperoni, jalapeños, crushed red pepper flakes and our signature spicy tomato sauce on a hand-tossed crust.'
              }
            </SlideCard>
          </div>
          <div className="embla__slide">
            <SlideCard
              imgSrc={'./images/Buffalo Chicken Blaze.webp'}
              alt={'Buffalo Chicken Blaze'}
              price={299}
              heatLevel={3}
            >
              {
                'Grilled chicken, buffalo sauce, red onions, and blue cheese crumbles with a drizzle of ranch on a thin crust.'
              }
            </SlideCard>
          </div>
          <div className="embla__slide">
            <SlideCard
              imgSrc={'./images/Five Alarm Fire.webp'}
              alt={'Five Alarm Fire'}
              price={499}
              heatLevel={5}
            >
              {
                'Ghost peppers, habaneros, spicy sausage, and our secret fire sauce. Challenge yourself with our hottest offering!                '
              }
            </SlideCard>
          </div>
          <div className="embla__slide">
            <SlideCard
              imgSrc={'./images/Thai Chili Veggie.webp'}
              alt={'Thai Chili Veggie'}
              price={99}
              heatLevel={2}
            >
              {
                'Bell peppers, sweet Thai chili sauce, red onions, mushrooms, and fresh basil on our signature whole grain crust.                '
              }
            </SlideCard>
          </div>
          <div className="embla__slide">
            <SlideCard
              imgSrc={'./images/Smoky Chipotle BBQ.webp'}
              alt={'Smoky Chipotle BBQ'}
              price={129}
              heatLevel={3}
            >
              {
                'Pulled pork, chipotle BBQ sauce, caramelized onions, and smoked gouda cheese on a buttery deep dish crust.                '
              }
            </SlideCard>
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  )
}

export default EmblaCarousel
