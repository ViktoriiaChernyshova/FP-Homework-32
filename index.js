function getHtml(array, index = "") {
    const html = array.reduce((acc, element, i) => {
      if (Array.isArray(element)) {
        acc += `<li>${getHtml(element, `${index}${i + 1}.`)}</li>`;
      } else {
        acc += `<li>${index}${i + 1}</li>`;
      }
      return acc;
    }, "");
    return `<ul>${html}</ul>`;
  }
  
  function generateList(array) {
    document.body.innerHTML = getHtml(array);
  }
  generateList([1, 2, [1, [1, 2, 3], 3], 3, [1, 2, 3]]);