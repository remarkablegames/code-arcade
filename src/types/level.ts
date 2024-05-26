export interface Level {
  title: string
  prescript: () => void
  script: string
  postscript: () => void
}
