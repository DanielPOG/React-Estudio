function Producto({texto, numero, booleano, objeto, arreglo}){
    const {nombre,edad}= objeto
    return (
        <div>
            <h1>{texto}</h1>
            <h1>{numero}</h1>
            <h1>{booleano.toString()}</h1>
            <h1>{nombre}</h1>
            <h1>{edad}</h1>
            <h1>{arreglo}</h1>

        </div>
    )
}

export function Nav(){
    return(
        <nav>
            navigation
        </nav>
    )
}
export default Producto;