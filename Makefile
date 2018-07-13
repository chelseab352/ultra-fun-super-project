.PHONY: build watch;

watch:
	while true; do make build -s; sleep 2; done;

build: index.js main.css

index.js: $(wildcard src/js/*.js)
	browserify -e src/js -o index.js

main.css: $(wildcard src/sass/*.scss)
	sass src/sass/main.scss main.css