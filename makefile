up:
	docker-compose up

stop:
	docker-compose stop

app:
	docker-compose exec app sh

rebuild:
	docker-compose up -d --build --force-recreate

logs:
	docker-compose logs -f

api:
	docker-compose exec api sh
