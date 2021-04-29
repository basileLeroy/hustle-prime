const { readFileSync: readFile } = require ( `fs` )                                                     
const { createServer: http }     = require ( `http` )                                                   
const { createServer: https }    = require ( `https` )                                                  
const { URL }                    = require ( `url` )                                                    
                                                                                                        
http ( ( request, response ) =>                                                                         
{ response.writeHead (                                                                                  
    307,                                                                                                
    { location: `https://hustleprime.fun${ request.url }` }                                             
  ).end ( )                                                                                             
} ).listen ( 3680 )                                                                                     
                                                                                                        
const cert = readFile ( `${__dirname}/../letsencrypt/live/hustleprime.fun/fullchain.pem`, `utf8` )      
const key  = readFile ( `${__dirname}/../letsencrypt/live/hustleprime.fun/privkey.pem`, `utf8` )        
                                                                                                        
const html = readFile ( `${__dirname}/build/index.html`, `utf8` )                                       
                                                                                                        
const mimeTypes                                                                                         
= {                                                                                                     
    htm:  `text/html`,                                                                                  
    html: `text/html`,                                                                                  
    css:  `text/css`,                                                                                   
    js:   `text/javascript`,                                                                            
    png:  `image/png`,                                                                                  
    svg:  `image/svg+xml`,                                                                              
    ico:  `image/vnd.microsoft.icon`,                                                                   
    gif:  `image/gif`,                                                                                  
    jpg:  `image/jpg`,                                                                                  
    jpeg: `image/jpeg`                                                                                  
  }                                                                                                     
                                                                                                        
https ( { key, cert },                                                                                  
( request, response ) =>                                                                                
{ try {                                                                                                 
    const url = new URL ( request.url, `https:\\hustleprime.fun` )                                                      const url = new URL ( request.url, `https://hustleprime.fun` )                                      
    url.pathname = url.pathname                                                                         
      .replace ( /(\/\/)|(\.\.\/)/g, `/` )                                                              
      .replace ( /\/\//g, `/` )                                                                         
    let ext = url.pathname.match ( /.*\.(?<ext>[^.]*)$/ )?.groups?.ext                                  
    if ( mimeTypes [ ext ] )                                                                            
    { let buffer = readFile ( `${__dirname}/build/${url.pathname}` )                                    
      response.writeHead ( 200, { 'content-type': mimeTypes[ ext ] } )                                  
        .end ( buffer )                                                                                 
      return                                                                                            
    }                                                                                                   
  } catch ( _ ) { console.log ( _ ) }                                                                                                                                        
  response.writeHead ( 200, { 'content-type': `text/html` } )                                           
    .end ( html )                                                                                       
} ).listen ( 3643 )
