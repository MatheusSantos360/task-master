export const generateID = () => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 10000);
  return timestamp * 10000 + randomNum;
}
