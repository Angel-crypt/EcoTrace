export const idlFactory = ({ IDL }) => {
  const Identificador = IDL.Nat;
  const Evento = IDL.Record({
    'ubicacion' : IDL.Text,
    'categoria' : IDL.Text,
    'hora' : IDL.Text,
    'fecha' : IDL.Text,
  });
  return IDL.Service({
    'consultEvento' : IDL.Func([Identificador], [IDL.Opt(Evento)], ['query']),
    'consultEventos' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, Evento))],
        ['query'],
      ),
    'saveEvent' : IDL.Func([Evento, Identificador], [Evento], []),
    'whoami' : IDL.Func([], [IDL.Principal], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
