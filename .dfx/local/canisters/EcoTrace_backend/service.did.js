export const idlFactory = ({ IDL }) => {
  const Arete = IDL.Text;
  const DatosCabeza = IDL.Record({
    'destino' : IDL.Text,
    'mejoramientoGenetico' : IDL.Text,
    'raza' : IDL.Text,
    'ascendencia' : IDL.Text,
    'fechaNacimiento' : IDL.Text,
    'dieta' : IDL.Text,
    'registroEnfermedades' : IDL.Text,
    'propietario' : IDL.Text,
  });
  return IDL.Service({
    'consultCabeza' : IDL.Func([Arete], [IDL.Opt(DatosCabeza)], ['query']),
    'consultGanado' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, DatosCabeza))],
        ['query'],
      ),
    'deleteCabeza' : IDL.Func([Arete], [IDL.Text], []),
    'saveCabeza' : IDL.Func([DatosCabeza, Arete], [DatosCabeza], []),
    'updateDatosGanado' : IDL.Func([Arete, DatosCabeza], [IDL.Text], []),
    'whoami' : IDL.Func([], [IDL.Principal], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
