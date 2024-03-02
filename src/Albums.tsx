import logo from "./logo.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function Albums() {
  const [albums, setAlbums] = useState<Photo[][]>([]);
  const [popupPhotos, setPopupPhotos] = useState<Photo[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(`${PHOTOS_URL}`);
      const photos = (await response.json()) as Photo[];

      const groupedPhotos: { [albumId: number]: Photo[] } = {};
      photos.forEach((photo) => {
        if (!groupedPhotos[photo.albumId]) {
          groupedPhotos[photo.albumId] = [];
        }
        groupedPhotos[photo.albumId].push(photo);
      });

      const result: Photo[][] = [];
      for (const albumId in groupedPhotos) {
        const albumPhotos = groupedPhotos[albumId];
        const randomSliceSize = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
        const slicedPhotos = albumPhotos.slice(0, randomSliceSize);
        result.push(slicedPhotos);
      }

      setAlbums(result);
    };

    fetchPhotos();
  }, []);

  const handleShowImages = (albumPhotos: Photo[]) => {
    setPopupPhotos(albumPhotos);
    setShowPopup(true);
  };

  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Photo Album App</h1>
        <Link className="App-link" to="/">
          Back To Home Page
        </Link>
      </header>
      <div className="App-albums-container">
        {albums.map((album, index) => (
          <div key={index} className="App-card">
            <p>Album {index + 1}</p>
            <button onClick={() => handleShowImages(album)}>
              Click to see all images
            </button>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="App-popup">
          <button onClick={() => setShowPopup(false)}>Close</button>
          <div className="App-popup-content">
            {popupPhotos.map((photo) => (
              <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Albums;
