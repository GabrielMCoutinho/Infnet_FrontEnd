function apresenta(){

  let nome = document.getElementById("nome").value; 
  let anoNascimento = parseInt(document.getElementById("anoNascimento").value);
  let idade = new Date().getFullYear() - anoNascimento; 
  let mensagem = nome + " atualmente tem " + idade + " anos.";
  document.getElementById("apresentacao").value = mensagem;
}