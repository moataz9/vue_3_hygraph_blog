export type author = {
  bio: string
  id: string
  name: string
  photo: photo
}
export type photo = {
  url: string
}
export type category = {
  name: string
  slug: string
}

export type content = {
  raw: {
    children: children[]
  }
}

export type children = {
  type?: string
  code?: boolean
  text: string[]
  children?: children[]
}

export type comment = {
  name: string
  createdAt: string
  comment: string
}

export type post = {
  id: string
  author: author
  excerpt: string
  createdAt: string
  slug: string
  title: string
  excerpt: string
  photo: photo
  featuredImage: photo
  categories: category[]
  node?: post
  content?: content
}
