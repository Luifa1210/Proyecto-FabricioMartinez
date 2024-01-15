import CardsContainer from "./CardsContainer";

const Section = () => {
  return (
    <>
      <section className="comics">
        <h2>Comics de spiderman</h2>
        <CardsContainer />
      </section>

      <style jsx>{`
        .comics {
          margin: 60px;
        }

        h2 {
          color: rgb(189, 34, 34);
          font-family: homoarak;
          font-weight: bold;
          margin: 20px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Section;
