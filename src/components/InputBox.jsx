// components/InputBox.js
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`flex flex-col space-y-3 ${className}`}>
      <label htmlFor={amountInputId} className="text-lg font-semibold text-gray-800">
        {label}
      </label>
      <div className="flex items-center p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
        <input
          id={amountInputId}
          className="flex-1 text-lg bg-transparent outline-none"
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
        <select
          className="px-3 py-2 ml-4 text-gray-700 bg-blue-100 border border-gray-400 rounded-lg shadow-sm outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.length > 0 ? (
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))
          ) : (
            <option value="" disabled>
              Loading...
            </option>
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
