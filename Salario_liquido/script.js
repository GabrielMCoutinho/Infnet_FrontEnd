function calculo(){
  
  let nome = document.getElementById("nome").value;  
  let salarioBruto = parseFloat(document.getElementById("salarioBruto").value);  
  let gratificacao = parseFloat(document.getElementById("gratificacao").value);  
  let desconto = parseFloat(document.getElementById("desconto").value);  
  let anoContratacao = parseInt(document.getElementById("anoContratacao").value);  
  let anoAtual = new Date().getFullYear();
  
  const indice = 1.20;
  
  const taxa = 150;
  
  let salarioLiquido = (salarioBruto + gratificacao - desconto) * indice + (anoAtual - anoContratacao) * taxa;

  let mensagem = `${nome} recebeu um salário líquido de R$${salarioLiquido}`;
    
  document.getElementById("apresentacao").value = mensagem;
}