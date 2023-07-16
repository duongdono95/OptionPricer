export const numDataConverter = (data:  number | undefined) => {

  if (typeof data === 'number') {
    const formattedData = Number(data.toFixed(3))
    return formattedData
  }

}