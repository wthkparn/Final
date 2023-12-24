import { Link } from "react-router-dom";

function Head(props) {
    const { title, img } = props;
    return (
        <div style={{ position: "relative" }}>
            {img}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    bottom: 50,
                    left: 400,
                }}
            >
                <div>
                    <div style={{ fontSize: "56px", color: "white" }}>{title}</div>
                </div>
            </div>
            <Link to="/">
                <button style={{ position: "absolute", bottom: -40, right: 250 }}>
                    Home
                </button>
            </Link>
            <Link to="/about-me">
                <button style={{ position: "absolute", bottom: -40, right: 100 }}>
                    My profile
                </button>
            </Link>
            <img alt=""
                src={"./top.webp"}
                style={{
                    width: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    );
}

export default Head;
