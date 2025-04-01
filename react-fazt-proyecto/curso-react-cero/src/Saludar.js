export function Saludar() {
  const user = {
    name: "pepe",
    lastName: "perez",
  };
  const casado = true;
  const userObjeto = JSON.stringify(user); //convertir un objeto a string
  const objetoUser = JSON.parse(userObjeto); //convertir un string a objeto
  //casado.toString()//convertir un booleano a string
 
  return (
    <div>
      <h2>Componente de React</h2>
    </div>
  );
}


export function Texto(props){
    console.log(props)
    return (
        <div>
           {props.title}
        </div>
    );
}
