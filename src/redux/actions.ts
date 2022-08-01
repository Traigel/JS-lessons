export type ChangeCurrencyFieldType = ReturnType<typeof changeCurrencyFieldAC>
export type ChangeActionACType = ReturnType<typeof changeActionAC>
export type ChangeCurrentCurrencyType = ReturnType<typeof changeCurrentCurrencyAC>

export type ActionTypes = ChangeCurrencyFieldType | ChangeActionACType | ChangeCurrentCurrencyType

export const changeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string) => { //поле изменения валюты
    return {
        type: 'CHANGE_CURRENCY_FIELD_TYPE',
        amountOfBYN, amountOfCurrency
    } as const
};

export const changeActionAC = (isBuying: boolean) => {  //изменить покупку/продажу
    return {
        type: 'CHANGE_CHANGE_ACTION',
        isBuying
    } as const
};

export const changeCurrentCurrencyAC = (currentCurrency: string) => {  //изменить текущую валюту
    return {
        type: 'CHANGE_CURRENT_CURRENCY',
        currentCurrency
    } as const
};
