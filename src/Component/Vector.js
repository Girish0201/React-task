import React from 'react';

const Vector = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <div className="text-2xl font-bold">Vector 97</div>
        <div className="flex items-center space-x-4">
          <div className="text-gray-600">Bessie Cooper</div>
          <div className="bg-blue-500 text-white px-3 py-1 rounded">
            Dashboard
          </div>
          <div className="bg-gray-300 text-gray-600 px-3 py-1 rounded">
            Work Space
          </div>
          <div className="bg-gray-300 text-gray-600 px-3 py-1 rounded">Garage</div>
          <div className="bg-gray-300 text-gray-600 px-3 py-1 rounded">
            Settings
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="text-gray-500">Tickets</div>
          <div className="bg-gray-300 text-gray-600 px-3 py-1 rounded">
            Communication
          </div>
          <div className="bg-gray-300 text-gray-600 px-3 py-1 rounded">
            Vetting Negotiation (0)
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-500">15 Columns Selected</div>
            <div className="text-gray-500">Revisit (2025)</div>
          </div>
          <div className="mt-4">
            <div className="bg-white p-4 rounded shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="text-gray-500">Actions</div>
                <div className="text-gray-500">t</div>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-500">Negotiation Panel</div>
                  <div className="text-gray-500">Vetting (133)</div>
                </div>
                <div className="bg-gray-200 p-4 rounded shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-gray-500">Vetted Negotiation</div>
                    <div className="text-gray-500">(6968)</div>
                  </div>
                  <div className="bg-gray-300 p-4 rounded shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-500">Post Approval Queue</div>
                      <div className="text-gray-500">(6)</div>
                    </div>
                    <div className="bg-gray-400 p-4 rounded shadow">
                      <div className="text-gray-500">Out of SLA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vector;
