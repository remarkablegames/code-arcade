export interface Level {
  title: string
  beforeScript: () => void
  script: string
  afterScript: () => void
}
