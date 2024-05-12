import baseInstance from './api'

const postSuffix = '/posts'

export const createPost = async (text, imageUrl) => {
  try {
    const response = await baseInstance.post(`${postSuffix}`, {
      content: {
        text: text,
        imageUrl: imageUrl,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error creating post:', error.response.data)
  }
}
