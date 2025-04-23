# test/Dockerfile
FROM mcr.microsoft.com/playwright:v1.51.1-jammy 

WORKDIR /tests

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "test"]