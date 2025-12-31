'use client';

import { useEffect } from 'react';

/**
 * Insights Table Component
 * This component renders a table structure for investment insights
 * The actual data and filtering is handled by DataTables JavaScript library
 */
export default function InsightsTable() {
  useEffect(() => {
    // DataTables initialization will be handled by toolkit.js
    // This component just provides the HTML structure
  }, []);

  return (
    <div className="c-investment-services-notes__container">
      <div className="container">
        <div className="c-ivestment__table c-ivestment__insight-table">
          <div className="c-block--title">Filter by Category</div>
          <div className="c-ivestment-info">
            <form>
              <div className="row">
                <div className="col-md-24">
                  <div className="c-input-select">
                    <select className="o-input" name="category" id="insights-category">
                      <option value="">All</option>
                      <option value="credit-insights">Credit Insights</option>
                      <option value="thematic-insights">Thematic Insights</option>
                      <option value="fund-insights">Fund Insights</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-24">
                  <div className="c-input-select">
                    <select className="o-input" name="year" id="insights-year">
                      <option value="">Year</option>
                      <option value="2025">2025</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-48">
                  <button type="button" className="c-outline-button" id="clear-filters">
                    CLEAR
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="c-table-three-cols">
            <table id="insights-table" className="dataTable">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Data will be populated by DataTables */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

