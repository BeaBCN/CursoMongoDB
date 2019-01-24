db = db.getSiblingDB('KnowtechB');

for (var i = 1; i <= 10000; i++){ 
   db.alumno.insertOne({idAlumno:i, Nombre:'Bea_'+i, Apellido: 'Cubo_'+i, DNI: '12345678Z'});
}