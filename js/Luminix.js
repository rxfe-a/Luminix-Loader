
function Luminix() {
    fetch('./js/links/luminix_links.txt')
    .then(response => response.text())
    .then(data => {
      const linksArray = data.trim().split('\n');
      const randomIndex = Math.floor(Math.random() * linksArray.length);
      const randomLink = linksArray[randomIndex];
      window.location.href = './redirect.html#' + randomLink
    })
    .catch(error => {
      console.error('Error fetching links file:', error);
    });
}