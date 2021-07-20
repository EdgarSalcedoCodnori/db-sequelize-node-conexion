//CONTROLADOR DEL PRODUCTO

const listar = function(req, res){
    res.send("Lista de Productos")
}

const mostrar = function(req, res){
    res.send("Mostrando el producto")
}

const crear = function(req, res){
    res.send("CREATE el producto")
}

const guardar = function(req, res){
    res.send("SAVE el producto")
}

const editar = function(req, res){
    res.send("Mostrando el producto")
}

const modificar = function(req, res){
    res.send("UPDATE el producto")
}

const eliminar = function(req, res){
    res.send("DELETE el producto")
}

module.exports = {
    listar,
    mostrar,
    crear,
    guardar,
    editar,
    modificar,
    eliminar
}