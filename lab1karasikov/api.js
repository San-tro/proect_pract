const express = require("express");
const moment = require('moment');
moment.locale('ru');
const router = express.Router();



router.get("/:id", (req,res)=>{

    function str_split(string, length) {
        var chunks, len, pos;

        string = (string == null) ? "" : string;
        length =  (length == null) ? 1 : length;

        var chunks = [];
        var pos = 0;
        var len = string.length;
        while (pos < len) {
            chunks.push(string.slice(pos, pos += length));
        }

        return chunks;
    };


    function morph(number, titles) {
        var cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number[0] > 4 && number[0]<20)? 2 : cases[Math.min(number, 5)] ];
    };

    function number_to_string (num) {
        var def_translite = {
            null: 'ноль',
            a1: ['один','два','три','четыре','пять','шесть','семь','восемь','девять'],
            a2: ['одна','две','три','четыре','пять','шесть','семь','восемь','девять'],
            a10: ['десять','одиннадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'],
            a20: ['двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто'],
            a100: ['сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот'],
            uc: ['копейка', 'копейки', 'копеек'],
            ur: ['рубль', 'рубля', 'рублей'],
            u3: ['тысяча', 'тысячи', 'тысяч'],
            u2: ['миллион', 'миллиона', 'миллионов'],
            u1: ['миллиард', 'миллиарда', 'миллиардов'],
        }
        var i1, i2, i3, kop, out, rub, v, zeros,   ax;

        var _ref = parseFloat(num).toFixed(2).split('.'), rub = _ref[0], kop = _ref[1];
        var leading_zeros = 12 - rub.length;
        if (leading_zeros < 0) {
            return false;
        }

        var zeros = [];
        while (leading_zeros--) {
            zeros.push('0');
        }
        rub = zeros.join('') + rub;
        var out = [];
        if (rub > 0) {
            // Разбиваем число по три символа
            var _ref1 = str_split(rub, 3);
            for (var i = -1; i < _ref1.length;i++) {
                v = _ref1[i];
                if (!(v > 0)) continue;
                var _ref2 = str_split(v, 1), i1 = parseInt(_ref2[0]), i2 = parseInt(_ref2[1]), i3 = parseInt(_ref2[2]);
                out.push(def_translite.a100[i1-1]); // 1xx-9xx
                ax = (i+1 == 3) ? 'a2' : 'a1';
                if (i2 > 1) {
                    out.push(def_translite.a20[i2-2] + (i3 > 0 ?  ' ' + def_translite[ax][i3-1] : '')); // 20-99
                } else {
                    out.push(i2 > 0 ? def_translite.a10[i3] : def_translite[ax][i3-1]); // 10-19 | 1-9
                }

                if (_ref1.length > i+1){
                    var name = def_translite['u'+(i+1)];
                    out.push(morph(v,name));
                }
            }
        } else {
            out.push(def_translite.null);
        }
        // Дописываем название "рубли"
       // out.push(morph(rub, def_translite.ur));
        // Дописываем название "копейка"
       // out.push(kop + ' ' + morph(kop, def_translite.uc));

        // Объединяем маcсив в строку, удаляем лишние пробелы и возвращаем результат
        return out.join(' ').replace(RegExp(' {2,}', 'g'), ' ').trimLeft();
    };


    var id = req.params.id;
    id = number_to_string(id);


    res.send(id);
});

router.get("/dec/:a/:b/:c", (req,res)=>{
    var a = req.params.a;
    var b = req.params.b;
    var c = req.params.c;

    function Calculate(a,b,c) {

        var d = b * b - 4 * a * c;
        if (d < 0) {
            var x1 = "Корня x1 нету";
            var x2 = "Корня x2 нету";
        }
        else if(d > 0) {
            var x1 = (-b + Math.sqrt(d)) / (2 * a);
            var x2 = (-b - Math.sqrt(d)) / (2 * a);
        }
        else{
            var x1 = (-b)/(2*a);
            var x2 = "Корня x2 нету";
        }
        var result = [x1 , x2];
        return result
    }
    res.send(Calculate(a,b,c));

});

router.get("/date/:date", (req,res)=>{
    var date = req.params.date;
    res.send(moment(date, 'DD.MM.YYYY').format('dddd'));
});

router.get("/fib/:index", (req,res)=>{

    var index = req.params.index;
    function func(n) {
        return n <= 1 ? n : func(n - 1) + func(n - 2);
    }
    var result = func(index);
    var div = "<div>" + result + "</div>";
    res.send(div);
});

