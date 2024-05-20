import React, { useEffect, useState } from 'react'
import { formatDate } from '../../utils/dateFormatter'
import { IoLocationOutline } from 'react-icons/io5'
import { getEvents } from '../../api/events'

const EventsSection = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents()
      if (response.status === 200) {
        setEvents(response.data)
      }
    }

    fetchEvents()
  })

  return (
    <div>
      <h2 className='text-xl font-bold mb-4'>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <div
            key={event._id}
            className='p-4 bg-background flex-col rounded-lg items-center mb-4'
          >
            <p className='font-semibold text-gray text-sm mb-1'>
              {formatDate(event.date)}
            </p>
            <h3 className='text-lg font-bold mb-1'>{event.title}</h3>
            <div className='flex items-center space-x-1'>
              <IoLocationOutline className='text-lg' />
              <p>{event.location}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default EventsSection
