var elementos = document.getElementsByClassName("paciente"); //array com todas as informações de pacientes

percorreArray(elementos, function(paciente){
    var nome = paciente.getElementsByClassName("info-nome")[0];
    var peso = paciente.getElementsByClassName("info-peso")[0];
    var altura = paciente.getElementsByClassName("info-altura")[0];

    var pacienteAtual = {
        nome : nome.textContent,
        peso : peso.textContent,
        altura : altura.textContent,
        pegaImc : function(){
            if(this.altura>0){
                    return this.peso/(this.altura * this.altura);
            }else{
                    console.log = ("Não foi possivel calcular imc, a altura deve ser diferente de zero.");
            }
        }
     };
    var imcCalculado = pacienteAtual.pegaImc();
    var imc = paciente.getElementsByClassName("info-imc")[0];
    imc.textContent = imcCalculado;
    console.log( imc);
});

