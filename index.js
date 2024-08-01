document.addEventListener('DOMContentLoaded', () => {
    const albumList = document.getElementById('album-list');
    const albumDetails = document.getElementById('album-details');
    const apiUrl = 'https://itunes.apple.com/search?term=radiohead&entity=album&limit=10';
  
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const albums = data.results;
        albums.forEach(album => {
          const listItem = document.createElement('li');
          listItem.textContent = album.collectionName;
          listItem.addEventListener('click', () => displayAlbumDetails(album));
          albumList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  
    
    function displayAlbumDetails(album) {
      albumDetails.innerHTML = `
        <img src="${album.artworkUrl100}" alt="${album.collectionName}">
        <h3>${album.collectionName}</h3>
        <p><strong>Artist:</strong> ${album.artistName}</p>
        <p><strong>Genre:</strong> ${album.primaryGenreName}</p>
        <p><strong>Release Date:</strong> ${new Date(album.releaseDate).toDateString()}</p>
      `;
    }
  });
  