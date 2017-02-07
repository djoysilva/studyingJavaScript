var elementos = document.getElementsByClassName("paciente"); //array com todas as informações de pacientes

for(var i = 0; i < elementos.length; i++){
    pacienteTr= elementos[i];

    var nome = elementos[i].getElementsByClassName("info-nome")[0];
    var peso = elementos[i].getElementsByClassName("info-peso")[0];
    var altura = elementos[i].getElementsByClassName("info-altura")[0];

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

    console.log(pacienteAtual.nome);

}