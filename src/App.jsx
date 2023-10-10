import { useEffect, useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [imgs, setImgs] = useState([]);
  const [loadImg, setLoadimg] = useState(1);

  useEffect(() => {
    const api = "https://picsum.photos/v2/list?page=2&limit=40";
    const fetchImages = async () => {
      const response = await fetch(api);
      const respJson = await response.json();
      console.log(respJson);
      setImgs((preVal) => [...preVal, ...respJson]);
    };
    fetchImages();
  }, [loadImg]);

  const loadImages = () => {
    setLoadimg((preImg) => preImg + 1);
  };

  return (
    <>
      <div className="container">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="/img.png"
                width="80"
                height="80"
                className="d-inline-block align-text-top"
              />
              <span className=" fs-1 position-absolute top-50 start-50 translate-middle">IMAGE GALLERY</span>
             {/* <h1 className="d-inline-block align-text-top ">IMAGE GALLERY</h1> */}
            </a>
          </div>
        </nav>
        <div className="row">
          {imgs.map((image, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                <img src={image.download_url} className="img-fluid" />
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button className="btn btn-success" onClick={loadImages}>
            Load More Images
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
