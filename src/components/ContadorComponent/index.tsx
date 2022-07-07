import {IContadorComponent} from "./interface";

const ContadorComponent =({
    numeroActual,
    setNumeroActual,
}: IContadorComponent) => {
    return (
        <div className="ContadorComponent">
           <button onClick={() =>setNumeroActual(numeroActual -1)}>--</button>
            <span>{numeroActual}</span>
            <button onClick={() => setNumeroActual(numeroActual+1)}>++</button>
            <button onClick={()=> setNumeroActual(0)}>Limpiar</button>
        </div>
    );
};
export default ContadorComponent;