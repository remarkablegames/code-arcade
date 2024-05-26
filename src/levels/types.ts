export interface Level {
  beforeScript: () => void
  script: string
  afterScript: () => void
}
