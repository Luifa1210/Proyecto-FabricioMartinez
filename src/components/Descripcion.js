const Descripcion = () => {
  return (
    <>
      <div>
        <h1>Spider-Man</h1>
        <p>
          Peter Parker es un adolescente como otro cualquiera. Vive con su tía
          May y su tío Ben, va al instituto y le encantan las clases de
          ciencias. Sin embargo, todo cambia el día que, durante una excursión
          del insituto a un laboratorio, ¡Peter es mordido por una araña
          radioactiva y se convierte en Spider-Man!
        </p>
      </div>

      <style jsx>{`
        div {
          width: 430px;
          position: absolute;
          padding-top: 270px;
          margin-left: 15px;
        }

        h1 {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          color: white;
          font-size: 42px;
          margin-bottom: 10px;
        }

        p {
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          color: White;
          font-size: 14px;
          margin-left: 16px;
          line-height: 20px;
        }
      `}</style>
    </>
  );
};

export default Descripcion;
