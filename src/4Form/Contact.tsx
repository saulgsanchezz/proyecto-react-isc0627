import { type FormEvent, useState } from "react";
import db from "../Firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export const Contact = () => {

const [correo,changeCorreo] = useState('');
const [mnjs,changeMensaje] = useState('');

const onsubmit = (e: FormEvent) => {
  e.preventDefault();

  addDoc(collection(db, 'mensajes'),{
    correo:correo,
    mnjs:mnjs
  });


}

  return (
    <div>
    <div>INGRESA TUS MENSSAJE, TE RESPONDO EN BREVE</div>
    <form action="" onSubmit={onsubmit} >
      <input 
      type="email" 
      name="correo"
      value={correo}
      onChange={(e)=> changeCorreo(e.target.value)}
      placeholder="Correo" />
      
      
      <input 
      type="mensaje" 
      name="mnjs"
      value={mnjs}
      onChange={(e)=> changeMensaje(e.target.value)}
      placeholder="Mensaje" />
      
      
      <button type="submit">Enviar</button>
    </form>
    
    </div>
  )
}
