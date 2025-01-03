# README

## To Run the Application: Use ts-node to run your TypeScript file:

    npm install
    npm install -D typescript ts-node
    npx ts-node src/index.ts

## How I created this project:

  ### Initialize a New Node.jsProject:

    mkdir ethereum-verification
    cd ethereum-verification
    npm init -y

  ### Install Dependencies:

    npm install ethers dotenv

  ### Create Directory Structure:

    mkdir src
    touch src/index.ts
    touch .env

  ### Set Up Environment Variables: 

    Open the .env file and add your HASH_STRING:

      HASH_STRING=Sign in at UTU

  ### Write the TypeScript Code: Open src/index.ts and add the  code

  ### Compile and Run the TypeScript Code: 

    Install TypeScript and the ts-node package to run TypeScript directly in Node.js:

      npm install -D typescript ts-node

  ### Add a tsconfig.json file to your project:

    {
      "compilerOptions": {
          "target": "ES6",
          "module": "commonjs",
          "outDir": "./dist",
          "rootDir": "./src",
          "strict": true
      }
    }

