FROM node:16-alpine

WORKDIR /app

COPY package.json .
RUN yarn --frozen-lockfile

COPY createJWT.js .

CMD ["yarn", "generate"]
