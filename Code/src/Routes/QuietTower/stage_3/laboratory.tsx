import labo from "../../../assets/img/labo.png";
import { useNavigate } from "react-router-dom";
import { addToInventory, hasTalkedToWorkshopPNJ } from "../../../Game/gameState.ts";

export default function Laboratory() {
    const navigate = useNavigate();

    function handleFetchUranium() {
        if (!hasTalkedToWorkshopPNJ()) {
            alert("Vous ne savez pas pourquoi vous auriez besoin d'uranium. Parlez au PNJ dans l'atelier d'abord !");
            return;
        }
        addToInventory({ id: 2, name: "Uranium", usable: false }); // Uranium ID: 2
        alert("Vous avez récupéré de l'uranium !");
    }

    function handleGoBack() {
        navigate("/quiet_stage_three");
    }

    return (
        <>
            <button
                onClick={handleGoBack}
                style={{
                    position: "absolute",
                    top: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "10px 20px",
                    backgroundColor: "#28A745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Retour
            </button>
            <button
                onClick={handleFetchUranium}
                style={{
                    position: "absolute",
                    bottom: "10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "10px 20px",
                    backgroundColor: "#FFC107",
                    color: "#000",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Récupérer de l'uranium
            </button>
            <img src={labo} alt="labo" />
        </>
    );
}