router.get("/reg/:index", (req,res)=>{
    var index = req.params.index;
    var region = [
    'Республика Адыгея',
    'Республика Башкортостан',
    'Республика Бурятия',
    'Республика Алтай (Горный Алтай)',
    'Республика Дагестан',
    'Республика Ингушетия',
    'Кабардино-Балкарская Республика',
    'Республика Калмыкия',
    'Республика Карачаево-Черкессия',
    'Республика Карелия',
    'Республика Коми',
    'Республика Марий Эл',
    'Республика Мордовия',
    'Республика Саха (Якутия)',
    'Республика Северная Осетия — Алания',
    'Республика Татарстан',
    'Республика Тыва',
    'Удмуртская Республика',
    'Республика Хакасия',
    'Чувашская Республика',
    'Алтайский край',
    'Краснодарский край',
    'Красноярский край',
    'Приморский край',
    'Ставропольский край',
    'Хабаровский край',
    'Амурская область',
    'Архангельская область',
    'Астраханская область',
    'Белгородская область',
    'Брянская область',
    'Владимирская область',
    'Волгоградская область',
    'Вологодская область',
    'Воронежская область',
    'Ивановская область',
    'Иркутская область',
    'Калининградская область',
    'Калужская область',
    'Камчатский край',
    'Кемеровская область',
    'Кировская область',
    'Костромская область',
    'Курганская область',
    'Курская область',
    'Ленинградская область',
    'Липецкая область',
    'Магаданская область',
    'Московская область',
    'Мурманская область',
    'Нижегородская область',
    'Новгородская область',
    'Новосибирская область',
    'Омская область',
    'Оренбургская область',
    'Орловская область',
    'Пензенская область',
    'Пермский край',
    'Псковская область',
    'Ростовская область',
    'Рязанская область',
    'Самарская область',
    'Саратовская область',
    'Сахалинская область',
    'Свердловская область',
    'Смоленская область',
    'Тамбовская область',
    'Тверская область',
    'Томская область',
    'Тульская область',
    'Тюменская область',
    'Ульяновская область',
    'Челябинская область',
    'Забайкальский край',
    'Ярославская область',
    'г. Москва',
    'г. Санкт-Петербург',
    'Еврейская автономная область',
    'Республика Крым',
    'Ненецкий автономный округ',
    'Ханты-Мансийский автономный округ — Югра',
    'Чукотский автономный округ',
    'Ямало-Ненецкий автономный округ',
    'г. Севастополь',
    'Территории, находящиеся за пределами РФ и обслуживаемые Департаментом режимных объектов МВД России',
    'Чеченская республика'];
    if(index == 93 || index == 23 || index == 123){
        var result = "Краснодарский край";
    }else if(index == 24 || index == 84 || index == 88 || index == 124) {
        var result = "Красноярский край";
    }else if(index == 38 || index == 85 || index == 138 ) {
        var result = "Иркутская область";
    }else if(index == 39 || index == 91) {
        var result = "Калининградская область";
    }else if(index == 50 || index == 90 || index == 150 || index == 190 || index == 750) {
        var result = "Московская область";
    }else if(index == 59 || index == 81 || index == 159 ) {
        var result = "Пермский край";
    }else if(index == 75 || index == 80) {
        var result = "Забайкальский край";
    }else if(index == 77 || index == 97 || index == 99 || index == 177 || index == 197 || index == 199 || index == 777 || index == 799) {
        var result = "г. Москва";
    }else if(index < 20){
        var result = region[index - 1];
    }else if(index > 20 && index < 80){
        var result = region[index - 2];
    }else if(index == 102) {
        var result = "Республика Башкортостан";
    }else if (index == 103) {
        var result = "Республика Бурятия";
    }else if (index == 113) {
        var result = "Республика Мордовия";
    }else if (index == 116) {
        var result = "Республика Татарстан";
    }else if (index == 121) {
        var result = "Чувашская Республика";
    }else if (index == 121) {
        var result = "Чувашская Республика";
    }else if (index == 125) {
        var result = "Приморский край";
    }else if (index == 126) {
        var result = "Ставропольский край";
    }else if (index == 134) {
        var result = "Волгоградская область";
    }else if (index == 136) {
        var result = "Воронежская область";
    }else if (index == 142) {
        var result = "Кемеровская область";
    }else if (index == 152) {
        var result = "Нижегородская область";
    }else if (index == 154) {
        var result = "Новосибирская область";
    }else if (index == 161) {
        var result = "Ростовская область";
    }else if (index == 163) {
        var result = "Самарская область";
    }else if (index == 164) {
        var result = "Саратовская область";
    }else if (index == 96 || index == 196) {
        var result = "Свердловская область";
    }else if (index == 173) {
        var result = "Ульяновская область";
    }else if (index == 174) {
        var result = "Челябинская область";
    }else if (index == 98 || index == 178 ) {
        var result = "г. Санкт-Петербург";
    }else if (index == 86 || index == 186) {
        var result = "Ханты-Мансийский автономный округ — Югра";
    }else if (index == 82) {
        var result = "Республика Крым";
    }else if (index == 83) {
        var result = "Ненецкий автономный округ";
    }else if (index == 87) {
        var result = "Чукотский автономный округ";
    }else if (index == 89) {
        var result = "Ямало-Ненецкий автономный округ";
    }else if (index == 92) {
        var result = "г. Севастополь";
    }else if (index == 94) {
        var result = "Территории, находящиеся за пределами РФ и обслуживаемые Департаментом режимных объектов МВД России";
    }else if (index == 95 || index == 20) {
        var result = "Чеченская республика";
    }
    res.send(result);

});


module.exports = router;