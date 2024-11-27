import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency= "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}){

    const id = useId()
    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1-2'>
                <label htmlFor="currency" className='text-black/40 mb-2 inline-block'>label</label>
                <input type='number' className='outline-none w-full bg-transparent py-0.5' placeholder='Amount' disabled={amountDisabled} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} id={id}/>
            </div>
            <div className='w-1-2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 inline-block'>Currency type</p>
                <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={selectedCurrency} onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}} disabled={currencyDisabled}>
                    {currencyOptions.map(() => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox