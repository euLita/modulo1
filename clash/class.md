<br>

- - no replit.com

<br>

![image](image.png)

<br>

- - sincronizando as mudanças com o `merge` e o `pull` localmente

<br>

![image](image_2.png)

<br>

- - Apos o comando anterior(`git pull --no-rebase`), mesclagem padrão para resolver o problema no momento, o `vim` é aberto para adicionarmos como boa pratica, para cooperação na comunidade comentarios a respeito do problema e ou para explicar a razão de fazer o `merge`.
  - use o `Esc` para começar a inserir comentarios e o `Ctrl + O(letra o, de oculos)` para salvar, e `Ctrl + X` para sair.
  - depois é só continuar de onde parou, com o `git push`

<br>

![image](image_8.png)

<br>

- - Apagar o projeto localmente
   - `rm -rf`

<br>

![image](image_4.png)

<br>

  - `git clone <coloque seu endereço SSH do git>`

<br>

=> Alguns comandos práticos
=
  - criar new file: `touch <seu novo arquivo`;
  - abrir file no seu editor de texto, no caso o meu é o Sublime Text: `Subl <name file>`;

<br>

![image](image_5.png)

<br>

- - run no file `.html`:

<br>

![image](image_6.png)

`python3 -m http.server`
*no meu ambiente funcionou com este comando.
<br>

![image](image_7.png)

`http://localhost:8000` or `localhost:8080`

<br>

- - `killall sublime_text` - esse comando encerra, fecha todos os trabalhos sendo executados no Sublime Text.
  - se certifique de salvar seu projeto, arquivo no editor antes de executar este comando.

<br>

<br>

- - Adicionado o arquivo `node_modules` no `.gitignore` depois de já ter subido anteriormente, versionado.
  - depois de ter adicionado no `.gitignore` insira os seguintes comandos no terminal:

          git rm -r --cached node_modules

<br> 

        git commit -m "Remove node_modules from version control"

<br>

        git push

## => Listar os arquivos com a extensão desejada:

      git ls-files | grep '\.log$'

- - `git ls-files`: Lista todos os arquivos rastreados pelo Git.
  - `grep '\.ext$`: Filtra os arquivos com a extensão `.ext`.

## => Remover os arquivos com a extensão desejada:

      git ls-files | grep '\.log$' | xargs git rm

- - `xargs git rm`: Passa a lista de arquivos filtrados para o comando `git rm`, que remove esses arquivos do repositório.

## => Listar e Mover os Arquivos:

      git ls-files | grep '\.log$' | xargs -I{} git mv {} archive/

- - `xargs -I{} git mv {} archive/`: Usa xargs para passar cada arquivo para o comando `git mv`, movendo cada arquivo para o diretório archive.

![image](image_9.png)

> outra maneira

      mv *.txt destino/
