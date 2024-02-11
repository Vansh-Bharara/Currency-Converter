import React, {useId} from 'react'

function InputBox({
    label, //from or to
    amount, //amount value
    onAmountChange, 
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        //we have used {} in className because we are injecting javascript inside it as we are using ${}here 
        <div className={`bg-white p-3 rounded-lg text-lg flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/60 mb-2 inline-block">
                    {label}
                </label>
                <input  
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 font-bold"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    //we have used && to check if onAmountChange method is available or we can say is provided during the call , then only we will use it to avoid crash
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/60 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-300 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;