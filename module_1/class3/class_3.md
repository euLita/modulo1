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
