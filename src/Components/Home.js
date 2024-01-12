import { useContext } from "react";
import { MainContext } from "./MainContext";
import { Link } from "react-router-dom";
import TheLatest from "./TheLatest";
import LatestStories from "./LatestStories";
import LatestArticles from "./LatestArticles";

const Home = () => {
  const [data] = useContext(MainContext);

  return (
    <>
      <div className="home-container">
        <div className="image-container">
          <div className="image-1">
            {data
              .filter(
                (image) => image.id === "1" && image.category === "Tourism"
              )
              .map((image) => (
                <Link
                  to={`/category/article/${image.id}/${image.category}`}
                  style={{ textDecoration: "none" }}
                  className=""
                >
                  <img src={image.url} className="image-image-1" alt="Kerala" />
                  <div className="image-text">
                    <p className="image-text1">{image.title}</p>
                    <p className="image-text2">
                      {image.category} / {image.date}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
          <div className="image-2">
            {data
              .filter(
                (image) =>
                  image.id === "1" &&
                  (image.category === "Fitness" ||
                    image.category === "Technology")
              )
              .map((image) => (
                <Link
                  to={`/category/article/${image.id}/${image.category}`}
                  style={{ textDecoration: "none" }}
                  className=""
                >
                  <img src={image.url} className="image-image-2" alt="" />
                </Link>
              ))}
          </div>
        </div>

        <TheLatest />
        <LatestArticles />
        <LatestStories />
      </div>
    </>
  );
};

export default Home;
