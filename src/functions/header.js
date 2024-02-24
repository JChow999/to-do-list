
function buildHeader() {
  const header = document.createElement('header');

  let webTitle = document.createElement('h1');
  webTitle.innerText = "Your to-do list";

  header.appendChild(webTitle);

  return header
}

export { buildHeader }