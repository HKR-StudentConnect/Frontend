export const formatDate = dateString => {
  const date = new Date(dateString)

  const options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }

  return new Intl.DateTimeFormat('en-SE', options).format(date)
}
