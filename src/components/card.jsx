import { memo, useState } from "react";

function Card({ props, type, removeCard }) {
  const [showCard, setShowCard] = useState(true);
  const [readMore, setReadMore] = useState(false);

  let description = readMore
    ? props.description
    : `${props.description?.substr(0, 150)}`;
  let comicLink = props.urls.find(
    (element) => element.type === "comiclink"
  )?.url;
  // console.log(props.id);

  if (type === "characters")
    return (
      <>
        {showCard ? (
          <div className="card">
            <img
              src={
                props.thumbnail.path +
                "/standard_fantastic." +
                props.thumbnail.extension
              }
              alt=""
            />

            <button className="close-btn" onClick={() => setShowCard(false)}>
              <h2>X</h2>
            </button>

            <h2>{props.name}</h2>
            <p>
              {description && (
                <>
                  <i>
                    {description}
                    {readMore ? "" : "... "}
                  </i>
                  <span
                    className="read-more"
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? `Show less` : `Read more`}
                  </span>
                </>
              )}
            </p>
            <p>
              Comics :
              <a href={comicLink} target="_blank">
                click here!
              </a>
            </p>
          </div>
        ) : (
          <div className="card card-cover">
            <button onClick={() => removeCard(props.id)}>Confirm delete</button>
            <button onClick={() => setShowCard(true)}>Recover</button>
          </div>
        )}
      </>
    );

  if (type === "comics")
    return (
      <>
        {showCard ? (
          <div className="card">
            <img
              src={
                props.thumbnail.path +
                "/portrait_uncanny." +
                props.thumbnail.extension
              }
              alt=""
            />

            <button className="close-btn" onClick={() => setShowCard(false)}>
              <h2>X</h2>
            </button>

            <h2>{props.title}</h2>
            <p>
              {description && (
                <>
                  <i>
                    {description}
                    {readMore ? "" : "... "}
                  </i>
                  <span
                    className="read-more"
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? `Show less` : `Read more`}
                  </span>
                </>
              )}
            </p>
            <p>
              Read here :
              <a href={props.urls[0].url} target="_blank">
                click here!
              </a>
            </p>
          </div>
        ) : (
          <div className="card card-cover">
            <button onClick={() => removeCard(props.id)}>Confirm delete</button>
            <button onClick={() => setShowCard(true)}>Recover</button>
          </div>
        )}
      </>
    );
}

export default memo(Card);
