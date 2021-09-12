const formatDate = (date: Date): string => {
  const dateFormatted = new Date(date);
  const day = dateFormatted.getDate().toString().padStart(2, '0')
  const month = (dateFormatted.getMonth() + 1).toString().padStart(2, '0')
  const year = dateFormatted.getFullYear()

  const hour = dateFormatted.getHours()
  const min = dateFormatted.getMinutes()

  return `${day}/${month}/${year} ${hour}h${min}`
};

export default formatDate;