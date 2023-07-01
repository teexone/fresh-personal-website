FROM denoland/deno:alpine

WORKDIR /app
COPY . .
RUN deno cache --unstable main.ts
ENTRYPOINT [ "deno", "run", "--allow-net", "--allow-read", "--allow-write", "--allow-env", "--allow-run", "--unstable", "main.ts" ]
