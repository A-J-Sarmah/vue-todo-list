export const getTodos = () => {
  const data = [];
  if (localStorage.length === 0) {
    return data;
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      data.push(JSON.parse(localStorage.getItem(i)));
    }
  }
  return data;
};
