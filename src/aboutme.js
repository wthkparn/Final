import Head from "./Head";

function AboutMe() {
    return (
        <div>
            <Head
                title=" Wethaka Uphata 6101545"
                img={
                    <div
                        style={{
                            position: "absolute",
                            bottom: -150,
                            left: 30,
                            zIndex: 10,
                            border: "2px solid black",
                            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                            borderRadius: "100%",

                        }}
                    >
                        <img
                            src={"/parn.jpg"}
                            style={{
                                width: "300px",
                                borderRadius: "100%",
                            }}
                        />
                    </div>
                }
            />
            <div>
                <div style={{ fontSize: "32px", color: "white", marginLeft: "400px" }}>
                    Date of Birth : 8/9/2000
                </div>
                <div style={{ fontSize: "32px", color: "white", marginLeft: "400px" }}>
                    Hobbies : Watching Movie  <br /> Camping  <br /> Play Mobile Games <br /> Listen To Music
                </div>
                <div style={{ fontSize: "32px", color: "white", marginLeft: "400px" }}>

                </div>
            </div>
        </div>
    );
}

export default AboutMe;
