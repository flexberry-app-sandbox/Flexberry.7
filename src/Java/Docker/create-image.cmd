docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 7-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t 7-java/app ../../..
