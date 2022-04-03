Para facilitar na avaliação técnica do códico foram criados menus 
para disparar os módulos de cada programa. Os menus foram divididos 
da seguite maneira:

1) Requisitar Open Banking Branches: Neste meno foi feita apenas a implementação
para se obter dados da API do Banco do Brasil. Neste botão apenas é disparado 
um alerta com os dados coletados do JSON obtido pela API: 
https://bb-api.concore.io/open-banking/channels/v1/branches

Como os dados usados no presente projeto ainda não estavam implementados
não foi possível usar esse recurso por requisição GET através da API, pois 
os dados necessários para o presente projeto não estavm contidos nas APIs
liberadas a fase 1. Para os dois sistemas propostos os dados utilizados, 
no formato JSON, foram do tipo hardcoded.

2) Safra Prospect é um módulo do sistema que usaria as APIs para coletados
dados dos clientes internos e externos ao Safra e assim, permitir que uma 
alista do Safra avalie como prospectar novos clientes. No entanto, pela complexidade
desse módulo não foi possível a implementação e, consequentemente, clicando no botão
mostrará uma mensagem da página em desenvolvimento.

3, 4, 5) Consiste no módulo que poderia se integrar ao Internet Banking do Safra
atuando através dos clientes Safras e propondos simulações que estimulariam o
cliente a migrar de contas poupanças para contas de renda fixas mais atraentes
para o próprio cliente e para o banco também. Neste simulador é mostrado o poder
do juros compostos a longo prazo. Como pode ser visto neste módulo é possível comparar
o rendimento a longo prazo da poupança com outras tipos de investimentos de renda fixa
e o aplicativo mostra quanto tempo leva para o cliente se tornar milionário.

6) Este botão apenas limpa a tela.

Obs.: Vale ressaltar que o Menu com o nome do time e a última versão desenvolvida foi
colocado apenas para facilitar a avaliação dos desenvolvedores e não faz parte do 
sistema, apenas dispara cada módulo.