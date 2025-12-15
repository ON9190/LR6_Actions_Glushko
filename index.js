const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

// Експортуємо app для використання в тестах
module.exports = app;

// Запускаємо сервер тільки якщо файл запущено напряму
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}


