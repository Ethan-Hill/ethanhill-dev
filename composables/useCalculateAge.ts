export const useCalculateAge = () => {
  let currentDate = new Date();
  let birthDate = new Date("2003/4/1");
  let difference = currentDate.valueOf() - birthDate.valueOf();
  let age = Math.floor(difference / 31557600000);
  return age;
};
