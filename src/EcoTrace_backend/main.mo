import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";

// Actor
actor oidoSelva {
    // Tipos de datos
    //Usuario
    type User = Principal;

    //Datos de ingreso
    type Evento = {
        categoria : Text;
        fecha : Text;
        hora : Text;
        ubicacion : Text;
    };

    // Identificador de evento
    type Identificador = Nat;

    // Hashmap de evento
    type Eventos = HashMap.HashMap<Nat, Evento>;

    // Inicializar el arreglo
    var evento = HashMap.HashMap<User, Eventos>(0, Principal.equal, Principal.hash);
    // Funciones
    var id : Nat = 1;

    // Función para obtener el usuario que realiza la llamada
    public query ({ caller }) func whoami() : async Principal {
        return caller;
    };

    // Funcion para agregar
    public shared (msg) func saveEvent(datosEvento : Evento, identificador : Identificador) : async Evento {
        let user : Principal = msg.caller;
        let id : Nat = identificador;
        let resultEvento = evento.get(user);

        

        var finalEvento : Eventos = switch resultEvento {
            case (null) {
                HashMap.HashMap(32, Nat.equal, Hash.hash);
            };
            case (?resultEvento) resultEvento;
        };

        finalEvento.put(id, datosEvento);
        evento.put(user, finalEvento);
        Debug.print("El evento <<" #Nat.toText(id) # ">> fue agregada correctamente");
        return datosEvento;
    };

    // Funcion para consultar especificacmente
    public query (msg) func consultEvento(identificador : Identificador) : async ?Evento {
        let user : Principal = msg.caller;
        let resultEvento = evento.get(user);

        switch resultEvento {
            case (?evento) {
                Debug.print("Correcto");
                return evento.get(identificador);
            };
            case (null) {
                Debug.print("Usuario no encontrado en el HashMap.");
                return null;
            };
        };
    };

    // Funcion para consultar el ganado
    public query (msg) func consultEventos() : async [(Nat, Evento)] {
        let user : Principal = msg.caller;
        let result = evento.get(user);

        var resultsGanado : Eventos = switch result {
            case (null) {
                HashMap.HashMap<Nat, Evento>(32, Nat.equal, Hash.hash);
            };
            case (?result) result;
        };

        // Convertir las entradas del mapa en una secuencia
        let GanadoEntries = Iter.toArray<(Nat, Evento)>(resultsGanado.entries());

        return GanadoEntries;
    };

};