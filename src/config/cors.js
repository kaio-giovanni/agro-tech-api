module.exports = {
    /* ---- Origin ----  
     Lista de Origins que serão aceitas.
    */
    origin: [
        "http://localhost:3000",
        "https://agrotech.herokuapp.com"
    ],
  
    /* ---- Methods ----
     Métodos HTTP que serão aceitos.
    */
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  
    /* ---- Headers ----  
     Lista de cabeçalhos que serão aceitos via Access-Control-Request-Headers.
    */
    allowedHeaders: [
        "content-lenght", "content-type"
    ],
  
    /*---- Expose Headers ----
     Lista de cabeçalhos exposed via Access-Control-Expose-Headers
    */
    exposedHeaders: [],
  
    /* ---- Credentials ----
     Define o cabeçalho Access-Control-Allow-Credentials.
    */
    credentials: false,
  
    /* ---- optionsSuccessStatus ----
     Define codigo status de sucesso.
    */
    optionsSuccessStatus: 200
  }