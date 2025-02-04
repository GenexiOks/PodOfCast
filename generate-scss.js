import { readFileSync, writeFileSync } from "fs";

// Чтение файла с компонентом
// Чтение файла с компонентом
const fileContent = readFileSync("./src/pages/AboutPage.jsx", "utf8");

// Регулярное выражение для поиска классов
const classRegex = /styles\.([\w-]+)|styles\["([\w-]+)"\]/g;

// Массив для хранения уникальных классов
const classes = new Set();

let match;
while ((match = classRegex.exec(fileContent)) !== null) {
    // Добавляем найденные классы в Set (для уникальности)
    if (match[1]) classes.add(match[1]); // styles.имя_класса
    if (match[2]) classes.add(match[2]); // styles["имя_класса"]
}

// Генерация SCSS-кода
const scssContent = Array.from(classes)
    .map((cls) => `.${cls} {\n    /* Стили */\n}`)
    .join("\n\n");

// Запись в SCSS-файл
writeFileSync("styles.module.scss", scssContent);

console.log("SCSS-файл успешно создан!");

// node generate-scss.js
