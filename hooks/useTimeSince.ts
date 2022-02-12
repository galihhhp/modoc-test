const timeSince = (date) => {
  const seconds = Math.floor((new Date().getTime() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1)
    return Math.floor(interval) + " tahun yang lalu";
  interval = seconds / 2592000;
  if (interval > 1)
    return Math.floor(interval) + " bulan yang lalu";
  interval = seconds / 604800
  if (interval > 1)
    return Math.floor(interval) + " minggu yang lalu";
  interval = seconds / 86400;
  if (interval > 1)
    return Math.floor(interval) + " hari yang lalu";
  interval = seconds / 3600;
  if (interval > 1)
    return Math.floor(interval) + " jam yang lalu";
  interval = seconds / 60;
  if (interval > 1)
    return Math.floor(interval) + " menit yang lalu";

  return Math.floor(seconds) + " detik yang lalu";
}

export default timeSince;