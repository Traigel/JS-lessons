import { ActionTypes } from './actions';


export type CurrencyType = {
    currencyName: string;               // название валюты
    buyRate: number;                    // курс покупки
    sellRate: number;                   // курс продажи
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;    // валюты
    currentCurrency: string;            // текущая валюта AC3
    isBuying: boolean;                  // покупает/продаёт AC2
    amountOfBYN: string;                // сумма в белорусских рублях AC1
    amountOfCurrency: string;           // количество валюты AC1
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.62,
            sellRate: 2.58,
        },
        {
            currencyName: 'EUR',
            buyRate: 3.1,
            sellRate: 3.06,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.0345,
            sellRate: 0.0341,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: ActionTypes): CurrencyState => {
    switch (action.type) {
        case 'CHANGE_CURRENCY_FIELD_TYPE' : {
            return {
                ...state,
                amountOfBYN: action.amountOfBYN,
                amountOfCurrency: action.amountOfCurrency
            }
        }
        case 'CHANGE_CHANGE_ACTION' : {
            return {
                ...state,
                isBuying: action.isBuying
            }
        }
        case 'CHANGE_CURRENT_CURRENCY' : {
            return {
                ...state,
                currentCurrency: action.currentCurrency
            }
        }
        default:
            return state;
    }
};
