import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {dirname,resolve,extname,sep} from 'node:path';
const root=dirname(fileURLToPath(import.meta.url));
const port=Number(process.env.PORT)||4187;
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8'};
const server=createServer(async(req,res)=>{
  try {
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    let target=resolve(root,'.'+pathname);
    if(target!==root&&!target.startsWith(root+sep)){res.writeHead(403);res.end('Forbidden');return;}
    if((await stat(target)).isDirectory()) target=resolve(target,'index.html');
    const data=await readFile(target);
    res.writeHead(200,{'Content-Type':types[extname(target)]||'application/octet-stream','Cache-Control':'no-cache'});
    res.end(req.method==='HEAD'?undefined:data);
  }catch(_){res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Page not found');}
});
server.on('error',error=>{console.error(error.code==='EADDRINUSE'?`Port ${port} is busy. Try PORT=4188 npm run dev.`:error.message);process.exitCode=1;});
server.listen(port,'127.0.0.1',()=>console.log(`DumasWriter: http://127.0.0.1:${port}`));
