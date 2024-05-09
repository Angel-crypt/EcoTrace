import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";

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

  // HashMap de eventos
  type Evento = HashMap.HashMap<Text, Sonido>;
  // HashMap de identificador
  var _evento = HashMap.HashMap<User, Evento>(0, Principal.equal, Principal.hash);

  // Funciones
  // Función para obtener el usuario que realiza la llamada
  public query ({ caller }) func whoami() : async Principal {
      return caller;
  };
  // Funcion para crear el evento
  public shared (msg) func crearEvento(id : Id, sonido : Sonido) : async () {
    // Conocer el usuario
    let user = await whoami();
    // Buscar el evento
    let _consultEvento = _evento.get(user);

    // Casos de evento
    var finalEvento : Evento = switch _consultEvento{
      case (null){
        HashMap.HashMap(0, Text.equal, Text.hash);
      };
      case(?_consultEvento) _consultEvento;
    }
    //Añadir el evento con fecha
    finalEvento.put(id, sonido);
    // Añadir el evento al usuario
    _evento.put(user, finalEvento);
    Debug.print("Evento creado en la fecha: ", id.fecha, " y hora: ", id.hora, " con la categoria: ", sonido.categoria);
  };
}