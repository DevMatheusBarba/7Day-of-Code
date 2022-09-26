var carreira = prompt('Você deseja seguir em qual area: Front-End ou Back-End')
var area = ''

if (carreira == 'Front-End') {
    area = prompt("Deseja aprender React ou aprender Vue");
}
else if (carreira == 'Back-End') {
    area = prompt('Deseja aprender C# ou aprender Java');
    
}
else {
    alert('opção invalida');
}

var fullStackOuNao = prompt('Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack');
    if (fullStackOuNao == '1') {
        alert('Continue se especializando em '+ area + ' para dominar ' + carreira);
    }
    else if (fullStackOuNao == '2') {
        alert('Chegou a hora de estudar outras linguagens além de ' + area + ' para se torna um FullStack');
        
    }
    else{
        alert('Você não insriu uma opção valida');
    }

var msg = prompt ("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'Sim' em caso positivo.");
    while (msg == 'Sim') {
        let novaTecnologia = prompt('Qual tecnologia deseja aprender?');
        alert(novaTecnologia + ' é realemnte uma tecnologia muito boa para se aprender!');
        msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'Sim' em caso positivo.");        
    }
    