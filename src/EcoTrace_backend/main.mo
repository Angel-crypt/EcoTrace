import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";

actor oidos_selva{
  // Tipos de datos
  type Id ={
    fecha : Text;
    hora : Text;
  };
  
  type Sonido ={
    categoria : Text;
  };
   
  type User = Principal;

  // HashMap de eventos
  type Evento = HashMap.HashMap<Text, Sonido>;
  // HashMap de identificador
  var _evento = HashMap.HashMap<User, Evento>(0, Principal.equal, Principal.hash);

  // Funciones
  // Función para obtener el usuario que realiza la llamada
  public query ({ caller }) func whoami() : async Principal {
      return caller;
  };
  
}