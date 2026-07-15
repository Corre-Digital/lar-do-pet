import type { LegalDoc } from './legal-page'

// Conteúdo redigido pelo workflow de legais (rascunho + auditoria jurídica-fabricação
// + auditoria honestidade-fake-door + completude), com os fatos reais da fase fake door.
// Os marcadores [REVISAR: ...] são lacunas jurídicas propositais (DPO/Felipe fecha) e
// aparecem em destaque amarelo na página.

export const PRIVACIDADE: LegalDoc = {
  "title": "Política de Privacidade",
  "intro": "O Lar do Pet ainda não foi lançado: hoje este site coleta apenas o e-mail de quem quer ser avisado do lançamento, junto com a origem do clique e a data e hora do envio. Esta política explica, em linguagem simples, o que fazemos com essas informações.",
  "sections": [
    {
      "heading": "Quem somos",
      "paragraphs": [
        "O Lar do Pet é um projeto do Instituto Corre Digital, associação civil sem fins lucrativos, inscrita no CNPJ 39.454.429/0001-94, com sede em São Paulo (SP).",
        "Para efeitos da Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018), o Instituto Corre Digital é o controlador dos dados descritos nesta política. Qualquer dúvida pode ser enviada para contato@corredigital.ong.br."
      ]
    },
    {
      "heading": "O que esta política cobre hoje (e o que fica para depois)",
      "paragraphs": [
        "O Lar do Pet será uma plataforma que conecta tutores de pets a cuidadores independentes que atenderão na casa do tutor: cuidado no lar (babá de pet e pernoite), banho, tosa, passeio, veterinário em domicílio e adestramento. Esse serviço ainda está em desenvolvimento.",
        "Hoje o site é apenas uma página de apresentação. Ele capta o seu e-mail para uma lista de aviso de lançamento. Não há cadastro, senha, pagamento nem cuidadores atendendo por aqui.",
        "Quando o aplicativo abrir, a operação real (contas, perfis, pagamentos, fotos do Momento do Cuidado, verificação de cuidadores) terá termos de uso e política de privacidade próprios. Nada disso existe nem vale hoje. Esta política cobre somente a fase atual: a lista de aviso.",
        "As regras de uso desta fase estão na página de Termos de Uso, disponível em /termos, com link também no rodapé do site."
      ]
    },
    {
      "heading": "Sobre os exemplos mostrados na página",
      "paragraphs": [
        "Os números exibidos na página (como 2.400+ cuidadores, 18 mil famílias e avaliação 4,9), os perfis de cuidadores (Marina, Rafael e Bianca) e os depoimentos (Renata S. e Rafael L.) são fictícios e demonstrativos. Eles ilustram como o serviço pretende funcionar depois do lançamento. Nenhuma dessas pessoas é usuária real do serviço.",
        "[REVISAR: confirmar a origem das fotos e imagens usadas nos exemplos antes de afirmar que nenhum dado pessoal real foi utilizado]"
      ]
    },
    {
      "heading": "Quais dados coletamos hoje",
      "paragraphs": [
        "Ao enviar o formulário de aviso, guardamos exatamente três informações, listadas abaixo. Nada além disso: não pedimos nome, telefone ou endereço, e não criamos conta nem senha.",
        "Se você enviar o mesmo e-mail mais de uma vez, nenhum registro novo é criado: a lista não duplica."
      ],
      "bullets": [
        "O e-mail que você digita no formulário.",
        "A origem do clique: se você chegou pelo caminho de tutor ou de cuidador.",
        "A data e a hora do envio."
      ]
    },
    {
      "heading": "Para que usamos o seu e-mail",
      "paragraphs": [
        "Usamos o e-mail para avisar sobre o lançamento e enviar novidades do próprio Lar do Pet. Só isso.",
        "Todo e-mail que enviarmos terá uma instrução clara de descadastro. Você pode sair da lista quando quiser.",
        "Junto ao formulário está a frase 'Ao enviar, você concorda com a Política de Privacidade', com link para esta página. O envio, portanto, depende da sua concordância.",
        "[REVISAR: detalhamento da base legal aplicável (consentimento e eventuais hipóteses complementares), verificação da lista completa de direitos do art. 18 da LGPD e qualificação jurídica de cada serviço de infraestrutura (operador ou controlador autônomo, como no caso do Google Fonts), a validar com apoio jurídico]"
      ]
    },
    {
      "heading": "Onde os dados ficam e quem participa do caminho",
      "paragraphs": [
        "O e-mail vai do seu navegador direto para um banco de dados da Supabase hospedado em São Paulo, no Brasil (região sa-east-1), em um projeto do Instituto. Não há transferência internacional do e-mail da lista.",
        "A página em si é estática e é entregue pela rede global da Cloudflare, Inc., que distribui o conteúdo do site. Ao acessar a página, o seu navegador se comunica com essa rede, que recebe dados técnicos como o seu endereço IP.",
        "As fontes de letra da página (Quicksand e Nunito) são carregadas dos servidores do Google Fonts. Ao abrir a página, o seu navegador faz uma requisição ao Google, que recebe dados técnicos como o seu endereço IP e a identificação do navegador. Esses dados técnicos são recebidos pelo Google e podem ser processados em servidores fora do Brasil, conforme a política de privacidade do próprio Google. A garantia de que não há transferência internacional vale para o e-mail da lista, que fica no Brasil.",
        "Dentro do Instituto, os e-mails da lista só podem ser lidos pela equipe com acesso administrativo. O próprio site não consegue ler a lista: o formulário apenas grava."
      ]
    },
    {
      "heading": "Compartilhamento",
      "paragraphs": [
        "Não vendemos os seus dados e não compartilhamos o seu e-mail com terceiros para fins de publicidade.",
        "Cloudflare e Supabase prestam serviços de infraestrutura ao Instituto, cada uma apenas na função técnica descrita na seção anterior. O Google recebe os dados técnicos do carregamento das fontes por conta própria, sob a política de privacidade do próprio Google.",
        "Podemos ainda fornecer dados se formos obrigados por lei, por ordem judicial ou por requisição de autoridade competente."
      ]
    },
    {
      "heading": "Por quanto tempo guardamos",
      "paragraphs": [
        "[REVISAR: prazo de retenção e destino da lista de e-mails após o lançamento ou em caso de descontinuação do projeto]",
        "Independentemente do prazo, você pode pedir a exclusão do seu e-mail a qualquer momento pelo canal contato@corredigital.ong.br."
      ]
    },
    {
      "heading": "Seus direitos",
      "paragraphs": [
        "A LGPD garante a você, titular dos dados, os direitos listados abaixo. Para exercer qualquer um deles, escreva para contato@corredigital.ong.br."
      ],
      "bullets": [
        "Confirmar se tratamos os seus dados e acessar o que temos (no caso, o seu e-mail, a origem do clique e a data e hora do envio).",
        "Corrigir dados incompletos, inexatos ou desatualizados.",
        "Pedir a exclusão do seu e-mail da lista.",
        "Pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.",
        "Pedir a portabilidade dos dados.",
        "Receber informação sobre com quem compartilhamos os dados.",
        "Ser informado sobre a possibilidade de não fornecer o consentimento e sobre as consequências dessa negativa.",
        "Revogar o consentimento a qualquer momento.",
        "Opor-se a tratamento realizado em desconformidade com a lei.",
        "Apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD)."
      ]
    },
    {
      "heading": "Cookies e rastreamento",
      "paragraphs": [
        "Este site não usa cookies próprios, não usa ferramentas de análise de audiência e não tem rastreadores de publicidade de terceiros.",
        "Além da entrega da própria página pela rede da Cloudflare, descrita acima, a única requisição a serviço de terceiro é o carregamento das fontes de letra nos servidores do Google Fonts."
      ]
    },
    {
      "heading": "Crianças e adolescentes",
      "paragraphs": [
        "Este site é dirigido a público adulto e o formulário não verifica idade. Se você é responsável por uma criança ou adolescente e acredita que o e-mail dela foi cadastrado, escreva para contato@corredigital.ong.br e faremos a exclusão."
      ]
    },
    {
      "heading": "Encarregado de dados",
      "paragraphs": [
        "[REVISAR: nome e contato do encarregado pelo tratamento de dados pessoais (DPO)]",
        "Enquanto essa indicação não é publicada, use o canal contato@corredigital.ong.br."
      ]
    },
    {
      "heading": "Alterações desta política",
      "paragraphs": [
        "Esta política pode mudar, principalmente quando o Lar do Pet for lançado e a operação real começar. A versão nova será sempre publicada nesta mesma página, com a data de atualização."
      ]
    },
    {
      "heading": "Vigência",
      "paragraphs": [
        "[REVISAR: data de início de vigência desta política]"
      ]
    },
    {
      "heading": "Contato",
      "paragraphs": [
        "Instituto Corre Digital, associação civil sem fins lucrativos, CNPJ 39.454.429/0001-94, São Paulo (SP).",
        "E-mail: contato@corredigital.ong.br. Este é o canal para dúvidas sobre privacidade, pedidos de exclusão e exercício de qualquer direito descrito nesta política."
      ]
    }
  ]
}

