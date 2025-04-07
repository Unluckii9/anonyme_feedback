start:
	docker compose up --build

stop:
	docker compose down

restart:
	docker compose down && docker compose up --build

logs:
	docker compose logs -f
