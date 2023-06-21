import React, { useState, useRef, useEffect } from "react";
import Chevron from "../Chevron/Chevron";
import "../DropDown/DropDown.scss"

function Dropdown({title, content}) {
    const [Active, setActiveState] = useState("");
    const [Height, setHeightState] = useState("0px");
    const [Rotate, setRotateState] = useState("dropdown_icon");

    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setHeightState(`${contentRef.current.scrollHeight}px`);
        }
    }, [contentRef]);

    function toggleDropdown() {
        setActiveState(Active === "" ? "active" : "");
        setHeightState(Active === "active" ? "0px" : `${contentRef.current.scrollHeight}px`);
        setRotateState(Active === "active" ? "dropdown_icon" : "dropdown_icon rotate");
    }

    useEffect(() => {
        setHeightState("0px"); // Réinitialise la hauteur à 0px par défaut lors du chargement de la page
    }, []); // Utilise une dépendance vide pour exécuter cette action une seule fois lors du montage initial

    return (
        <div className="dropdown_section">
            <button className={`dropdown_section_toggle ${Active}`} onClick={toggleDropdown}>
                <div className="dropdown_section_title">{title}</div>
                <Chevron className={`${Rotate}`} width={10} fill={"white"} />
            </button>
            <div
                ref={contentRef}
                style={{ maxHeight : `${Height}` }}
                className="dropdown_section_content"
            >
                <div className="hiddenScroll">
                    <div className="dropdown_section_text">{content}</div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown