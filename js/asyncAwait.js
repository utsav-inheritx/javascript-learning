const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data received');
    }, 3000);
  });
};

const getData = async () => {
  const data = await fetchData();
  console.log(data);
};

getData();
