import React, { useState } from 'react';
import image from '../../../../src/assets/images/noTransactionResult.svg'
import { useNavigate } from 'react-router-dom';

const transactions = [
    {
        id: 1,
        date: 'Jan 24, 2023',
        time: '10:30 AM',
        asset: 'Bitcoin',
        address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        amount: '0.05 BTC',
        type: 'Send',
        status: 'Pending'
    },
    {
        id: 2,
        date: 'Feb 12, 2022',
        time: '10:30 AM',
        asset: 'Ethereum',
        address: '0x32Be343B94f860124dC4fEe278FDCBD38C102D88',
        amount: '2.0 ETH',
        type: 'Receive',
        status: 'Completed'
    },
    {
        id: 3,
        date: 'Mar 5, 2021',
        time: '10:30 AM',
        asset: 'Litecoin',
        address: 'LhQ3d7zsmweU6Hm3cLY2gNdBCsPwHPkAmJ',
        amount: '20.0 LTC',
        type: 'Send',
        status: 'Failed'
    },
    {
        id: 4,
        date: 'Apr 18, 2020',
        time: '10:30 AM',
        asset: 'Bitcoin',
        address: '1Jq5LQVjH6z3LsADp8sJfVUHT2sV5k5tqT',
        amount: '0.1 BTC',
        type: 'Receive',
        status: 'Completed'
    },
    {
        id: 1,
        date: 'Jan 24, 2023',
        time: '10:30 AM',
        asset: 'Bitcoin',
        address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        amount: '0.05 BTC',
        type: 'Send',
        status: 'Pending'
    },
];

const statusColors: { [key: string]: string } = {
    Pending: 'orange',
    Completed: 'green',
    Failed: 'deleteRed',
};

const typeColors: { [key: string]: string } = {
    Send: 'deleteRed',
    Receive: 'green2',
};

const DashboardTransactionPageContainer: React.FC = () => {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');

    const filteredTransactions = transactions.filter(transaction =>
        transaction.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Last 30 days');

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="px-4 lg:px-8 pt-14 pb-10">
            <div className=" flex flex-col gap-16 relative">
                <div className=" bg-white p-4 md:p-6 lg:py-10 lg:px-8 rounded-lg shadow-sm flex flex-wrap items-start justify-between gap-10">
                    <div className='text-left w-full max-w-xl'>
                        <h2 className="text-3xl lg:text-5xl text-dark font-medium mb-3">Manage Transactions</h2>
                        <p className="text-grey text-sm lg:text-base">
                            Stay on top of your finances. Monitor, analyze, and manage your transactions seamlessly with our intuitive platform.
                        </p>
                    </div>
                    <button onClick={() => navigate('/dashboard-transactions/payments')} className="bg-orange2 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-orange">Manage Payment</button>
                </div>

                <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                    <div>
                        <button id="dropdownRadioButton" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5" type="button" onClick={handleToggleDropdown}>
                            <svg className="w-3 h-3 text-gray-500 me-3" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                            </svg>
                            {selectedOption}
                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        {isOpen && (
                            <div id="dropdownRadio" className="z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-10" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                                <ul className="p-3 space-y-1 text-sm text-gray-700" aria-labelledby="dropdownRadioButton">
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100" onClick={() => handleOptionSelect('Last day')}>
                                            <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange2" />
                                            <label htmlFor="filter-radio-example-1" className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Last day</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100" onClick={() => handleOptionSelect('Last 7 days')}>
                                            <input id="filter-radio-example-2" type="radio" value="" name="filter-radio" className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange2" />
                                            <label htmlFor="filter-radio-example-2" className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Last 7 days</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100" onClick={() => handleOptionSelect('Last 30 days')}>
                                            <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange2" />
                                            <label htmlFor="filter-radio-example-3" className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Last 30 days</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100" onClick={() => handleOptionSelect('Last month')}>
                                            <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange2" />
                                            <label htmlFor="filter-radio-example-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Last month</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex items-center p-2 rounded hover:bg-gray-100" onClick={() => handleOptionSelect('Last year')}>
                                            <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" className="w-4 h-4 text-orange bg-gray-100 border-gray-300 focus:ring-orange2" />
                                            <label htmlFor="filter-radio-example-5" className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Last year</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-orange2 focus:border-orange2"
                            placeholder="Search by Asset, Address, Status"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="bg-white w-full overflow-auto shadow-sm rounded p-4 md:p-6 lg:py-10 lg:px-8 transition-all">
                    {filteredTransactions.length === 0 ? (
                        <div className='flex flex-col gap-5 text-center items-center justify-center'>
                            <img className=' h-48 w-full object-contain' src={image} alt="no matching transaction" />
                            <p className="text-dark2 mx-auto text-lg py-14">No matching transactions found.</p>
                        </div>
                    ) : (
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-white">
                                <tr className='gap-5 grid grid-cols-[100px_100px_120px_100px_2fr_100px]'>
                                    <th scope="col" className="pb-4 text-lg font-semibold">Type</th>
                                    <th scope="col" className="pb-4 text-lg font-semibold">Data</th>
                                    <th scope="col" className="pb-4 text-lg font-semibold">Asset</th>
                                    <th scope="col" className="pb-4 text-lg font-semibold">Amount</th>
                                    <th scope="col" className="pb-4 text-lg font-semibold">Address</th>
                                    <th scope="col" className="pb-4 text-lg font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTransactions.map((transaction, index) => (
                                    <tr key={transaction.id} className={`gap-5 grid grid-cols-[100px_100px_120px_100px_2fr_100px] bg-white hover:bg-gray-50 ${index === filteredTransactions.length - 1 ? '' : 'border-b'}`}>
                                        <td className={`text-base text-dark2 pt-8 pb-2 font-medium text-${typeColors[transaction.type]}`}>{transaction.type}</td>
                                        <td className="text-base text-dark2 pt-8 pb-2 grid">
                                            <span>{transaction.date}</span>
                                            <span className='text-grey text-xs'>{transaction.time}</span>
                                        </td>
                                        <td className="text-base text-dark2 pt-8 pb-2">{transaction.asset}</td>
                                        <td className="text-base text-dark2 pt-8 pb-2">{transaction.amount}</td>
                                        <td className="text-base text-dark2 pt-8 pb-2">{transaction.address}</td>
                                        <td className="pt-8 pb-2">
                                            <span className={`inline-block rounded-full w-2 h-2 mr-1 bg-${statusColors[transaction.status]}`}></span>
                                            <span>{transaction.status}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardTransactionPageContainer;
