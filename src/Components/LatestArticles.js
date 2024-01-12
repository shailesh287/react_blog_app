import { useContext } from "react";
import { MainContext } from "./MainContext";
import { Link } from "react-router-dom";

const LatestArticles = () => {
  const [data] = useContext(MainContext);

  return (
    <>
      <div className="latest-article-container">
        <h2 className="latest-articles-heading">Latest Articles</h2>
        <div className="articles-division">
          <div className="article-bar">
            {data
              .filter(
                (latestArticle) =>
                  latestArticle.id === "5" &&
                  (latestArticle.category === "Tourism" ||
                    latestArticle.category === "Food" ||
                    latestArticle.category === "Technology" ||
                    latestArticle.category === "Bollywood" ||
                    latestArticle.category === "Fitness")
              )
              .map((article) => (
                <div>
                  <hr className="article-horizontal-line" />
                  <Link
                    to={`/category/article/${article.id}/${article.category}`}
                    style={{ textDecoration: "none" }}
                    className="latest-articles"
                  >
                    <img
                      src={article.url}
                      className="latest-articles-image"
                      alt=""
                    />
                    <div className="latest-article-details">
                      <h4 className="latest-article-heading">
                        {article.title}
                      </h4>
                      <p className="latest-article-body">{article.body}</p>
                      <p>
                        <span className="latest-article-category">
                          {article.category}
                        </span>{" "}
                        / {article.date}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          <div className="top-post">
            <div className="top-post-heading">Top Posts</div>
            {data
              .filter(
                (latestArticle) =>
                  latestArticle.id === "2" &&
                  (latestArticle.category === "Tourism" ||
                    latestArticle.category === "Food" ||
                    latestArticle.category === "Technology" ||
                    latestArticle.category === "Bollywood" ||
                    latestArticle.category === "Fitness")
              )
              .map((article) => (
                <>
                  <Link
                    to={`/category/article/${article.id}/${article.category}`}
                    style={{ textDecoration: "none" }}
                    className="top-post-container"
                  >
                    <img src={article.url} className="top-post-image" alt="" />
                    <div className="top-post-content">
                      <h4 className="top-post-title">{article.title}</h4>
                      <p>
                        <span className="top-post-category">
                          {article.category}
                        </span>{" "}
                        / {article.date}
                      </p>
                    </div>
                  </Link>
                  <hr className="top-post-horizontal-line" />
                </>
              ))}
            <div className="top-post-advertisement">Advertisement</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestArticles;
