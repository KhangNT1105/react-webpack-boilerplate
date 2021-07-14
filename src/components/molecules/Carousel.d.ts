export interface ICarousel {
  images: string[]
  id: string
  slidesPerPage?: number
  className?: string
  activeIndex?: number
  animationDuration?: number
  animationEasingFunction?: string
  animationType?: AnimationType
  autoHeight?: boolean
  autoWidth?: boolean
  autoPlay?: boolean
  autoPlayControls?: boolean
  autoPlayDirection?: AutoplayDirection
  autoPlayInterval?: number
  autoPlayStrategy?: import('./types').AutoPlayStrategy
  children?: undefined
  controlsStrategy?: import('./types').ControlsStrategy
  disableButtonsControls?: boolean
  disableDotsControls?: boolean
  disableSlideInfo?: boolean
  infinite?: boolean
  innerWidth?: number
  items?: undefined
  keyboardNavigation?: boolean
  mouseTracking?: boolean
  name?: string
  paddingLeft?: number
  paddingRight?: number
  responsive?: undefined
  swipeDelta?: number
  swipeExtraPadding?: number
  ssrSilentMode?: boolean
  touchTracking?: boolean
  touchMoveDefaultEvents?: boolean
  onInitialized?: () => undefined
  onResized?: () => undefined
  onResizeEvent?: undefined
  onSlideChange?: () => undefined
  onSlideChanged?: () => undefined
}
