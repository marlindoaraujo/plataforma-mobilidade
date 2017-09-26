# Plataforma de Mobilidade Corporativa - (Aula 06)

## Introdução aos Plugins do Apache Cordova

Os plugins são parte integrante do ecossistema cordova. Eles fornecem uma interface para Cordova e componentes nativos para se comunicar uns com os outros e ligações para APIs padrão do dispositivo. Isso permite que você invoque o código nativo via JavaScript.

O projeto Apache Cordova mantém um conjunto de plugins denominados [Core Plugins](http://cordova.apache.org/docs/en/7.x/guide/support/index.html#core-plugin-apis) (Plugins do núcleo). Esses plugins principais fornecem ao seu aplicativo formas de acessar recursos do dispositivo, como bateria, câmera, contatos, etc.

Além dos [Core Plugins](http://cordova.apache.org/docs/en/7.x/guide/support/index.html#core-plugin-apis) (Plugins do núcleo), existem vários plugins de terceiros que fornecem ligações adicionais para recursos que não estão necessariamente disponíveis em todas as plataformas. Você pode procurar por plugins de Cordova usando o plugin search ou npm. Você também pode desenvolver seus próprios plugins, conforme descrito no Guia de desenvolvimento do plugin. Os plugins podem ser necessários, por exemplo, para se comunicar entre Cordova e componentes nativos personalizados.

**NOTA**: Quando você cria um projeto Cordova, ele não possui nenhum plugin presente. Esse é o novo comportamento padrão. Todos os plugins que você deseja, mesmo os plugins do núcleo, devem ser explicitamente adicionados.

Cordova não fornece widgets UI ou frameworks MV *. Cordova fornece apenas o tempo de execução no qual esses podem ser executados. Se você deseja usar widgets UI e / ou uma estrutura MV *, você precisará selecionar aqueles e incluí-los em seu aplicativo.

### Principais plug-ins do Cordova

O principal conjunto de plug-ins do Cordova fornece acesso aos recursos nativos do dispositivo nas exibições de conteúdo do AEM Mobile usando JavaScript. Plug-ins podem ser ativados ou desativados individualmente por aplicativo, conforme os aplicativos são criados.

Os seguintes principais plug-ins do Cordova estão disponíveis:
- **Status da bateria** - fornece informações sobre a bateria do dispositivo.
- **Câmera** – para tirar fotos e escolher imagens da biblioteca de imagens do sistema.
- **Contatos** – fornece acesso ao banco de dados de contatos do dispositivo. Para aplicativos do Windows, a única API do plug-in compatível é a 'pickContact'.
- **Informações sobre o dispositivo** – descreve o hardware e o software do dispositivo.
- **Movimentação do dispositivo** (accelerometer) – fornece acesso ao sensor de movimento que detecta a alteração no movimento em relação à orientação do dispositivo atual, em três dimensões ao longo do eixo x, y e z.
- **Orientação do dispositivo** (compass) – sensor que detecta a direção ou o sentido em que o dispositivo é apontado, normalmente, da parte superior do dispositivo.
- **Acesso a arquivos** – permite acesso de leitura/gravação a arquivos que residem no dispositivo.
- **Transferência de arquivos** – permite acesso para fazer upload e download de arquivos.
- **Localização geográfica** – fornece informações de GPS sobre o local do dispositivo, como a latitude e a longitude.
- **Globalização** – usa as operações específicas para o local, o idioma e o fuso horário do usuário.
- **Mídia** (cordova-plugin-media) – fornece a capacidade de gravar e reproduzir arquivos de áudio em um dispositivo.
- **Captura de mídia** – fornece acesso aos recursos de captura de áudio, imagem e vídeo do dispositivo.
- **Informações de rede** – informações sobre o telefone celular e a conexão Wi-Fi do dispositivo e se o dispositivo possui uma conexão com a Internet.
- **Notificações** – fornece acesso a alguns elementos de interface da caixa de diálogo, como alerta e bipe.
Vibração (iOS, somente Android) – uma maneira de vibrar o dispositivo.
- **WKWebView** (somente iOS) – você pode ativar o plug-in WKWebView para renderizar arquivos HTML da mesma maneira que eles são renderizados no Mobile Safari. Essa opção usa o WKWebView (WebKit) em vez do UIWebView para artigos HTML e sobreposições da Web em dispositivos iOS 9. Um aplicativo em execução em dispositivos iOS 8 ainda renderizará conteúdo usando o UIWebView. (Consulte [Criar aplicativos iOS para o AEM Mobile](https://helpx.adobe.com/br/digital-publishing-solution/help/building-ios-apps.html).)

Para obter mais informações, consulte [Principais plug-ins do Cordova](https://cordova.apache.org/plugins/). 

### Plug-ins personalizados do Cordova

Com a possibilidade de adicionar plug-ins personalizados do Cordova a um aplicativo do AEM Mobile, você pode criar conteúdo que aproveite os vários plug-ins disponíveis da comunidade Cordova/PhoneGap, ou pode criar seus próprios plug-ins. Por exemplo, você pode ativar a digitalização móvel de códigos de barras, acessar geofences e aproveitar bancos de dados móveis em seus aplicativos.

O fluxo de trabalho para criar aplicativos que usam plug-ins personalizados do Cordova é diferente do método padrão de criar aplicativos. Você usa a AEM Mobile Developer Tool atualizada para especificar quais plug-ins do Cordova você pretende usar. Para aplicativos do iOS, você usa a ferramenta para desenvolvedores para modificar o arquivo .ipa baixado. Para aplicativos do Android, você usa a ferramenta para desenvolvedores para criar um arquivo .apk, o qual você faz upload usando a nova guia Interface personalizada do aplicativo que aparece ao criar ou editar um aplicativo do Android.

Para saber mais consulte https://cordova.apache.org/docs/en/latest/guide/hybrid/plugins/index.html.

### cordova-plugin-battery-status (Status da Bateria)
Este plugin fornece uma implementação de uma versão antiga da [API de eventos de status da bateria](https://www.w3.org/TR/2011/WD-battery-status-20110915/). Adiciona os seguintes três eventos ao objeto `window`:
- batterystatus (status bateria )
- batterycritical (bateria critica)
- batterylow (bateria fraca)

Os aplicativos podem usar `window.addEventListener` para anexar um ouvinte de eventos para qualquer um dos eventos acima após o evento `deviceready` disparar.

#### Plataformas suportadas pelo plugin
- Amazon Fire OS
- iOS
- Android
- BlackBerry 10
- Windows Phone 7 and 8
- Windows (Windows Phone 8.1 and Windows 10)
- Firefox OS
- Browser (Chrome, Firefox, Opera)
#### Instalação
```
cordova plugin add cordova-plugin-battery-status
```
#### batterystatus event (status bateria )
##### Exemplo de utilização

```javascript
window.addEventListener("batterystatus", onBatteryStatus, false);
function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}
```
#### batterylow event (bateria fraca)

##### Exemplo de utilização

```javascript
window.addEventListener("batterylow", onBatteryLow, false);
function onBatteryLow(status) {
    alert("Battery Level Low " + status.level + "%");
}
```

#### batterycritical event (bateria critica)

##### Exemplo de utilização

```javascript
window.addEventListener("batterycritical", onBatteryCritical, false);
function onBatteryCritical(status) {
    alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}
```
Para saber mais sobre o plugins de bateria acesse: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-battery-status/index.html



#### Até a próxima aula! :sweat_smile:



# Referências - para saber mais...
 - http://cordova.apache.org/
 - https://helpx.adobe.com/br/digital-publishing-solution/help/cordova-api.html
 - http://docs.phonegap.com/plugin-apis/

[Voltar](https://github.com/meta-sistemas-2017/plataforma-mobilidade)