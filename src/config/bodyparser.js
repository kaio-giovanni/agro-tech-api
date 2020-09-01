module.exports = {
    json: {
      
        /* ---- limit ----
        * Controla o tamanho máximo do corpo da solicitação.
        * Se este for um número, o valor especifica o número de bytes; 
        * Se for uma sequência, o valor é passado para a biblioteca de bytes para análise.
        */
        limit: '1mb',
    
        /* ---- strict ----
        * Quando definido como true, aceitará apenas matrizes e objetos; 
        * Quando false aceitará qualquer coisa que o JSON.parse aceita.
        */
        strict: true,
    
        /* ---- types ----
        * É usado para determinar que tipo de mídia o middleware analisará.
        */
        types: [
          'application/json',
          'application/json-patch+json',
          'application/vnd.api+json',
          //'application/csp-report'
        ]
    },
    urlencoded: {
        extended: false
    }
}