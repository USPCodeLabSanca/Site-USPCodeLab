start-docker:
	@docker compose up --build -d

restart-docker:
	@docker compose down; docker compose up --build -d

run-migration-docker:
	@docker compose run backend npx prisma migrate dev --name "${message}"

run-generate:
	@npx prisma generate

prisma-generate:
	@nvm use 16; npx prisma generate; docker compose down; docker compose build; make start-docker

start-docker-prod:
	@docker compose -f docker-compose.prod.yml up --build -d

restart-docker-prod:
	@docker compose -f docker-compose.prod.yml down; docker compose -f docker-compose.prod.yml up --build -d
