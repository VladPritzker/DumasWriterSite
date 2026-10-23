import {copyFile, mkdir, rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
const root = dirname(fileURLToPath(import.meta.url));
const files = ['index.html','guide.html','styles.css','app.js','site-config.js','assets/app-icon.jpg','assets/app-mist.jpg','assets/app-forest.jpg','assets/app-night.jpg'];
await rm(join(root,'dist'), {recursive:true, force:true});
await mkdir(join(root,'dist/assets'), {recursive:true});
for (const file of files) await copyFile(join(root,file), join(root,'dist',file));
console.log(`Packaged ${files.length} promotional site files into dist/. No app binary or browser editor is included.`);
