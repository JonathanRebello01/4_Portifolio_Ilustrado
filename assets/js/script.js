window.alert("CUIDDADO!!!")

let nome=window.prompt("digite seu nome: ")

let confirmacao = window.confirm("tem certeza que deseja prosseguir, "+nome+" ?")

if(confirmacao!=true){
    window.location.replace("https://www.youtube.com/watch?v=d98KxaUYyV4")
}