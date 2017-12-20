# Plataforma de Mobilidade Corporativa - (Aula 05)

## Introdução ao desenvolvimento de aplicativos híbridos?

### O que é um aplicativo híbrido?

O aplicativo híbrido, como o próprio nome já sugere, é uma mistura de um aplicativo nativo e um web App.

O aplicativo híbrido é construído na linguagem HTML5, CSS e Javascript, assim como o site mobile. Esse código é alocado dentro de um container, integrando as funcionalidades que o seu dispositivo oferece, oferecendo uma experiência melhor ao usuário que os web Apps.

Assim, apenas uma parte do código nativo deverá ser escrito para esses Apps. Isso possibilita que apenas uma parte do código seja reescrita caso queira oferecer o aplicativo para outra plataforma.

Eles estarão disponíveis para download nas App Stores, oferecendo um canal de tráfego e download. Da mesma forma como o aplicativo nativo, o híbrido apresenta um custo de manutenção nas App Stores.

É mais simples e, consequentemente, mais rápido de se desenvolver. Não se é necessário fazer o download sempre que uma atualização for feita em seu aplicativo. Mas sua utilização ainda dependerá de conexão com a internet e da velocidade da mesma, não funcionando tão rápido quanto um aplicativo nativo.

Para funcionar corretamente em qualquer plataforma, o aplicativo híbrido necessitará de um certo tempo e trabalho duro dos desenvolvedores. Em algumas situações eles podem ter o custo bem parecido com um aplicativo nativo, dependendo do quão excelente você quer que seja a experiência oferecida ao usuário.

## Introdução ao Apache Cordova

O Apache Cordova é um framework de desenvolvimento móvel de código aberto. Ele permite que você use tecnologias web padrão - `HTML5`, `CSS3` e `JavaScript` para o desenvolvimento de várias plataformas. Os aplicativos são executados dentro de wrappers direcionados a cada plataforma e dependem de ligações de API compatíveis com padrões para acessar as capacidades de cada dispositivo, como sensores, dados, status da rede, etc.

Use o Apache Cordova se você for:
- um desenvolvedor móvel e quer ampliar um aplicativo em mais de uma plataforma, sem ter que re-implementá-lo com o conjunto de ferramentas e linguagens de cada plataforma.
- um desenvolvedor web e deseja implantar um aplicativo da Web que seja empacotado para distribuição em vários portais de lojas de aplicativos.
- um desenvolvedor móvel interessado em misturar componentes de aplicativos nativos com um WebView (janela de navegador especial) que pode acessar APIs de nível de dispositivo ou se você deseja desenvolver uma interface de plugin entre componentes nativos e WebView.

### Arquitetura

