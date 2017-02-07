function percorreArray(elementos, comportamento){
    for(var i = 0; i < elementos.length; i++){
        var pacienteAtual = elementos[i];
        comportamento(pacienteAtual);
        //executar um codigo
    }
}