export const TERMOS: LegalDoc = {
  "title": "Termos de Uso",
  "intro": "Estes termos explicam o que é o site do Lar do Pet hoje e as regras simples para usá-lo. Em resumo: o serviço ainda não existe, e este site serve apenas para avisar você do lançamento e enviar novidades do próprio Lar do Pet.",
  "sections": [
    {
      "heading": "O que é este site hoje",
      "paragraphs": [
        "O Lar do Pet é um projeto do Instituto Corre Digital, associação civil sem fins lucrativos, CNPJ 39.454.429/0001-94, com sede em São Paulo/SP. O responsável por este site é o Instituto.",
        "Estamos construindo uma plataforma que vai conectar tutores de pets a cuidadores independentes que atendem na casa do tutor. Os serviços previstos são: cuidado no lar (babá de pet e pernoite), banho, tosa, passeio, veterinário domiciliar e adestramento.",
        "Hoje, este site é apenas uma página de apresentação desse serviço em desenvolvimento. A única coisa que ele faz é receber seu e-mail (junto com a origem do clique e a data e hora do envio) para uma lista de aviso de lançamento. Não há cadastro de conta, acesso com senha, pagamento, prestação de serviço nem cuidadores operando neste momento."
      ]
    },
    {
      "heading": "Conteúdo ilustrativo (leia com atenção)",
      "paragraphs": [
        "Parte do que você vê nesta página é demonstração de como o serviço deve funcionar depois do lançamento. Esses conteúdos existem para mostrar a proposta do produto e serão removidos ou substituídos quando o serviço abrir.",
        "Não use esses números, perfis, depoimentos ou imagens como base para qualquer decisão. Eles são fictícios e não retratam uma operação real:"
      ],
      "bullets": [
        "Os números exibidos (2.400+ cuidadores, 18 mil famílias atendidas e avaliação 4,9).",
        "Os perfis de cuidadores (Marina, Rafael e Bianca).",
        "Os depoimentos (Renata S. e Rafael L.).",
        "As fotos, que são ilustrativas e não retratam cuidadores ou clientes reais."
      ]
    },
    {
      "heading": "O que estes termos não cobrem",
      "paragraphs": [
        "Estes termos valem só para esta página de apresentação e para a lista de aviso de lançamento.",
        "Quando a plataforma abrir, a operação real (contas de usuário, perfis de cuidadores, pagamentos, fotos do Momento do Cuidado e verificação de cuidadores) terá termos de uso e política de privacidade próprios. Nada disso existe nem vale hoje. Você será informado desses documentos antes de usar o serviço."
      ]
    },
    {
      "heading": "A lista de aviso de lançamento",
      "paragraphs": [
        "Ao enviar o formulário, guardamos apenas três informações: o e-mail que você digitou, a origem do clique (se você se identificou como tutor ou como cuidador) e a data e hora do envio. Nada mais é coletado pelo formulário. Junto a ele está a frase 'Ao enviar, você concorda com a Política de Privacidade', com o texto completo disponível no link.",
        "O simples acesso à página envolve dados técnicos (como endereço IP) tratados pela Cloudflare, que serve o site, e pelo Google Fonts, que fornece as fontes. O detalhe está na Política de Privacidade.",
        "Usaremos seu e-mail para avisar sobre o lançamento e enviar novidades do próprio Lar do Pet. Todo e-mail enviado terá instrução de descadastro. Não vendemos nem compartilhamos seu e-mail com terceiros para fins de divulgação.",
        "Se você enviar o mesmo e-mail mais de uma vez, a lista não cria registro duplicado. Os e-mails da lista só podem ser lidos pela equipe do Instituto com acesso administrativo: o próprio site não consegue ler a lista, ele apenas grava.",
        "O formulário não verifica idade. Este site é dirigido a público adulto. Se você é responsável por um menor e acredita que ele cadastrou um e-mail, escreva para contato@corredigital.ong.br e removeremos o registro."
      ]
    },
    {
      "heading": "Propriedade intelectual",
      "paragraphs": [
        "O nome Lar do Pet, os textos e a identidade visual desta página pertencem ao Instituto Corre Digital. Não copie, reproduza ou use esses elementos sem autorização por escrito.",
        "[REVISAR: situação do registro da marca Lar do Pet no INPI antes de afirmar titularidade de marca]",
        "As imagens exibidas nesta página são ilustrativas e não retratam cuidadores ou clientes reais. [REVISAR: confirmar origem e licença das fotos (banco de imagens, IA, autoral) antes de afirmar procedência]"
      ]
    },
    {
      "heading": "Uso do site",
      "paragraphs": [
        "Pedimos apenas o bom senso de sempre. Podemos remover da lista registros que violem estas regras.",
        "Ao usar este site, você concorda em não:"
      ],
      "bullets": [
        "Cadastrar o e-mail de outra pessoa sem o consentimento dela.",
        "Usar robôs, programas automatizados ou envios em massa para abusar do formulário.",
        "Tentar burlar as proteções do site ou acessar dados que não são seus."
      ]
    },
    {
      "heading": "Isenção e limitação de responsabilidade",
      "paragraphs": [
        "Este site tem caráter informativo. O serviço apresentado está em desenvolvimento: não garantimos data de lançamento, e as funcionalidades mostradas podem mudar ou não existir na versão final.",
        "[REVISAR: cláusula de isenção e limitação de responsabilidade a redigir e validar com o jurídico, observando os limites do Código de Defesa do Consumidor; enquanto não houver redação aprovada, publicar esta seção apenas com o parágrafo acima e não publicar a página com este marcador visível]"
      ]
    },
    {
      "heading": "Privacidade",
      "paragraphs": [
        "O tratamento do seu e-mail e dos demais dados desta página está descrito na Política de Privacidade, disponível em /privacidade e no rodapé do site. Lá você encontra o detalhe do que coletamos, onde os dados ficam guardados (banco de dados em São Paulo, Brasil), o papel da Cloudflare e do Google Fonts, e como exercer seus direitos previstos na LGPD pelo canal contato@corredigital.ong.br."
      ]
    },
    {
      "heading": "Alterações destes termos",
      "paragraphs": [
        "Estes termos podem mudar, principalmente quando a plataforma sair da fase de apresentação. A versão atual estará sempre publicada nesta página. Se a mudança for relevante para quem está na lista de aviso, comunicaremos por e-mail.",
        "[REVISAR: data de vigência desta versão; preencher antes de publicar ou remover esta linha do texto no ar]"
      ]
    },
    {
      "heading": "Lei aplicável e foro",
      "paragraphs": [
        "Estes termos são regidos pelas leis brasileiras.",
        "[REVISAR: foro/comarca competente, a definir com o jurídico; preencher antes de publicar ou remover esta linha do texto no ar]"
      ]
    },
    {
      "heading": "Contato",
      "paragraphs": [
        "Dúvidas sobre estes termos ou sobre o Lar do Pet? Escreva para contato@corredigital.ong.br.",
        "Instituto Corre Digital, associação civil sem fins lucrativos, CNPJ 39.454.429/0001-94, São Paulo/SP."
      ]
    }
  ]
}
