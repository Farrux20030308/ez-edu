#!/bin/bash

echo "📦 Добавление файлов..."
git add .

echo "✏️ Введите сообщение коммита:"
read message
git commit -m "$message"

echo "🚀 Пушим в репозиторий..."
git push

echo "🌐 Деплой на GitHub Pages..."
npm run deploy

echo "✅ Готово! Сайт обновлён."
