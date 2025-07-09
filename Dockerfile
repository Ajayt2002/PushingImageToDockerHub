FROM oven/bun:1

WORKDIR /

COPY ./package.* ./
COPY ./bun.lock ./bun.lock
COPY ./tsconfig.json ./tsconfig.json

RUN bun install

COPY  . .

EXPOSE 3000

CMD [ "bun","run","backend" ]
