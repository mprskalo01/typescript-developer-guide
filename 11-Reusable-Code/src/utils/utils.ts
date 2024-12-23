export const dateStringToDate = (dateString: string) => {
  // 28/10/2018
  const dateParts = dateString
    .split('/')
    .map((part: string): number => parseInt(part));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
