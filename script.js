function contar() {
    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO], falta de dados!")
    } else {
        res.innerHTML = "";
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p == 0) {
            window.alert("[ERRO] o zero é inválido, cosiderando como PASSO 1");
            p = 1;
        }
        if(i < f) {
                for(let c = i; c <= f; c += p) {
                res.innerHTML += ` <strong>${c}</strong> =>`;
            }
            //Contragem crescente
        } else {
            for(let m = i; m >= f; m -= p) {
                res.innerHTML += ` <strong>${m}</strong> =>`; 
            }
            //Contagem regresiva
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}

