import Head from "./Head";
export const HomeComponent = () => {
  return (
    <div>
      <Head
        title="STAINLESS"
        img={
          <div
            style={{
              backgroundColor: "white",
              position: "absolute",
              bottom: -150,
              left: 30,
              zIndex: 10,
              width: "150px",
              padding: "0 100px",
              borderRadius: "100%",
              border: "2px solid black",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}
          >
            <img
              src={"./SRlogo.png"}
              style={{
                width: "100%",
              }}
            />
          </div>
        }
      />
      <div style={{ textAlign: "center", paddingTop: "3%" }}>
        {<img src={"./main.jpg"} style={{}} />}
      </div>
    </div>
  );
};
