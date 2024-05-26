import kaboom from 'kaboom'

export function initKaboom() {
  kaboom({
    width: 600,
    height: 600,
    canvas: document.querySelector('canvas')!,
  })
}
