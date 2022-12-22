declare module '*.png'
declare module '*.svg'
declare module '*.scss' {
  const styles: { [className: string]: string }
  export default styles
}
