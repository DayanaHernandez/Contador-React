import {useState} from "react";
import ContadorComponent from "../../components/ContadorComponent";
import Saludo from "../../components/Saludo";

const Contador=()=>{
    const [numeroActual, setnumeroActual]= useState(1);
    return (
        <div>
            <Saludo mensajeSaludo ="Hola" nombre ="Dayana"/> 
            <ContadorComponent numeroActual={numeroActual}
            setNumeroActual={setnumeroActual}
            />
        </div>
    );
};
 export default Contador;