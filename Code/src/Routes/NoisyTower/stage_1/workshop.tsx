import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToInventory, hasItemInInventory, isWoodTaken, transformWood, isWoodTransformed, setAreFurnitureNeededGS, setHasTalkedToWorkshopPNJ } from "../../../Game/gameState.ts";
import atelierImg from "../../../assets/img/atelier.png";
import atelierThermostatImg from "../../../assets/img/atelier_thermostat.png";
import pnj from "../../../assets/img/pnj.png";

export default function Workshop() {
    const [isThermostatTaken, setIsThermostatTaken] = useState(hasItemInInventory(1));
    const [woodTransformed, setWoodTransformed] = useState(isWoodTransformed());
    const [uraniumFetched] = useState(hasItemInInventory(2));
    const navigate = useNavigate();

    function handleTakeThermostat() {
        addToInventory({ id: 1, name: "Thermostat", usable:true });
        setIsThermostatTaken(true);
    }

    function handleTransformWood() {
        if (isWoodTaken()) {
            transformWood();
            setWoodTransformed(true);
            setAreFurnitureNeededGS(true);
            alert("Parfait ! Plus qu'à placer les meubles dans la chambre !");
        } else {
            alert("Vous n'avez pas de bois !");
        }
    }


    function handleGiveUranium() {
        if (uraniumFetched) {
            navigate("/nuclear_ban");
        } else {
            alert("Vous n'avez pas encore d'uranium !");
        }
    }

    function handleGoBack() {
        navigate("/noisy_stage_one");
    }

    function handlePNJClick() {
        if (!uraniumFetched) {
            alert("Vous devriez aller chercher de l'uranium dans le laboratoire !");
            setHasTalkedToWorkshopPNJ(true); // Marque que le joueur a parlé au PNJ
        } else {
            alert("Merci pour l'uranium ! Nous allons créer un mini-réacteur.");
        }
    }

    return (
        <>
        <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
            <img
                src={isThermostatTaken ? atelierImg : atelierThermostatImg}
                alt={isThermostatTaken ? "Atelier" : "Atelier avec thermostat"}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                    src={pnj}
                    alt="PNJ"
                    style={{
                        cursor: "pointer",
                        position: "absolute",
                        bottom: "20%",
                        left: "10%",
                        height: "30%",
                        zIndex: 1000,
                    }}
                    onClick={handlePNJClick}
                />
            {!isThermostatTaken && (
                <button
                    onClick={handleTakeThermostat}
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "10%",
                        transform: "translateY(-50%)",
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Prendre le thermostat
                </button>
            )}
            {!woodTransformed && isWoodTaken() && (
                <button
                    onClick={handleTransformWood}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Transformer le bois
                </button>
            )}
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
                {uraniumFetched && (
                    <button
                        onClick={handleGiveUranium}
                        style={{
                            position: "absolute",
                            bottom: "10%",
                            left: "10%",
                            padding: "10px 20px",
                            backgroundColor: "#DC3545",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Donner l'uranium
                    </button>
                )}
        </div>
        </>
    );
}