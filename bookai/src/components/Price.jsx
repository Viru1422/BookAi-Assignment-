import React from 'react';
import { useTheme } from './ThemeContext';

const Price = () => {
    const { isDarkMode } = useTheme();
    const pricingData = [
        { api: "OpenAI", model: "GPT-3.5", price: "$0.002" },
        { api: "OpenAI", model: "GPT-4", price: "$0.03" },
        { api: "Together AI", model: "Llama-2-70b", price: "$0.0008" },
        { api: "Together AI", model: "Llama-2-13b", price: "$0.0006" }
    ];

    return (
        <div className={` mx-auto py-8 px-4 ${isDarkMode ? 'bg-[url("./src/assets/black-chalk.jpg")] text-white' : 'bg-slate-300 text-black'}`}>
            <h2 className="text-3xl font-bold mb-6 text-center">API Pricing</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full  shadow-md rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-blue-100 text-blue-800 text-left">API</th>
                            <th className="py-2 px-4 bg-blue-100 text-blue-800 text-left">Model</th>
                            <th className="py-2 px-4 bg-blue-100 text-blue-800 text-left">Price per 1K tokens</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pricingData.map((item, index) => (
                            <tr key={index}>
                                <td className="border-t py-2 px-4">{item.api}</td>
                                <td className="border-t py-2 px-4">{item.model}</td>
                                <td className="border-t py-2 px-4">{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Token Estimation</h3>
                <p className={`${isDarkMode ? 'text-white' : ' text-gray-700'}`}>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Billing</h3>
                <p className={`${isDarkMode ? 'text-white' : ' text-gray-700'}`}>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
            </div>
        </div>
    );
};

export default Price;
