import baseInstance from './api'

const eventSuffix = '/events'

export const getEvents = async () => {
  try {
    const response = await baseInstance.get(eventSuffix)
    return response
  } catch (error) {
    console.error('Error fetching events:', error.response.data)
  }
}

export const createEvent = async data => {
  try {
    const response = await baseInstance.post(eventSuffix, data)
    return response
  } catch (error) {
    console.error('Error creating event:', error.response.data)
  }
}
