# W5 Database-Crown2_209410694

1.  (local) 請修改 routes/index.js 在 render index.ejs 時傳入學號及姓名，index.ejs 要有姓名及學號，需要用 <%= name %> 及 <%= id %> 接收傳入的學號及姓名，並顯示下圖片。

- Chrome 截圖
- routes/index.js code (程式碼)
- views/index.ejs code (程式碼)

![1.](https://i.imgur.com/6OXUoU4.png)

routes/index.js code

```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: '田晟瑋', id: '209410694' });
});

module.exports = router;

```

views/index.ejs code

```
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>
    <p></p>
    <h3>My name is <%= name %></h3>
    <h3>My student id is <%= id %></h3>
  </body>
</html>
```

---

2.  (local) 將 crown theme 裡面的 index.ejs 複製到 views/crown_xx.ejs，並能在 Chrome 中顯示路由 /crown_xx，如下圖 localhost:3000/crown_xx。標題要有學號及姓名，如 P1 的傳入方式。請繳交

- Chrome 截圖，要有 URL
- routes/crown_xx.js ，相關重點以圖片呈現
- views/crown_xx.ejs ，相關重點以圖片呈現

![2.](https://i.imgur.com/keqpi1J.jpg)

routes/crown_xx.js 相關重點以圖片呈現

```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_94', { title: 'Express', name: '田晟瑋', id: '209410694' });
});

module.exports = router;
```

views/crown_xx.ejs 相關重點以圖片呈現

![3.](https://i.imgur.com/talfM6L.png)
![3.](https://i.imgur.com/rSK3QFV.png)
![3.](https://i.imgur.com/hfGw6ka.png)

---

3. (local) 請將 crown_xx.ejs 裡面 category 五筆資料 PostgreSQL 中，資料庫名稱 crown_xx, table 名稱 category_xx。

- Chrome 截圖

![3.](https://i.imgur.com/YiLTAvn.png)

---

4. (heroku) 請將 P2 這一題的結果，在 heroku server 上顯示，路由是 /crown_xx。

- Chrome 截圖 (要看到 URL，上面有 heroku app )
- Github Repo URL
- Heroku 畫面，要有 app 名稱

![3.](./img/2036.png)

Github Repo URL
[https://github.com/Dennis133/1101-db-crown-209410694](https://github.com/Dennis133/1101-db-crown-209410694)

Heroku 畫面，要有 app 名稱
![3.](https://i.imgur.com/EnbhWE3.jpg)

---

5. (heroku) 請將 P3 資料庫 category_xx 五筆資料，放到 Heroku Posgres 上。

- Chrome 截圖 (要看到 URL，上面有 heroku database, category_xx, 和 5 筆資料 )
- Heroku 畫面，要看到 DATABASE_URL 資料
- 請提供 Heroku DATABASE_URL 資料，並將之拆分提供文字放入 code (```)中
  host: xxxxxxx
  port: 5432
  database: xxxxxxxxx
  username: xxxxxxxxx
  password: xxxxxxxxx

Chrome 截圖 (要看到 URL，上面有 heroku database, category_xx, 和 5 筆資料 )
![3.](https://i.imgur.com/4w15l48.png)

Heroku 畫面，要看到 DATABASE_URL 資料
![3.](https://i.imgur.com/x0RKqyc.png)
請提供 Heroku DATABASE_URL 資料，並將之拆分提供文字放入 code (```)中

```
postgres://feqvcemltmwvom:da484da27ed01bdd0c3069b8f434537b51f29bb6d1344bbf23d873c1c5e083ec@ec2-3-222-24-200.compute-1.amazonaws.com:5432/d2s5petpbvg241
host: ec2-3-222-24-200.compute-1.amazonaws.com
port: 5432
database: d2s5petpbvg241
username: feqvcemltmwvom
password: da484da27ed01bdd0c3069b8f434537b51f29bb6d1344bbf23d873c1c5e083ec
```

---

6. (local) 將 views/crown_xx.ejs 複製一份成 crown2_xx.ejs，能夠直接到 PostgreSQL server 取得 category 5 筆資料，套入到 crown2_xx.ejs 中。在 Chrome 中要顯示路由 /crown2_xx 。標題要有 Crown2_xx (from title) 學號 (from id) 及姓名(from name)。請繳交

- Chrome 截圖，要有 URL
- app.js ，相關重點以圖片標註呈現
- routes/crown2_xx.js，相關重點以圖片標註呈現呈現
- views/crown2_xx.ejs ，相關重點以圖片標註呈現呈現

Chrome 截圖，要有 URL
![3.](https://i.imgur.com/SBAWOQo.jpg)

app.js ，相關重點以圖片標註呈現
![3.](https://i.imgur.com/Ls5WGZH.png)

routes/crown2_xx.js，相關重點以圖片標註呈現呈現

```
var express = require('express');
var router = express.Router();
const crown2Controller_94 = require('../controllers/crown2Controller_94');

/* GET home page. */
router.get('/', crown2Controller_94.getCategories);

module.exports = router;
```

views/crown2_xx.ejs ，相關重點以圖片標註呈現呈現
![3.](https://i.imgur.com/6Oo4xYr.png)
![3.](https://i.imgur.com/OgkrTpS.png)

---

7. (heroku) 請將 P6 這一題的結果，在 heroku server 上顯示，路由是 /crown2_xx，category 資料必須要從 Heroku Posgres 上取得。

- Chrome 截圖 (要看到 URL，上面有 heroku app )
- Github Repo URL

Chrome 截圖 (要看到 URL，上面有 heroku app )
![3.](https://i.imgur.com/WM7DFW0.jpg)

Github Repo URL
[https://github.com/Dennis133/1101-db-crown-209410694](https://github.com/Dennis133/1101-db-crown-209410694)

---

8. (local) 實作 api 路由 /api_xx/category_xx，能夠直接到 PostgreSQL server 取得 category 5 筆資料並以 json 方式顯示。

- Chrome 截圖，要有 路由 /api_xx/category_xx
- app.js ，相關重點以圖片標註呈現
- routes/api_xx.js，相關重點以圖片標註呈現呈現
- controllers/apiCrown2Controller_xx.js ，相關重點以圖片標註呈現呈現

Chrome 截圖，要有 路由 /api_xx/category_xx
![3.](https://i.imgur.com/XhX9eEi.png)

app.js ，相關重點以圖片標註呈現
![3.](https://i.imgur.com/Ls5WGZH.png)
![3.](https://i.imgur.com/MVBMubp.png)

routes/api_xx.js，相關重點以圖片標註呈現呈現

```var express = require('express');
var router = express.Router();
const apiCrown2Controller_94 = require('../controllers/apiCrown2Controller_94');

/* GET home page. */
router.get('/category_94', apiCrown2Controller_94.getCategories);

module.exports = router;
```

controllers/apiCrown2Controller_xx.js ，相關重點以圖片標註呈現呈現

```
const serviceCrown2Controller_94 = require('./serviceCrown2Controller_94');

exports.getCategories = async (req, res) => {
  try {
    let data = await serviceCrown2Controller_94.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('crown2Controller getCategories', err);
  }
};
```

---

9. (heroku) 請將 P8 這一題的結果，在 heroku server 上顯示，路由是 /api_xx/category_xx，category 資料必須要從 Heroku Posgres 上取得。

- Chrome 截圖 (要看到 /api_xx/category_xx，上面有 heroku app )
- Github Repo URL

Chrome 截圖 (要看到 /api_xx/category_xx，上面有 heroku app )
![3.](https://i.imgur.com/zXHAJSz.png)

Github Repo URL
[https://github.com/Dennis133/1101-db-crown-209410694](https://github.com/Dennis133/1101-db-crown-209410694)
