    alert('Boas vindas ao jogo do número secreto');
    let numeroMaximo = 100;
    let numeroSecreto = parseInt(Math.random()*numeroMaximo+1); 
    console.log(numeroSecreto);
    let chute;
    let tentativas=1;


    //Enquanto o chute não for igual ao numero secreto 
    while (chute != numeroSecreto) {
        chute = prompt (`Escolha um numero de 1 a ${numeroMaximo}`);
        // se chute for igual ao numero secreto
        if (chute == numeroSecreto) {
            break;
        }  else {
            if (chute > numeroSecreto) {
                alert(`O numero secreto e menor que ${chute}`);
            }else{
                alert(`O numero secreto e maior que ${chute}`);
            }
            //tentativas = tentativas + 1;
            tentativas++; 
        }
    }
    let palavraTentativa = tentativas > 1 ?  'tentativas': 'tentativa';
    alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
   
    //if (tentativas > 1) {
    //    alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    //} else {
    //    alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
   // }

    