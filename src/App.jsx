import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbol, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const [copied, setCopied] = useState(false); // State for copy status

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    const num = "0123456789";
    const symb = "!@#$%^&*()_+=";
    let charac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numbers) charac += num;
    if (symbol) charac += symb;
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * charac.length);
      pass += charac.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, symbol]);

  const copyToClipboard = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, symbol, passwordGenerator]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-center text-blue-500 dark:text-blue-400">Password Generator</h1>
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full p-2"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={password}
            className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r ${copied ? 'bg-blue-400 hover:bg-blue-400' : ''}`}
            onClick={copyToClipboard}
          >
            {copied ? '✓' : 'Copy'}
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-full ml-4"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Include Numbers</label>
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers((prev) => !prev)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Include Symbols</label>
            <input
              type="checkbox"
              checked={symbol}
              onChange={() => setSymbols((prev) => !prev)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
