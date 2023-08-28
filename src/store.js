import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  colors: ['#ccc', '#EFBD4E', '#80C670', '#00E0FF', '#353934'],
  Inner: [ '#EFBD4E',  '#00E0FF', '#EF674E', '#353934'],
  Woofer: ['#ccc', '#EFBD4E', '#80C670', '#00E0FF', '#EF674E', '#353934'],
  color: '#D1E2D9',
  inner: '#FFC400',
  woofer: '#000000',
  decal: 'three2'
})

export { state }