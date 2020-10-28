Задание 2.
Декомпозиция:
   1.Настройка маршрутизации в App.js (минут 5)
   2.Создание 4-х страниц. Их подключение в App.js. (минут 7)
   3.В экранах логина и ввода сообщения можно вынести окно заполнения как компоненту LoginWindow, а лэйблы и инпуты замапить. Вставить LoginWindow в Login.jsx, Message.jsx. (1 час)
   4.Написать к ним стили, параллельно изучая styled-components.(30 минут)
   5.Добавление кнопки submit + стили.(30 мин)
   6.Понял, что лучше вынести стили кнопки и окна входа, место того, чтобы выносить целую компоненту, а потом ее мапить.(20 мин)
   6.Сделать вход по логину и паролю. Я должен проверить, введенные значения с инпутов, и сверить с данными из стейта. Если ок, буду использовать редирект, если нет, добавлю сообщение об ошибке(2 часа)
   7.Сверстать каркас страницы с покемонами(20 мин) 
   8.Сделать запрос на покемонов, из ответа вытащить нужные данные, замапить карточки.(1 час)
   9.Сделать селекты (20 минут)
   10.Думаю над тем как сделать роут карточки. (1 час)
   11.Понял как сделать. В странице покемона достаю id из url, делаю запрос с помощью этого id. Отрисовываю все с полученными данными. В ответе от сервера, я не нашел текста с описанием как в макете, поэтому вставил lorem (2 часа)
   12.Добавляю в Header.jsx возможность вернуться на главную или на страницу ввода пароля.Не понял как стилизовать Link с помощью styled-components (20 мин)
   13.Добавляю юзера в localStorage. Словил баг, сабмит формы срабатывает только после 2-го клика. (20 минут)
   14.Сделать редирект, если не обнаружен юзер в localStorage. Удаляю ключ Login из localStorage при нажатии Logout. (15 минут)
   15.Сделать запрос при выборе селекта. Не понял на какой url делать запрос.
   16.Чтобы как-то стилизовать Link завел link.css (30 мин)
   17.Залил в github pages (30 мин)
   18.В github pages сбились роуты. Поменял роуты (30 мин)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
