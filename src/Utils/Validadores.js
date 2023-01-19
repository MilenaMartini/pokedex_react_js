const validarEmail = (email) => {
  return email?.toString().includes('@') && email?.toString().includes('.')
  //? é uma proteção para caso existe o email faz a função e se não existir ele não quebra o sistema
}

const validarSenha = (senha) => {
  return senha?.toString().lenght > 3
  //senha tem q ser maior que três
}

export{
  validarEmail,
  validarSenha
}