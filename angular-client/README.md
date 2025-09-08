# MaterialAngularNestNodeMongo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



MaterialAngularNestNodeMongo-client/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── auth/
│   │   │   │   ├── models/
│   │   │   │   │   ├── user.model.ts
│   │   │   │   │   └── auth-response.model.ts
│   │   │   │   ├── guards/
│   │   │   │   │   ├── auth-guard.ts
│   │   │   │   │   └── no-auth-guard.ts
│   │   │   │   ├── pages/
│   │   │   │   │   ├── login/
│   │   │   │   │   │   ├── login.ts
│   │   │   │   │   │   ├── login.html
│   │   │   │   │   │   ├── login.scss
│   │   │   │   │   │   └── login.spec.ts
│   │   │   │   │   └── signup/
│   │   │   │   │       ├── signup.ts
│   │   │   │   │       ├── signup.html
│   │   │   │   │       ├── signup.scss
│   │   │   │   │       └── signup.spec.ts
│   │   │   │   ├── auth-store.ts
│   │   │   │   ├── auth-store.spec.ts
│   │   │   │   └── auth.routes.ts
│   │   │   │
│   │   │   ├── layout/
│   │   │   │   ├── header/
│   │   │   │   │   ├── header.ts
│   │   │   │   │   ├── header.html
│   │   │   │   │   ├── header.scss
│   │   │   │   │   └── header.spec.ts
│   │   │   │   └── footer/
│   │   │   │       ├── footer.ts
│   │   │   │       ├── footer.html
│   │   │   │       ├── footer.scss
│   │   │   │       └── footer.spec.ts
│   │   │   │
│   │   │   ├── interceptors/
│   │   │   │   ├── auth-interceptor.ts
│   │   │   │   └── error-interceptor.ts
│   │   │   │
│   │   │   └── services/
│   │   │       ├── notification-api.ts
│   │   │       └── storage-api.ts
│   │   │
│   │   ├── features/
│   │   │   ├── dashboard/
│   │   │   │   ├── models/
│   │   │   │   │   └── dashboard.model.ts
│   │   │   │   ├── pages/
│   │   │   │   │   └── dashboard-main/
│   │   │   │   │       ├── dashboard-main.ts
│   │   │   │   │       ├── dashboard-main.html
│   │   │   │   │       ├── dashboard-main.scss
│   │   │   │   │       └── dashboard-main.spec.ts
│   │   │   │   ├── components/
│   │   │   │   │   ├── analytics/
│   │   │   │   │   │   ├── analytics.ts
│   │   │   │   │   │   ├── analytics.html
│   │   │   │   │   │   ├── analytics.scss
│   │   │   │   │   │   └── analytics.spec.ts
│   │   │   │   │   ├── profile/
│   │   │   │   │   │   ├── profile.ts
│   │   │   │   │   │   ├── profile.html
│   │   │   │   │   │   ├── profile.scss
│   │   │   │   │   │   └── profile.spec.ts
│   │   │   │   │   ├── settings/
│   │   │   │   │   │   ├── settings.ts
│   │   │   │   │   │   ├── settings.html
│   │   │   │   │   │   ├── settings.scss
│   │   │   │   │   │   └── settings.spec.ts
│   │   │   │   │   ├── reports/
│   │   │   │   │   │   ├── reports.ts
│   │   │   │   │   │   ├── reports.html
│   │   │   │   │   │   ├── reports.scss
│   │   │   │   │   │   └── reports.spec.ts
│   │   │   │   │   └── notifications/
│   │   │   │   │       ├── notifications.ts
│   │   │   │   │       ├── notifications.html
│   │   │   │   │       ├── notifications.scss
│   │   │   │   │       └── notifications.spec.ts
│   │   │   │   ├── services/
│   │   │   │   │   ├── dashboard-api.ts
│   │   │   │   │   ├── analytics-api.ts
│   │   │   │   │   ├── profile-api.ts
│   │   │   │   │   ├── settings-api.ts
│   │   │   │   │   ├── reports-api.ts
│   │   │   │   │   └── notifications-api.ts
│   │   │   │   └── dashboard.routes.ts
│   │   │   │
│   │   │   ├── landing/
│   │   │   │   ├── landing.ts
│   │   │   │   ├── landing.html
│   │   │   │   ├── landing.scss
│   │   │   │   ├── landing.spec.ts
│   │   │   │   └── services/
│   │   │   │       └── landing-api.ts
│   │   │   │
│   │   │   └── about/
│   │   │       ├── about.ts
│   │   │       ├── about.html
│   │   │       ├── about.scss
│   │   │       ├── about.spec.ts
│   │   │       └── services/
│   │   │           └── about-api.ts
│   │   │
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   └── not-found/
│   │   │   │       ├── not-found.ts
│   │   │   │       ├── not-found.html
│   │   │   │       ├── not-found.scss
│   │   │   │       └── not-found.spec.ts
│   │   │   ├── pipes/
│   │   │   │   └── date-pipe.ts
│   │   │   └── utils/
│   │   │       ├── validators.ts
│   │   │       └── constants.ts
│   │   │
│   │   ├── app.ts
│   │   ├── app.html
│   │   ├── app.scss
│   │   ├── app.spec.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   ├── fonts/
│   │   └── data/
│   │
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   │
│   ├── styles/
│   │   ├── styles.scss
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _reset.scss
│   │
│   ├── index.html
│   ├── main.ts
│   └── favicon.ico
│
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md