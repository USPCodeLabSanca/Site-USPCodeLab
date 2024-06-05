## Ei amigo, como eu rodo isso?

Simples! Apenas rode no seu terminal (que espero que seja Linux) o comando:

```bash
make start-docker
```

Ah, mas óbvio, dê um npm install pra não dar erro de lint e etc.

Isso já irá iniciar o Banco de dados, o servidor e o PGWeb. O PGWeb é basicamente um PhpMyAdmin. Para acessar utilize o localhost:8081. Os dados vem zerados. Uma boa ideia de improvement é criar uma pastas de seeds iniciais!

A API-Key é "secret" (como veio em .env.example).

Caso precise de instalar novas dependências, você precisa reiniciar :D É simples!!!!!

```bash
make restart-docker
```

## E pra fazer uma migration, queridão?

Faz suas alterações no schema.prisma e depois basta mandar uns comandinhos legais:

```bash
make run-migration-docker message="eu_amo_viver_e_essa_migration_mostra_isso"
make run-generate-docker
make restart-docker
```
