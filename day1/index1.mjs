import { readFileSync } from 'fs';

const filePath = './day1/index.txt';
function readColumnsFromFile(filePath) {
    try {
        // Чтение файла синхронно
        const data = readFileSync(filePath, 'utf8');

        // Разделение строк на массив строк
        const lines = data.split('\n');

        // Инициализация двух массивов для хранения столбцов
        let column1 = [];
        let column2 = [];

        // Обработка каждой строки
        lines.forEach(line => {
            if (line.trim() !== '') { // Пропускаем пустые строки
                // Разделение строки на числа, игнорируя множественные пробелы
                const numbers = line.split(/\s+/).map(Number);
                column1.push(numbers[0]);
                column2.push(numbers[1]);
            }
        });

        return { column1, column2 };
    } catch (err) {
        console.error('Ошибка чтения файла:', err);
        return { column1: [], column2: [] };
    }
}

const { column1, column2 } = readColumnsFromFile(filePath);

const firstColumn = column1;
const secondColumn = column2;


function difference(column1, column2) {
    let sortedFirst = column1.sort((a, b) => a - b);
let sortedSecond = column2.sort((a, b) => a - b);
    let diff = [];
for (let i = 0; i < sortedFirst.length; i++) {
    diff.push(Math.abs(sortedFirst[i] - sortedSecond[i]));
}
return diff.reduce((a, b) => a + b);
}
console.log(difference(firstColumn, secondColumn))