Existem vários componentes para uma aplicação cordova. O diagrama a seguir mostra uma visão de alto nível da arquitetura de aplicativos cordova:
![arquitetura](http://cordova.apache.org/static/img/guide/cordovaapparchitecture.png "arquitetura")

### WebView

O WebView habilitado para Cordova pode fornecer o aplicativo com toda a sua interface de usuário. Em algumas plataformas, também pode ser um componente dentro de uma aplicação maior e híbrida que mistura o WebView com os componentes da aplicação nativa.
Saiba mais em: http://cordova.apache.org/docs/en/7.x/guide/hybrid/webviews/index.html
### Web App

Esta é a parte em que o código do seu aplicativo reside. O próprio aplicativo é implementado como uma página da Web, por padrão, um arquivo local chamado **index.html**, que referências de `CSS`, `JavaScript`, `imagens`, arquivos de mídia ou outros recursos são necessários para que ele seja executado. O aplicativo executa em um **WebView** dentro do wrapper de aplicativo nativo, que você distribui para lojas de aplicativos.

Esse contêiner tem um arquivo muito importante - arquivo [**config.xml**](http://cordova.apache.org/docs/en/7.x/config_ref/index.html) que fornece informações sobre o aplicativo e especifica os parâmetros que afetam a maneira como ele funciona, como se ele responde às mudanças de orientação.

### Plugins

Os plugins são parte integrante do ecossistema cordova. Eles fornecem uma interface para Cordova e componentes nativos para se comunicar uns com os outros e ligações para APIs padrão do dispositivo. Isso permite que você invoque o código nativo via JavaScript.

O projeto Apache Cordova mantém um conjunto de plugins denominados [Core Plugins](http://cordova.apache.org/docs/en/7.x/guide/support/index.html#core-plugin-apis) (Plugins do núcleo). Esses plugins principais fornecem ao seu aplicativo formas de acessar recursos do dispositivo, como bateria, câmera, contatos, etc.

Além dos [Core Plugins](http://cordova.apache.org/docs/en/7.x/guide/support/index.html#core-plugin-apis) (Plugins do núcleo), existem vários plugins de terceiros que fornecem ligações adicionais para recursos que não estão necessariamente disponíveis em todas as plataformas. Você pode procurar por plugins de Cordova usando o plugin search ou npm. Você também pode desenvolver seus próprios plugins, conforme descrito no Guia de desenvolvimento do plugin. Os plugins podem ser necessários, por exemplo, para se comunicar entre Cordova e componentes nativos personalizados.

**NOTA**: Quando você cria um projeto Cordova, ele não possui nenhum plugin presente. Esse é o novo comportamento padrão. Todos os plugins que você deseja, mesmo os plugins do núcleo, devem ser explicitamente adicionados.

Cordova não fornece widgets UI ou frameworks MV *. Cordova fornece apenas o tempo de execução no qual esses podem ser executados. Se você deseja usar widgets UI e / ou uma estrutura MV *, você precisará selecionar aqueles e incluí-los em seu aplicativo.

## Instalando o Cordova CLI - Linux Ubuntu (Galera do Windows procura no google ai...:smiling_imp:)

Para utilizar o Cordova deveremos ter o ambinte para a plataforma que você irá gerar seu aplicativo, No nosso caso nosso foco será voltado para o desenvolvimento para plataforma Android (Não tenho dinheiro para comprar um Mac :cry:)

### Passo 1:

Instalação do `NodeJS`:
Para instalar o Node execute os seguintes comandos:
``` 
sudo curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```
Isso fará que seja instalado o NodeJS na sua versão `v6.11.3 LTS`
Assim o npm já estará disponivel para utilizarmos:

### Passo 2:

Instalação do Cordova, depois de já estar disponivel o comando `npm` agora podemos instalar o nosso cordova, execute o seguinte comando:

```
sudo npm install -g cordova
```
Isso instalará o e habilitará o comando `cordova` no terminal.

## Criando o APP.
Para criar seu primeiro projeto rode o seguinte comando:
```
cordova create hello com.example.hello HelloWorld
```
Isso irá criar uma pasta chamada `hello/` contendo o seu projeto com as seguintes pastas e arquivos:
* **hooks/** - Pasta que pode armazenar comandos personalizados ([Saiba mais]( http://cordova.apache.org/docs/en/7.x/guide/appdev/hooks/index.html));
* **platforms/** - Pasta com as Plataformas que o projeto irá utilizar;
* **plugins/** - Pasta dos plugins que seu app irá utilizar, como bateria, câmera, contatos, etc.
* **www/** - Pasta conténdo nossa página;
    * **css/** - Pasta com nossos arquivos `.css`;
    * **img/** - Pasta para imagens;
    * **js/** - Pasta com os nossos `.js`;
    * **index.html** - Arquivo principal de onde parte nosso app;
* **config.xml** - Principal arquivo de configuração do seu app ([Saiba mais](http://cordova.apache.org/docs/en/7.x/config_ref/index.html)).

### Adicionando a plataformas
O Cordova usa o Browser como uma plataforma, então para você poder testar via navegador você deve adiconar a plataforma browser, use os seguintes comandos:
Abra a pasta criada anteriormente: 
```
cd hello
```
Adicione a plataforma:
```
cordova platform add browser
```
Depois de adicionado você só precisa rodar sua apliacação para testar:
```
cordova run browser
```
Issa abrirá seu aplicativo em um browser:
## Montando o ambiente para Android Linux Ubuntu (Galera do Windows já sabe né??? :wink:)
Antes da adicionar a plataforma android é necessário ter o ambiente para o seu desenvolvimento.
### Passo 1:
Precisamos instalar o Java JDK na sua máquina para instalar no Linux Ubuntu use:
``` 
sudo apt-get install default-jdk
```
 Depois de instalado você precisará configurar a variável de ambiente: `$JAVA_HOME`
Para criar as variável você deve usar o comando:
 ```
sudo gedit ~/.bashrc
 ```
 Isso irá abrir um editor de texto com o arquivo `.bashrc` aberto, vá até o final do arquivo e adicione a seguinte linha de comando:
``` 
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64/
```
Salve e feche o arquivo, volte ao terminal e rode o seguinte comando:
``` 
source ~/.bashrc
```
Isso fará com que a variável esteja disponível.

### Passo 2:

É necessário instalar as SDK do android, a forma mais fácil de montar o ambinte é instalar o Android Studio:
para baixar o Android Studio acesse: https://developer.android.com/studio/index.html?hl=pt-br
**ATENÇÃO!!** O uso dessa ferramente exige uma configuração mediana para executar as funções, como emulador, além de no mímimo 8Gb de espaço no local de instalação da pasta de SDK:

### Passo 3

Instale as libs necessárias para utilização do Android Studio no linux execute os comandos:

```
sudo apt-get install lib32z1 lib32ncurses5 lib32stdc++6
```
### Passo 4

Descompacte o Android studio, mova para pasta `/usr/local/`, e instale:
Siga o Tutorial em: https://developer.android.com/studio/install.html
Vídeo de instalação: https://storage.googleapis.com/androiddevelopers/videos/studio-install-linux.mp4

### Passo 5

Adicione os SDK da API 25 via SDK Manager, crie um emulador;
Epere seu download vai demorar ... :sleeping:

### Passo 6
Depois de instalado você precisará configurar as variável de ambiente: `$ANDROID_HOME`
Para criar as variável você deve usar o comando:
 ```
sudo gedit ~/.bashrc
 ```
Isso irá abrir um editor de texto com o arquivo `.bashrc` aberto, vá até o final do arquivo e adicione a seguinte linha de comando:
``` 
export ANDROID_HOME=/home/{seu-usuario}/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Troque o `{seu-usuario}` pelo nome do usuário do seu computador, que eu não sou pajé para advinhar.
Salve e feche o arquivo, volte ao terminal e rode o seguinte comando:
``` 
source ~/.bashrc
```
Isso fará com que a variável esteja disponível.

### Passo extra
Tive um problema com o Cordova e o Graddle que vem junto do android studio, por isso fiz a instalação manual do Gradle 3.5, [Saiba Mais](https://gradle.org/)
Para Fazer o Download [clique aqui](https://services.gradle.org/distributions/gradle-3.5.1-bin.zip)
Depois de baixar abra o terninal na pasta de Download e execute:
```
mkdir /opt/gradle
unzip -d /opt/gradle-3.5.1-bin.zip
sudo chmod 777 -R /opt/gradle/
```

Depois de instalado você precisará configurar as variável de ambiente: `$GRADLE_HOME`
Para criar as variável você deve usar o comando:
 ```
sudo gedit ~/.bashrc
 ```
Isso irá abrir um editor de texto com o arquivo `.bashrc` aberto, vá até o final do arquivo e adicione a seguinte linha de comando:
``` 
export GRADLE_HOME=/opt/gradle/gradle-3.5.1
export PATH=$PATH:$GRADLE_HOME/bin
```
Salve e feche o arquivo, volte ao terminal e rode o seguinte comando:
``` 
source ~/.bashrc
```
Isso fará com que a variável esteja disponível.

## Adicionando Plataforma android
Depois de tudo configurado chegou a hora de adicionar a plataforma ao cordova:
Vá até a pasta do seu projeto e execute o comando:

```
cordova platform add android
```
## Testando seu app
Se tudo ocorrer bem você já pode gerar seu primeio `.apk`, para isso execute o comando:
```
cordova build android
```
Se você quiser testar diretamente no celular, você pode ativar o modo de depuração via usb e conectar ao computador via usb, assim é só rodar o comando:
```
cordova run android
```
Ele irá gerar o build da sua aplicação e instalará no seu celular para teste.
Para testar diretamente no emulador você pode executar:
```
cordova run android --emulator
```
Isso gerará o build de seu aplicação e executará o emulador padrão configurado, e instalará o seu App para teste.

Legal né?
#### Até a próxima aula! :sweat_smile:

## [Atividade prática da aula 05](https://github.com/meta-sistemas-2017/plataforma-mobilidade/tree/master/Aula-05/Atividade)

# Referências - para saber mais...
 - http://cordova.apache.org/
 - https://gradle.org/install/
 - https://developer.android.com/studio/install.html
 
[Voltar](https://github.com/meta-sistemas-2017/plataforma-mobilidade)
