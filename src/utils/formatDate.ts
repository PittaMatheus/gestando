const formatDate = (date: number): string => {
  const dateFormatted = new Date(date);
  const day = dateFormatted.getDate().toString().padStart(2, '0')
  const month = (dateFormatted.getMonth() + 1).toString().padStart(2, '0')
  const year = dateFormatted.getFullYear()
  return `${day}/${month}/${year}`
};

export default formatDate;