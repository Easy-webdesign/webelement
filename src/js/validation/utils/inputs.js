//Модуль проверки на валидность
import is from 'is_js';

//Функции активации кнопки и добавления ошибок
import { activateButton, renderErrors } from './functions';
import {type, lengthPar} from './params';

//Функция Валидации 
(function(){
    //Инициализация элементов формы
    const inputBox = document.querySelectorAll('.form__box__item');
    const checkbox = document.querySelector('.checkbox input');
    const btn = document.querySelector('.form__box form .btn-form');

    //Объект с названиями методов добавления/удаления классов
    const act = {
        true: 'add',
        false: 'remove'
    }

    //Блокировка кнопки
    btn.addEventListener('click', e => e.preventDefault());
    btn.disabled = true;

    //Проверка на наличие формы на странице и дальнейший функционал
    if(inputBox[0]){
        const arrInputs = [];

        //Добавление всех инпутов в новый массив
        for (let i = 0; i < 3; i++) {
            arrInputs.push(inputBox[i].querySelector('input') || inputBox[i].querySelector('textarea'))
        }
        arrInputs.push(checkbox);

        //Создание объекта валидации
        const valid = arrInputs.reduce((acc, el) => {
            acc[el.name] = false;
            return acc;
        }, {})

        
        //Валидация полей
        arrInputs.forEach(el => {
            el.addEventListener('change', e => {
                let validate = true;
                
                if(type(el) === 'string'){
                    validate = (is[type(el)](el.value) && lengthPar(el)[type(el)]) && validate;
                } 
                if(type(el) === 'number'){
                    validate = (is[type(el)](+el.value) && lengthPar(el)[type(el)]) && validate;
                }
                if(el.type === 'checkbox'){
                    validate = el.checked && validate;
                }

                valid[el.name] = validate;
                
                renderErrors(valid, act);
                activateButton(valid, act, btn);
            })
        })

        
    }
}())