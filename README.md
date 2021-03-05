# Setup NodeJS com TypeScript e ESLint

## Configuração do TypeScript e NodeJS
---

inicializar o git
```bash
git init
```

inicializar o yarn
```bash
npm init -y
```
instalação do typescript como dependência de desenvolvimento:
```bash
npm i -D typescript
```
criar o tsconfig.json
```bash
npx tsc --init
```
criar o diretório src e o arquivo server.ts
```bash
mkdir src
touch src/server.ts
```
para o exemplo instalar o express e as tipagens para o express
```bash
npm i express
npm i -D @types/express
```
instalar o ts-node-dev

ts-node-dev:
- ts => converte arquivo ts para js
- node => executa o código
- nodemon => observa o código
```bash
npm i -D ts-node-dev
```

criar o script para executar com o ts-node-dev o ```server.ts```
- --respawn - Continue observando as alterações após a saída do script
- --transpile-only -  indica que só transpila o código e não verifica se ele está certo ou errado. Nós não precisamos dessa verificação em tempo de desenvolvimento porque o VsCode, mesmo sem Eslint configurado, já faz isso para a gente.
- --ignore-watch node_modules - não ficar observando o diretório node_modules para fazer o restart, torna a execução mais rápida.
- --no-notify - sem notificações quando fizer restart
```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only --ignore-watch node_modules --no-notify src/server.ts"
},
```

configuração do tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es2017",                          
    "module": "commonjs",                     
    "lib": ["es6"],                             
    "allowJs": true,                       
    "outDir": "./dist",                        
    "rootDir": "./src",                       
    "removeComments": true,                
    "typeRoots": [
      "./node_modules/@types",
      "./src/@types"
    ],                          
    "esModuleInterop": true,                  
    "resolveJsonModule": true,
    "experimentalDecorators": true,        
    "emitDecoratorMetadata": true,         
    "skipLibCheck": true,                     
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@controllers/*": ["./src/controllers/*"],
      "@models/*": ["./src/models/*"],
      "@views/*": ["./src/views/*"],
      "@config/*": ["./src/config/*"]
    }
  },
  "include": [
    "src/**/*"
  ]
}
```

instalar o tsconfig-paths para que o ts-node-dev entenda os atalhos @ para os paths.
```bash
npm i -D tsconfig-paths
```
E adicionar no script a flag -r tsconfig-paths/register

___
## Configuração do ESLint
___

instalar o ESLint

```bash
npm i -D eslint
```
Iniciar o ESLint
```bash
npx eslint --init
```

Criar .eslintignore e adicionar os diretórios dist e node_modules
```bash
touch .eslintignore
```

Instalar [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
```bash
npx install-peerdeps --dev eslint-config-airbnb-base
```

Configurar o code-runner para executar typescript
```JSON
{
    "code-runner.executorMap": {

        "javascript": "node",
        "typescript": "node_modules/.bin/ts-node-dev",
    }
}
```