import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import {CurrencyType} from '../../redux/currencyReducer';
import {useDispatch, useSelector} from "react-redux";
import {changeActionAC, changeCurrencyFieldAC, changeCurrentCurrencyAC} from "../../redux/actions";
import {IGlobalState} from "../../redux/state";


export const CurrencyExchangeContainer: React.FC = () => {

    const currencies = useSelector<IGlobalState, Array<CurrencyType>>(state => state.currency.currencies)
    const currentCurrency = useSelector<IGlobalState, string>(state => state.currency.currentCurrency)
    const isBuying = useSelector<IGlobalState, boolean>(state => state.currency.isBuying)
    const amountOfBYN = useSelector<IGlobalState, string>(state => state.currency.amountOfBYN)
    const amountOfCurrency = useSelector<IGlobalState, string>(state => state.currency.amountOfCurrency)
    const dispatch = useDispatch()

    let currencyRate: number = 0;   // курс валюты
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyFieldHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    dispatch(changeCurrencyFieldAC(value, value));
                } else {
                    dispatch(changeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
                }
            } else {
                if (value === '') {
                    dispatch(changeCurrencyFieldAC(value, value));
                } else {
                    dispatch(changeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? dispatch(changeActionAC(true)) : dispatch(changeActionAC(false));
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && dispatch(changeCurrentCurrencyAC(e.currentTarget.dataset.currency));
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyFieldHandler}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};
