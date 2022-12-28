// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// function calculateVolumeAndArea(length) {
//     if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return 'error';
//     }
//     let volume = 0,
//         area = 0;
//      volume = length * length * length;

//      area = 6 * ( length * length);
//      return `cube volume: ${volume} cube area: ${area}`;
// }
// calculateVolumeAndArea(5);
// calculateVolumeAndArea(15);
// calculateVolumeAndArea(15.5);
// calculateVolumeAndArea('15');
// calculateVolumeAndArea(-15);
// console.log(calculateVolumeAndArea(15));

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:



// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

// getCoupeNumber(33)  => 9

// getCoupeNumber(7)  => 2

// getCoupeNumber(300)  => "Таких мест в вагоне не существует"

// getCoupeNumber(0)  => "Таких мест в вагоне не существует"

// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. Конечно, там будет куда больше условий, но смысл остается таким же.

function getCoupeNumber(setNumber) {
    if (typeof(setNumber) !== 'number' || setNumber < 0 || !Number.isInteger(setNumber)) {
        return 'error,wrong number ';
    }
    let i = setNumber;
    for ( i = 0; i <= 36; i++) {  
        if ((i === 0) || (i > 36)) {
            return 'this place in train not exist';
        }
    }
    return Math.ceil (setNumber / 4);
}
getCoupeNumber(33);


// galima buvo be for
function getCoupeNumber(setNumber) {
    if (typeof(setNumber) !== 'number' || setNumber < 0 || !Number.isInteger(setNumber)) {
        return 'error,wrong number ';
    }
       if ((setNumber=== 0) || (setNumber > 36)) {
            return 'this place in train not exist';
        }
        return Math.ceil (setNumber / 4);
    }
getCoupeNumber(33);
console.log(getCoupeNumber(33));