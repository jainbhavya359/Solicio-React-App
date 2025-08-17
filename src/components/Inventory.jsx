import React from "react";

export default function Inventory (){
    return (
        <main className="flex flex-col justify-center items-center w-full bg-gray-50">
            <div className="m-5 p-4 w-2/3">
                <header className="mb-5 flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold p-7">Business Optimization</h1>
                    <p className="text-lg text-gray-500">Manage your inventory, track sales, and optimize your business operations.</p>
                </header>

                <div className="flex flex-col justify-start rounded-xl shadow-md m-5 p-5 w-full">
                    <h2 className="text-3xl text-indigo-700 font-bold border-b-2 pb-3 ml-4">Inventory Management</h2>
                    <div className="flex justify-stretch">
                        <button className="w-full p-2 m-4 rounded-xl bg-blue-400" onclick="showForm('bought')">Bought</button>
                        <button className="w-full p-4 m-4 rounded-xl bg-red-400" onclick="showForm('sold')">Sold</button>
                    </div>
                </div>

                <div className="flex flex-col justify-start rounded-xl shadow-md m-5 p-5 w-full">
                    <h3 className="text-3xl font-bold border-b-2 pb-3 ml-4 text-green-600">Record a New Purchase</h3>
                    <div className="input-grid">
                        <div className="form-group">
                            <label for="bought-product-name">Product Name</label>
                            <input type="text" id="bought-product-name" placeholder="e.g., Steel Pipes" />
                        </div>
                        <div className="form-group">
                            <label for="bought-quantity">Quantity</label>
                            <input type="number" id="bought-quantity" min="1" value="1" />
                        </div>
                    </div>
                    <button className="action-button btn-bought" onclick="recordTransaction('bought')">Add to Stock</button>
                </div>

                <div id="sold-form-container" class="section-card hidden">
                    <h3 className="sub-heading">Record a New Sale</h3>
                    <div className="input-grid">
                        <div className="form-group">
                            <label for="sold-product-name">Product Name</label>
                            <input type="text" id="sold-product-name" placeholder="e.g., Steel Pipes" />
                        </div>
                        <div className="form-group">
                            <label for="sold-quantity">Quantity</label>
                            <input type="number" id="sold-quantity" min="1" value="1" />
                        </div>
                    </div>
                    <button className="action-button btn-sold" onclick="recordTransaction('sold')">Remove from Stock</button>
                </div>

                <div className="section-card">
                    <h2 className="section-heading text-emerald">Current Stock Report</h2>
                    <div id="stock-report" className="report-content"><p className="text-secondary">Your inventory report will appear here once you add products.</p></div>
                </div>

                <div className="section-card">
                    <h2 className="section-heading text-teal">Sales Report</h2>
                    <div id="sold-report" className="report-content">
                        <h3 className="sub-heading">Most Selling Product (This Week)</h3>
                        <h3 className="sub-heading mt-6">Sales History</h3>
                        <table id="sold-history-table">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody><tr><td colspan="3" className="text-secondary text-center">No sales history yet.</td></tr></tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </main>
    );
}