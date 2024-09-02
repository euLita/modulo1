var readlineSync = require('readline-sync');
let opcao = "4";
let produtos = {
	'categoriaA': 0,
	'categoriaB': 0,
	'categoriaC': 0
}
do{
	opcao = readlineSync.question(`informe uma opcao:
		1 ProdutoA
		2 ProdutoB
		3 ProdutoC
		4 Fim `);
	console.clear(); 
	if (opcao == 1){
		produtos['categoriaA']++;
	} else 	if (opcao == 2){
		produtos['categoriaB']++;
	} else 	if (opcao == 3){
		produtos['categoriaC']++;
	} else 	if (opcao == 4){
		console.log("MUITO OBRIGADO!")
	} else {
		console.log("opcao incorreta")
	} 
	console.log(opcao)
} while(opcao != "4");