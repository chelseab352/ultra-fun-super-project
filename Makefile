.PHONY: build watch install;

jsSrc := $(shell find src/js/ -type f -name '*.js')
sassSrc := $(shell find src/sass/ -type f -name '*.scss')

watch:
	while true; do make build -s; sleep 2; done;

build: index.js main.css

index.js:  $(wildcard $(jsSrc))
	browserify -e src/js -o index.js

main.css: $(wildcard $(sassSrc))
	sass src/sass/main.scss main.css

install:
	npm install -g http-server && \
	npm install -g browserify && \
	npm install -g sass && \
	yarn