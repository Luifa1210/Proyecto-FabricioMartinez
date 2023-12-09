const Cards = ({ destino }) => {
  // destructurar las propiedades de destino
  const { img, title, text } = destino;

  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={img} alt={text} />
          </div>
          <div className="flip-card-back">
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }

        h4 {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          background-color: rgb(0, 0, 0);
          border-bottom: 3px solid rgb(189, 34, 34);
          color: rgb(189, 34, 34);
          text-align: center;
          padding: 10px;
        }

        p {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 0.85rem;
          text-align: left;
          color: white;
          line-height: 1.4;
          padding: 10px;
        }

        .flip-card {
          width: 250px;
          height: 400px;
        }

        .flip-card-inner {
          position: relative;
          width: 250px;
          height: 400px;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 250px;
          height: 400px;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-card-back {
          background-color: rgb(34, 33, 33);
          transform: rotateY(180deg);
          border: 3px solid rgb(189, 34, 34);
        }
      `}</style>
    </>
  );
};

export default Cards;