FROM node:16

# Робоча директорія всередині контейнера
WORKDIR /usr/src/app

# Копіюємо файли package.json та package-lock.json (якщо є)
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо решту коду додатку
COPY . .

# Порт, який слухає додаток
EXPOSE 3000

# Команда запуску
CMD ["node", "index.js"]


