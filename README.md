# JsonplaceholderTest assignment - Vitaliy Maltsev

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Notes from Vitaliy

- I didn't add routing (with it's advantages as lazy loading), since there is no need for it in such small app
- I added some tests, but nothing special, since there is not much complex logic. I also was not intending to get 100% coverage (got 82% though), but I generally don't believe it should be an ultimate goal of every project
- I prefer to use change detection strategy ONPUSH in real life applications due to it's many benefits, but it does not make much sense here, so I left a default one.  
