import Image from "next/image";

const Fondo = () => {
  return (
    <section>
      <div
        style={{
          zIndex: -1,
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src="/spider-man.jpg"
          alt="Spider-Man"
          layout="fill"
          objectFit="fill"
        />
      </div>
    </section>
  );
};

export default Fondo;
