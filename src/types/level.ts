export interface Level {
  level: number
  title: string
  prescript: () => void
  script: string
  postscript: () => void
}