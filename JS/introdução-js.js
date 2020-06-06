// objetopossuem propriedades e fucionalidades
// const pessoa ={
//   altura:"1.80m",
//   idade: 26,
//   solteiro: true,
//   correr(){ // objeto
//     return "run forest"
//   }
// }

// document.write(pessoa.correr())

// // array - são os vetores [], vetores são coleção de dados//
// const colecaoDeBolinhas = ["blue", "green", 1, {name:"felipe"}]

// document.write(colecaoDeBolinhas[3].name)



// funções - funcionalidade - atalhos -reuso de código

//registro da funçaõ
// function sayMyName() {
//   document.write("felipe")
// }
// // execução de função
// sayMyName()
// sayMyName()

// //registro da funçaõ
// function sayMyName2(name) {
//   document.write(name)
// }
// // execução de função
// sayMyName2("Jenifer")
// sayMyName2("Jess")



//condicionaís

// const notaFinal = 4
// if (notaFinal < 5){
//   document.write("Reprovado")
// }
// else {
//   document.write("Aprovado")
// }


//Loop Repetições
// for (i = 1; i < 11; i++){
//   document.write(`<p> ${i} </p>`)
// }









//document.querySelectorAll("form input"), pra procurar as coisas (usado no console do site)//
//document

//function populateUFs() { /*criei uma função de nome "populateUFs"*/
//    const ufselect = document.querySelector("select[name=uf]") /*const = variavel)*/
//    
//    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados") /*uma promessa*/
//    .then((res) => {return res.json() }) /* "() => {}" é o mesmo que function() {} (ambos são funções anonimas, sem nome)*/ /*(res) => {return res.json(), pegando  a resposta "res" da promessa, e retornando o "res" no formato "json", qual é uma linguagem semelhante ao JS.*/
//    .then( (state) =>{ /*aqui o then se tornou uma promessa tmbm*/
//    
//        for( const state of states ) {
//           ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>` /*ufselect.innerHTML permite escrever //em html, aqui no caso foi ufselect*/
//
//        }
//    
//    
//  })                      
//}


//document
//    .querySelector("select[name=uf]")
//    .addEventListener("change", () => {
//        console.log("mudei")
//    })

//function populateUFs (){
//    const ufSelect = document.querySelector("select[name=uf]")
//    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
//    .then( (res) => {return res.json()})
//    .then( (states) => {

//        for(const state of states) {
//            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

//        }
        
//    })
//}

//populateUFs()