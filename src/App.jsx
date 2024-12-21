import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState("BDT");
  const [to, setTo] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState('');

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    const tempAmount = amount;
    setAmount(convertedAmount);
    setConvertedAmount((tempAmount * currencyInfo[to]).toFixed(2));
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  };

  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-fixed bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5466785/pexels-photo-5466785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="w-full max-w-lg p-8 rounded-lg shadow-2xl bg-white/50 backdrop-blur-xl">
        <h1 className="mb-6 text-4xl font-extrabold text-center text-blue-800">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <div className="flex justify-center my-6">
            <button
              type="button"
              className="flex items-center justify-center text-white transition transform rounded-full shadow-lg w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-110"
              onClick={swap}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582M20 20v-5h-.582M7 11l-3 3m0 0l3 3m-3-3h16M17 13l3-3m0 0l-3-3m3 3H4"
                />
              </svg>
            </button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
          <button
            type="submit"
            className="w-full py-4 mt-6 text-lg font-bold text-white transition transform rounded-lg bg-gradient-to-r from-green-500 to-green-700 hover:shadow-xl"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;