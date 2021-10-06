# First one

![1.](https://i.imgur.com/6OXUoU4.png)

---

![2.](https://i.imgur.com/keqpi1J.jpg)

---

![3.](https://i.imgur.com/69lRB16.png)

---

![4.](https://i.imgur.com/3umkibF.png)

---

![5.](https://i.imgur.com/Av7yREY.png)

```
const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crown_94',
  password: '0000',
  port: 5432,
});

pool.query('SELECT * from category_94', (err, res) => {
  console.log(JSON.stringify(res.rows));
});

module.exports = pool;
```

---
