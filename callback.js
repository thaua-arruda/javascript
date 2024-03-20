function minhaFuncaoPrincipal(funcaoCallback) {
    console.log("Executando lógica na minhaFuncaoPrincipal...")

    setTimeout(function(){
        console.log("Operação assíncrona concluída!...")

        // chamando callback
        funcaoCallback();
    }, 3000)
}

function minhaCallback() {
    console.log("Callback executada!")
}

minhaFuncaoPrincipal(minhaCallback)