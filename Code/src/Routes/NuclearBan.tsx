import { useNavigate } from "react-router-dom";

export default function NuclearBan() {
    const navigate = useNavigate();

    function handleGoBack() {
        navigate("/");
    }

    return (
        <div style={{position:"absolute", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign: "center", padding: "20px", marginLeft:"21%", top:"35%" }}>
            <h1>🚫 Nucléaire Interdit !</h1>
            <p>
                L'utilisation de matériaux nucléaires est strictement interdite en Antarctique.
                La base a reçu une amende de 400 millions d'euros pour cette infraction.
            </p>
            <button
                onClick={handleGoBack}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    width: "200px",
                }}
            >
                Retour à l'accueil
            </button>
        </div>
    );
}