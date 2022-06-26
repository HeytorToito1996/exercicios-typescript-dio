enum Profissao{
    Padeiro,Atriz
  }
  
  interface Pessoa{
    nome : string,
    idade: number,
    profissao:Profissao
  }
  
  const Roberto: Pessoa = {
    nome: "Roberto",idade: 19,profissao: Profissao.Padeiro
  }
  
  const Laura: Pessoa = {
    nome: "Laura",idade :25,profissao: Profissao.Atriz
  }
  
  const Maria: Pessoa = {
    nome:"Maria",idade:29, profissao:Profissao.Atriz
  }
  
  const Carlos: Pessoa= {
    nome:"Carlos",idade:19,profissao:Profissao.Padeiro
  }