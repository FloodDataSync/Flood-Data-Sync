export const idlFactory = ({ IDL }) => {
  const Location = IDL.Record({
    'latitude' : IDL.Float64,
    'longitude' : IDL.Float64,
    'accuracy' : IDL.Float64,
  });
  const FloodReport = IDL.Record({
    'imageData' : IDL.Vec(IDL.Nat8),
    'description' : IDL.Text,
    'floodType' : IDL.Text,
    'timestamp' : IDL.Text,
    'location' : Location,
  });
  return IDL.Service({
    'getAllReports' : IDL.Func([], [IDL.Vec(FloodReport)], ['query']),
    'submitReport' : IDL.Func([FloodReport], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
