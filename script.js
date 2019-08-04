// let idade;
// idade = Number(prompt("Digite o sua idade"));

// //SE SENÃO

// if(idade >= 18 || idade <= 80){
//     alert("Legal, você pode dirigir");
// }else if(idade >=13){
//     alert("Você pode tomar um danoninho");
// }else{
//     alert("Você pode tomar toddynho");
// }

let idade, salario, valorEmprestimo;

idade = Number(prompt("Qual a sua idade?"));

if(idade >= 20 && idade <= 60){
    salario = Number(prompt("Digite o seu salário"));
    if(salario >= 1000){
        valorEmprestimo = Number(prompt("Qual o valor do emprestimo?"));
        if(valorEmprestimo <= 10*salario){
            alert("Emprestimo aprovado");
        }
        else{
            alert("Emprestimo não aprovado pelo valor do empréstimo");
        }
    }
    else{
        alert("Emprestimo nao aprovado pelo salario");
    }
}else{
    alert("Emprestimo não aprovado pela idade")
}


