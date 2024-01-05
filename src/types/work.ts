export interface Work {
  id: string
  type: string
  roles: string[]
  title: string
  siteName: string
  overview: string
  client: string
  thumbnailImage: string
  officalUrl: string
  devOutline: string
  comment: string[]
}

export interface Works {
  works: Work[]
}
