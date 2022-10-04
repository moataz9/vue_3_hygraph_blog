import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export const getHomePosts = async () => {
  const query = gql`
    query getPosts {
      postsConnection {
        edges {
          node {
            id
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `
  return useQuery(query)
}

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        id
        name
        slug
      }
    }
  `
  return useQuery(query)
}

export const getSimilarPosts = async (categoriesNames?: string[], slug?: string) => {
  const query = gql`
    query getSimilarPosts($slug: String!, $categories: [String!]) {
      posts(where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }, last: 3) {
        id
        title
        createdAt
        slug
        featuredImage {
          url
        }
      }
    }
  `
  return useQuery(query, { categories: categoriesNames, slug })
}

export const getRecentPosts = async () => {
  const query = gql`
    query getRecentPosts {
      posts(orderBy: createdAt_ASC, last: 3) {
        id
        title
        slug
        createdAt
        featuredImage {
          url
        }
      }
    } 
  `
  return useQuery(query)
}
