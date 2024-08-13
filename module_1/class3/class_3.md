<br>

| Repetition structure
|-

- Imagine desenvolver um algoritmo para ler a media das notas de 3 provas de um aluno.
  - E se esse processo ter que ser realizado 40 vezes já que numa dada sala de aula existe essa quantidade de aluno.

Ate a ultima aula os problemas foram resolvidos em uma sequencia de intruções executadas uma unica vez.

Seguia uma sequencia linear de operações.

| Exemplo 1
|-
![image](image.png)

- -  Este codigo não esta dinamico, e seria isustentavel caso o problema exigisse a leitura de notas, media de uma sala de aula com 40 alunos por exemplo.
  -  para resolver isso existe na logica de programação um conjunto de`Estrutura de Repetição` para tornar o algoritmo mais limpo e pratico - `While / do...While / for`.

<br>
<br>

| Estrutura WHILE - (Enquanto)
|-

- - sintaxe

        while (expressao logica)
        { -> condicao (enquanto esta condicao for true a ...) 
        <lista de comandos>  -> (...sera executada.)
        }

| Exemplo 2
|-
Suponha um algoritmo que conte de 0 ate 10. Escreva uma frase quando terminar de contar. <br> ![image](image_2.png)

![image](image_3.png) -> saida do algoritmo no navegador

<br>
<br>

| Exemplo 3 
|-
Suponha um algoritmo que conte de 10 até 0. Escreva uma frase quando terminar de contar.
![image](image_4.png)
![image](image_5.png)

<br>
<br>

| Exemplo 4 
|-
Voce pode criar um algoritmo `mais interativo`. Portanto, escreva um algoritmo que o usuario `digite a quantidade de numeros` que ele deseja somar. Faça com que o programa leia esses numeros e no final `apresente o resultado da soma`.
![image](image_6.png)
![image](image_7.png)

<br>
<br>

| Exemplo 5 
|-
O algoritmo `média dos alunos` pode ser reescrito de uma forma mais `prática`.
![image](image_8.png)
![image](image_10.png)

<br>
<br>

| DO WHILE 
|-

- - Todas os comandos são executados, e uma expressao logica é avaliada no final.
  - a estrutura `do while` significa que ela se repete ate que a avaliaçao da condiçao resulte em `FALSE` ou seja, uma lista de comandos é realizada pelo menos uma vez, e logo apos execução dessa lista de comandos a expressao logica é avaliada, se a condição for `TRUE` o laço continua repetindo e executando a lista de comandos proposto, caso contrario, essa extrutura é paralisada e o fluxo do codigo do programa continua.
    
- - sintaxe

        do 
        {
        <lista de comandos>
        } while (expressao logica)

<br>
<br>

| Exemplo 6
|-
Faça um algoritmo que escreva os numeros de `0` a `9`.
![image](image_11.png)
![image](image_12.png)

<br>
<br>

| Exemplo 7
|-
Escreva um algoritmo que leia um dado numero e imprima na tela a sua tabuada.
![image](image_13.png)
![image](image_14.png)

<br>
<br>

| Exemplo 8
|-
Escreva um algoritmo que _**`leia uma quantidade de numeros`**_ e imprima o resultado informando a quantidade de _**`numeros digitados que sao negativos`**_. Imagina que o usuario escolhe quantos numeros ele deseja digitar.
![image](image_15.png)

<br>
<br>

| LOOP INFINITO
|-

- - `A diferença básica é a posição de onde é testada a expressão.`
  - Uma observação importante, a variavel de controle deve ser iniciada fora, caso contrario o seu codigo ficara em um loop infinito.


<br>
<br>

| FOR
|-

- - sintaxe

        for (contador inicializada; condição de parada;             incremento contador)
        {
         <comandos a serem executados>
        }

<br>
<br>

| Exemplo 11
|-
Suponha um algoritmo que leia e escreva os numeros impares de 1 a 100. `É possivel usar a estrutura **_for_**`.
![image](image_16.png)
![image](image_17.png)

<br>
<br>

| Exemplo 12
|- 
Escreva um algoritmo que leia 5 números e os classifique como positivo ou negativo. Imprima o resultado.
![image](image_19.png)
![image](image_18.png)


<br>
<br>

| `ATIVIDADES E DICA`
|-

<br>
<br>

| Atividade 1
|- 
Faça um algoritmo que leia um dado número e imprima na tela se este é um número primo ou não.

- - Um número inteiro é um número sem parte fracionária ou decimal. Os inteiros incluem:
  - Números naturais positivos (1, 2, 3, 4, ...);
  - O zero (0);
  - Números naturais negativos (-1, -2, -3, -4, ...);
  - Os inteiros podem ser representados pela letra 𝑍;
    - Z em matemática e englobam todos os números que não possuem frações ou decimais. Por exemplo:
      - Positivos: 1, 20, 345;
      - Negativos: -1, -20, -345;
      - Zero: 0
<br>
<br>

| Atividade 2
|- 
Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha incorreta informada, escrever a mensagem "Senha invalida" e "Tente novamente". Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2023. 

<br>
<br>

| Atividade 3
|- 
Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo sera encerrado quando pelo menos uma das duas coordenadas for NULA. Nesta situaçao escreva uma mensagem "Algoritmo Interrompido!!".

<br>
<br>

| Atividade 4
|- 
Uma grande empresa deseja determinar qual de seus produtos tem a preferencia de seus clientes. Escreva um algoritmo para ler o tipo de produto comprado (codificado da seguinte forma:
1 ProdutoA
2 ProdutoB
3 ProdutoC
4 Fim
Caso o usuario informe um codigo invalido (fora da caixa de 1 a 4) deve ser solicitado um novo codigo (ate que seja valido). O programa sera encerrado quando o codigo informado for o numero 4. Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que compraram cada tipo de produto.

<br>
<br>

| Atividade 5
|- 
 Um funcionario de uma empresa recebe, anualmente, aumento salarial. Sabe-se que: 
 a) esse funcionario foi contratado em 2018, com salario inicial de R$ 2.000,00;
 b) em 2019, ele recebeu aumento de 1,5%, sobre o seu salario inicial;
 c) a partir de 2020 (inclusive), os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior. Faça um programa que determine o salario desse funcionario no ano de 2023. Apresente todos os valores.


  