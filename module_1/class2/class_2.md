<br>

Estrutura Condicional simples e composta
-
"Se tiver R$ 90,00 sobrando então ierei comprar uma calça."<br>
-> Ela é uma expressão lógica, pois a pergunta "tenho R$ 90,00 sobrando?" pode (tem que) ser respondida com "SIM" ou "NAO"<br>
- - esse é um exemplo de estrutura condicional simples.<br>
Em algoritmo toda condição tem que ser uma expressão lógica.<br>
-> VERDADEIRO ou FALSO<br>
Exemplo de sintaxe:<br>

          if (condicao) {
            < acao acontecera se condicao for verdadeira >
          }
-
          if (tenho R$ 90,00) {
            < comprar calca >
          }
<br>

Exemplo 1) Crie um algoritmo que leia o nome de uma pessoa, o ano em que essa pessoa nasceu e o ano atual. Calcule  a idade dessa pessoa e imprima uma mensagem caso ela já possua a maioridade(21 anos).<br>
<br>

-> Sintaxe de uma estrutura condicional composta
<br>

      if (condicao) {
        <(acoes se condicao for TRUE)>
      } else {
        <(acoes se condicao for FALSE)>
      }
<br>

Exemplo 3) Suponha que o cenário financeiro estaja complexo e voce resolve considerar a viagem também pelo Brasil. Sendo assim mantém a condição da viagem para Europa, mas caso o saldo juntado seja inferior a R$ 10.000,00 a viagem será feita dentro do Brasil. Faça um programa que leia o saldo e decida a viagem.
<br>

      if (saldo >= 1000) {
        <(viagem para Europa)>
      } else {
        <(viagem dentro do Brazil)>
      }
<br>

Exemplo 4) Faça um algoritmo para calcular a área de um círculo. O valor do raio deve ser lido pelo program e deve ser positivo.
<br>

- - Para calcular a area de um circulo, você utiliza a formula:<br>
Area = π × raio²<br>
- - Onde:<br>
  - π (pi) é uma constante aproximadamente igual a 3,14159 (ou pode usar o valor mais preciso necessário para suas aplicações);<br>
  - raio é a distância do centro do círculo até a sua borda.<br>
![image](image.png)<br>
- - Passos para calcular a área de um círculo:<br>
  - Meça o raio do círculo:
    - Esta é a distância do centro até a borda do círculo.<br>
  - Substitua o valor do raio na fórmula:
    - Elevar o raio ao quadrado significa multiplicar o raio por ele mesmo.<br>
  - Multiplique pelo valor de π:
    - Use o valor de π adequado para suas necessidades (geralmente 3,14159 é suficiente para muitas aplicações).<br>
- - Exemplo:<br>
Suponha que o raio do círculo seja r = 5 unidades.<br>
Area = π × 5²<br>
Area = π × 25<br>
Area ≈ 3.14159 × 25<br>
Area ≈ 78.54<br>
Portanto, a área do círculo com raio `5` unidades é aproximadamente 78.5478.54 unidades quadradas.
<br>

Exemplo 5) Suponha que voce faz uma analise mais realista da viagem e conclui que um saldo menor que R$ 3.000  é melhor não viajar. Fique em casa!! Sendo assim, mantém a condição da viagem para Europa, e caso o saldo juntado seja inferior a R$ 10.000 e igual ou superior a R$ 3.000, a viagem acontecerá no Brasil. Tendo todas essas novas informações, faça um programa que leia o saldo e decida a viagem.

<br>

Estrutura Condicional switch-case
-

Comando de alternativa de multipla escolha;
- - para cada caso um tipo de resposta, um bloco de resposta a ser atendida;
  - Sintaxe geral:
  - `switch` é uma  espressao de selecao que sera avalida;
  - para cada caso digitado;
  - lista de comando e um `breack`, para parar, stop no codigo;
<br>

Exemplo 6) Um determinado clube de futebol pretende classificar seus atletas em categorias e para isto ele contratou um desenvolvedor para criar um programa que execute esta tarefa. Para isso o clube criou uma tabela que contem a faixa etaria do atleta e sua categoria.