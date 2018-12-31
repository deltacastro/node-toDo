const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer.'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completa o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea a realizar.', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}