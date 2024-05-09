import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";

actor oidos_selva{
  // Tipos de datos
  type Id ={
    fecha : Text;
    hora : Text;
  };
   
  type User = Principal;

  type Sonido ={
    categoria : Text;
  };

  // HashMap
  type Evento = HashMap.HashMap<Id, Sonido>;

  // Funciones
  // Función para obtener el usuario que realiza la llamada
  public query ({ caller }) func whoami() : async Principal {
      return caller;
  };

  /*public shared (msg) func registrarEvento(id : Id, sonido : Sonido) : async Sonido {
    let user : Principal = msg.caller;
  };*/
}