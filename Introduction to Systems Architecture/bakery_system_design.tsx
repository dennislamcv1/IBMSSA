import React from 'react';
import { ShoppingCart, Users, Server, Database, Monitor } from 'lucide-react';

export default function BakerySystemDesign() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <h1 className="text-3xl font-bold text-amber-800 mb-2">Final Project: Basic System Design</h1>
        <h2 className="text-xl text-amber-600 mb-6">Crusty Muse Bakery Online Ordering System</h2>
        
        {/* Task 1A: Stakeholders */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <Users className="mr-2" size={24} />
            Task 1A: Key Stakeholders
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-amber-100">
                <tr>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Stakeholder</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Customers</td>
                  <td className="border border-gray-300 p-3">Browse products, add items to cart, place orders, and receive confirmation emails</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="border border-gray-300 p-3">Bakery Staff</td>
                  <td className="border border-gray-300 p-3">View incoming orders, update order status, and prepare orders for pickup/delivery</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Bakery Manager/Owner</td>
                  <td className="border border-gray-300 p-3">Manage product listings, monitor order volumes, and oversee system operations</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="border border-gray-300 p-3">Payment Processor</td>
                  <td className="border border-gray-300 p-3">Process customer payments securely and handle transaction verification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Task 1B: System Components */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <Server className="mr-2" size={24} />
            Task 1B: System Components
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-amber-100">
                <tr>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Use Case</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Input</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Process</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Output</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 font-medium">Status confirmation email to customer</td>
                  <td className="border border-gray-300 p-3">Order ID, customer email, order status update</td>
                  <td className="border border-gray-300 p-3">System retrieves order details, formats email message with status information, and sends via email service</td>
                  <td className="border border-gray-300 p-3">Confirmation email delivered to customer's inbox with order status</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Task 2: SDLC Model */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Task 2: SDLC Model Selection</h3>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <div className="mb-2">
              <span className="font-semibold text-gray-700">Choice of SDLC Model: </span>
              <span className="text-blue-700 font-bold">Agile (Iterative)</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Reason: </span>
              <span className="text-gray-600">
                Agile is ideal for Crusty Muse Bakery because it allows for incremental development with frequent releases. Given the small budget and need for simplicity, we can start with core features (product display and ordering) and add features like staff dashboard and email confirmations in later iterations. This approach allows the bakery to start using the system quickly, provide feedback, and make adjustments based on real-world usage. The iterative nature also reduces risk and allows for changes as business needs evolve.
              </span>
            </div>
          </div>
        </section>

        {/* Task 3: Architecture Pattern */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Task 3: Architecture Pattern Selection</h3>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <div className="mb-2">
              <span className="font-semibold text-gray-700">Choice of Architecture Pattern: </span>
              <span className="text-green-700 font-bold">2-Tier (Client-Server)</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Reason: </span>
              <span className="text-gray-600">
                The 2-tier architecture is the best fit for Crusty Muse Bakery's needs. With only 20-30 orders per day and a small budget, the simpler client-server model is more cost-effective to build and maintain. The server can handle all business logic, data storage, and processing without the added complexity of separating layers. This architecture is easier for non-technical staff to troubleshoot and requires fewer resources to host. It also meets all requirements (mobile compatibility, order management, email notifications) while keeping development time and costs minimal.
              </span>
            </div>
          </div>
        </section>

        {/* Task 4: System Diagram */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <Monitor className="mr-2" size={24} />
            Task 4: Basic System Flow Diagram
          </h3>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                1. Customer
              </div>
              <div className="text-2xl text-gray-400">↓</div>
              <div className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                2. Website
              </div>
              <div className="text-2xl text-gray-400">↓</div>
              <div className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                3. Server
              </div>
              <div className="text-2xl text-gray-400">↓</div>
              <div className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                4. Database
              </div>
              <div className="text-2xl text-gray-400">↓</div>
              <div className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md">
                5. Staff Dashboard
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-amber-100">
                <tr>
                  <th className="border border-gray-300 p-3 text-left font-semibold w-24">Number</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Component</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 font-bold">1</td>
                  <td className="border border-gray-300 p-3">Customer (initiates the order by accessing the system)</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 p-3 font-bold">2</td>
                  <td className="border border-gray-300 p-3">Website (displays products and shopping cart interface to customer)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 font-bold">3</td>
                  <td className="border border-gray-300 p-3">Server (processes orders, handles business logic, sends confirmation emails)</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 p-3 font-bold">4</td>
                  <td className="border border-gray-300 p-3">Database (stores product information, customer orders, and order status)</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 font-bold">5</td>
                  <td className="border border-gray-300 p-3">Staff Dashboard (allows bakery staff to view and update order status)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Task 5: Project Summary */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Task 5: Project Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="bg-amber-50">
                  <td className="border border-gray-300 p-3 font-semibold w-48">Business Problem</td>
                  <td className="border border-gray-300 p-3">Crusty Muse Bakery needs a simple, affordable online ordering system to allow customers to browse and order baked goods while enabling staff to manage orders efficiently. The current manual process is inefficient for handling 20-30 daily orders.</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 font-semibold">System Goal</td>
                  <td className="border border-gray-300 p-3">Create a mobile-friendly online ordering system that displays products with prices, processes customer orders with cart functionality, allows staff to view and update order status, and automatically sends confirmation emails to customers.</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="border border-gray-300 p-3 font-semibold">Technical Choices</td>
                  <td className="border border-gray-300 p-3">2-tier client-server architecture with responsive web design for mobile compatibility, integrated email service for notifications, and simple database for storing products and orders.</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 font-semibold">SDLC Model</td>
                  <td className="border border-gray-300 p-3">Agile (Iterative)</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="border border-gray-300 p-3 font-semibold">Reason for SDLC Choice</td>
                  <td className="border border-gray-300 p-3">Agile allows incremental development starting with core features, enabling quick deployment and feedback collection. This reduces risk, accommodates budget constraints, and allows for adjustments based on actual bakery operations and user feedback.</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 font-semibold">Architecture Pattern</td>
                  <td className="border border-gray-300 p-3">2-Tier (Client-Server)</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="border border-gray-300 p-3 font-semibold">Reason for Architecture Choice</td>
                  <td className="border border-gray-300 p-3">The 2-tier architecture is simpler and more cost-effective for a small business with 20-30 orders per day. It's easier to build, maintain, and troubleshoot while meeting all functional requirements. The reduced complexity aligns with the small budget constraint and limited technical resources.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-8 p-4 bg-amber-100 rounded-lg border-2 border-amber-300">
          <p className="text-sm text-amber-900">
            <strong>Note:</strong> This system design prioritizes simplicity, affordability, and ease of maintenance while meeting all business requirements. The choices reflect the constraints of a small bakery with limited budget and technical resources.
          </p>
        </div>
      </div>
    </div>
  );
}