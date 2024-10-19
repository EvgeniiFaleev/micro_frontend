import { registerApplication, start } from "single-spa";

// Регистрация микрофронтенда header
registerApplication({
    name: "@my-app/header",
    app: () =>
        System.import(
            "@my-app/header"
        ),
    activeWhen: ["/"] // Активен на всех маршрутах
});

// Регистрация микрофронтенда catalog
registerApplication({
    name: "@my-app/catalog",
    app: () =>
        System.import(
            "@my-app/catalog"
        ),
    activeWhen: ["/catalog"] // Активен при переходе на /catalog
});

// Регистрация микрофронтенда cart
registerApplication({
    name: "@my-app/cart",
    app: () =>
        System.import(
            "@my-app/cart"
        ),
    activeWhen: ["/cart"] // Активен при переходе на /cart
});

// Регистрация микрофронтенда на Vue
registerApplication({
    name: "@my-app/vue-app",
    app: () =>
        System.import(
            "@my-app/vue-app"
        ),
    activeWhen: ["/vue"] // Активен при переходе на /vue
});

// Регистрация микрофронтенда на Angular
registerApplication({
    name: "@my-app/angular-app",
    app: () =>
        System.import(
            "@my-app/angular-app"
        ),
    activeWhen: ["/angular"] // Активен при переходе на /angular
});

// Начинаем работу single-spa
start();
