install:
	npm install

build:
	npm run build

start:
	npx babel-node -- src/bin/gendiff.js

publish:
	npm publish

lint:
	npx eslint ./

test:
	npm run test

watch:
	npm test -- --watch
