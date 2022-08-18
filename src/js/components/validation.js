import { validateForms } from '../functions/validate-forms';
const rules = [
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Недопустимый формат'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Недопустимый формат'
      }
    ]
  },
];
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимальное количество символов 3'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Недопустимый формат'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Недопустимый формат'
      }
    ]
  },
];


const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.about__form', rules, afterForm);
validateForms('.contacts__form', rules1, afterForm);
