module.exports = {
    /* ---- Origin ----  
     Set a list of origins to be allowed. The value can be one of the following
    
     Boolean: true - Allow current request origin
     Boolean: false - Disallow all
     String - Comma separated list of allowed origins
     Array - An array of allowed origins
     String: * - A wildcard to allow current request origin
     Function - Receives the current origin and should return one of the above values.  
    */
    origin: [
        "http://localhost:3333",
        "https://agrotech.herokuapp.com"
    ],
  
    /* ---- Methods ----
     HTTP methods to be allowed. The value can be one of the following
    
     String - Comma separated list of allowed methods
     Array - An array of allowed methods  
    */
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  
    /* ---- Headers ----  
     List of headers to be allowed via Access-Control-Request-Headers header.
     The value can be one of the following.
    
     String - Comma separated list of allowed headers
     Array - An array of allowed headers
     String: * - A wildcard to allow current request headers
    */
    allowedHeaders: [],
  
    /*---- Expose Headers ----
     A list of headers to be exposed via `Access-Control-Expose-Headers`
     header. The value can be one of the following.
    
     String: Comma separated list of allowed headers
     Array - An array of allowed headers  
    */
    exposedHeaders: [],
  
    /* ---- Credentials ----
     Define Access-Control-Allow-Credentials header. It should always be a
     boolean.  
    */
    credentials: false,
  
    /* ---- optionsSuccessStatus ----
     Define status code success
    */
    optionsSuccessStatus: 200
  }