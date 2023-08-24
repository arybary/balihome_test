# GitUsers

### [Site link]


<a href="[https://balihome-test.vercel.app/]" ># LINK FOR DEPLOUY</a>

### The tech stack is:

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://sass-lang.com/)
- [TypeScript](https://ru.wikipedia.org/wiki/TypeScript)
- [Angular](https://angular.io/)
- [NgRX](https://ngrx.io/)
- [RxJS](https://rxjs.dev/)
- [[boostrap](https://getbootstrap.com/)]

  ##Завдання
Потрібно зробити веб інтерфейс для відображення користувачів та інформації про них з github
- в додатку(Angular) повинно бути 2 роута (/ , /repos)
- на стартовій сторінці буде:
- поле для пошуку зверху(на всю ширину екрана)
- та список знайденого під полем пошуку у 2 колонки(на всю ширину екрана)
- при запуску потрібно завантажити всіх користувачів по https://api.github.com/users та відобразити у списку   avatar_url(показати іконку) | login
- при введенні тексту в поле пошуку, потрібно робити запит на https://api.github.com/search/users?q={username} i відображати у тому ж списку(якщо апі видає помилку потрібно підсвітити поле пошуку червоним і показати текст про помилку над ним)
- при натисненні на один елемент списку, потрібно відкрити роут /repos/{login}
- в роуті /repos/{login} буде список всіх репозиторіїв вибраного користувача ссилка для запиту https://api.github.com/users/{login}/repos", без поля пошуку
- в списку показати   name | description
- при натисненні на один репозиторій - показати модальне вікно з бутстрапа, з детальнішою інфрмацією
- TITLE (name)- зверху жирним шрифтом
- description
- language
- has_issues - показати іконкою (галочка якшо є, хрестик якшо нема)
- html_url - показати ссилкою яка буде відкривати проект в github

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
