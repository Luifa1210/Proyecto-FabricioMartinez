import Cards from "./Cards";

const destinos = [
  {
    id: 1,
    img: "https://i1.whakoom.com/large/18/36/5366994b1ec04efeb7ba87eddb39bae1.jpg",
    title: "¡Poder y responsabilidad!",
    text: "¡Aquí comienza! El primer Omnigold de los dos que recopilarán el Spiderman original y definitivo: el creado por Stan Lee y Steve Ditko. Desde el nacimiento del trepamuros hasta sus momentos más trascendentales, mientras se cruza en el camino de sus peores enemigos. ",
  },

  {
    id: 2,
    img: "https://i1.whakoom.com/large/16/06/2d8bd3190d0540c8bc031082a2807ff3.jpg",
    title: "¡Si éste es mi destino...!",
    text: "El segundo Omnigold de los dos que recopilarán el Spiderman original y definitivo: el creado por Stan Lee y Steve Ditko. Contempla al equipo que creó al Hombre Araña en su momento de mayor esplendor, con las sagas que definen al mejor personaje de ficción jamás creado.",
  },

  {
    id: 3,
    img: "https://i1.whakoom.com/large/07/2f/ac277071da1e4342955881319e599e95.jpg",
    title: "Días de gloria",
    text: "La llegada de John Romita a la colección de Spiderman supuso una verdadera revolución para el trepamuros. Junto a los ingeniosos guiones de Stan Lee, el maravilloso dibujo de Romita lanzó al Hombre Araña a una época memorable, en la que los más implacables enemigos se entrecruzan con la accidentada vida privada de Peter Parker. Comedia, drama, romance, acción... Todo está aquí, en los cómics con los que Spiderman se convirtió en el más popular personaje.",
  },

  {
    id: 4,
    img: "https://i1.whakoom.com/large/13/1d/00f8faf8a23a492fba6be273cbd48884.jpg",
    title: "¡Crisis en el campus!",
    text: "¡Continúa la recopilación de la mítica etapa de Stan Lee y John Romita, después del fabuloso Marvel Gold. Spiderman: Días de gloria. A finales de los años sesenta, algo estaba cambiando en el corazón de Estados Unidos y el trepamuros fue testigo de esa revolución, mientras vivía algunas de sus más fabulosas aventuras. Este tomo contiene el regreso de Kingpin, Mysterio o El Buitre, la historia sobre los padres de Peter.",
  },

  {
    id: 5,
    img: "https://i1.whakoom.com/large/04/25/e7d6c4a6f01543ca91215c251bfc54cf.jpg",
    title: "¡Por fin desenmascarado!",
    text: "¡Llega un nuevo Omnigold dedicado a recopilar la época dorada del Hombre Araña! Un volumen extraordinario plagada de historias inolvidables.",
  },

  {
    id: 6,
    img: "https://i1.whakoom.com/large/38/28/3a6d211fb2014849a9c864cebb5d803f.jpg",
    title: "¡La muerte de Gwen Stacy!",
    text: "¡El más dramático suceso en la vida del Hombre Araña! En 1972, un joven de diecinueve años llamado Gerry Conway se convirtió en el sucesor de Stan Lee, el genio que había dado vida al trepamuros. Junto a John Romita, devolvió al trepamuros a sus esencias, pero hizo mucho más: convencido de que la novia del héroe suponía una rémora para éste, se deshizo de la adorable Gwen Stacy.",
  },

  {
    id: 7,
    img: "https://i1.whakoom.com/large/15/03/84776ec03fcb4a279acfa74f1709b9d4.jpg",
    title: "La saga del clon",
    text: "El fin de la mítica etapa de Gerry Conway. Después de la muerte de Gwen Stacy, el guionista del trepamuros recibió el encargo de traerla de vuelta. Lo hizo de la más inusual manera: a través de un clon, capaz de volver del revés la vida de Peter Parker.",
  },

  {
    id: 8,
    img: "https://i1.whakoom.com/large/3a/04/e9ebdd0ba3334e25a027562d390858d0.jpg",
    title: "Escaramuza bajo las calles",
    text: "La etapa completa de Len Wein como guionista de El Asombroso Spiderman. La resurrección del Doctor Octopus y Cabeza de Martillo, la vuelta del Spider-Móvil, el nacimiento de un nuevo Duende Verde, y mucho más, en una etapa a reivindicar.",
  },

];

const CardsContainer = () => {
  return (
    <>
      <div>
        {/* key se crea uno por cada elemento del map */}
        {destinos.map((destino, index) => (
          <Cards key={index} destino={destino} />
        ))}
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-around;
        }
      `}</style>
    </>
  );
};

export default CardsContainer;
