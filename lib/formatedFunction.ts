export const formatPrice = (price: number) => {
  const formatPrice = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return formatPrice.format(price);
};

export const convertToWIB = (isoString: string | Date) => {
  const date = new Date(isoString);
  const time = date.toLocaleString("id-ID", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return `${time} WIB`;
};

export const timeDifference = (
  startTime: string | Date,
  endTime: string | Date
) => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  const differenceInMs = end.getTime() - start.getTime();

  const hours = Math.floor(differenceInMs / (1000 * 60 * 60));

  return `${hours} jam`;
};
