import React, { useState } from "react"

// export async function getServerSideProps() {
//   const req = await fetch("/some-api")
//   const data = req.json()

//   return {
//     props: { data },
//     // Incremental static regeneration - re-generate single pages in the background
//     // Next can regenerate a page whenever a new request comes in within a certain time interval
//     revalidate: 30
//   }
// }

const tabs = [
  { index: 0, name: "All" },
  { index: 1, name: "Descriptive" },
  { index: 2, name: "Margins" },
  { index: 3, name: "Growth" },
  { index: 4, name: "Dividends" },
  { index: 5, name: "Efficiency" },
  { index: 6, name: "Valuation" },
  { index: 7, name: "Health" },
  { index: 8, name: "Guru Screens" }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

const StockFilters = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleChangeTab = (newValue: number) => {
    setActiveTab(newValue)
  }

  return (
    <>
      <div className='tabs'>
        {/* <a className='tab tab-lifted tab-active'>All</a> */}
        {tabs.map((tab) => (
          <button
            className={classNames(
              tab.index === activeTab ? "tab-active" : "",
              "tab tab-lifted"
            )}
            onClick={() => handleChangeTab(tab.index)}
            key={tab.index}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className='p-1 bg-white'>
        {/* All & Descriptive */}
        {activeTab === 0 || activeTab === 1 ? (
          <>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Country
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Exchange
              </option>
              <option>Small Pie</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Industry
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Sector
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Market Cap
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
          </>
        ) : null}
        {/* All & Margins */}
        {activeTab === 0 || activeTab === 2 ? (
          <>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Gross Profit Margin
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Operating Profit Margin
              </option>
              <option>Small Pie</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Net Profit Margin
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                OCF / Net Income
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
          </>
        ) : null}
        {/* All & Growth */}
        {activeTab === 0 || activeTab === 3 ? (
          <>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Revenue Growth YoY
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Gross Profit Growth YoY
              </option>
              <option>Small Pie</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                EPS Growth YoY
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Free Cash Flow Growth YoY
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Revenue per Share Growth 3Y
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                EPS Growth 3Y
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Revenue per Share Growth 5Y
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                EPS Growth 5Y
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Revenue per Share Growth 10Y
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                EPS Growth 10Y
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Decreasing Shares Outstanding YoY
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Shares Outstanding Growth 3Y
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Shares Outstanding Growth 5Y
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Shares Outstanding Growth 10Y
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
          </>
        ) : null}
        {/* All & Dividends */}
        {activeTab === 0 || activeTab === 4 ? (
          <>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Dividend Yield
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Payout Ratio
              </option>
              <option>Small Pie</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Dividend per Share Growth 3Y
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Dividend per Share Growth 5Y
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Dividend per Share Growth 10Y
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
          </>
        ) : null}
        {/* All & Efficiency */}
        {activeTab === 0 || activeTab === 5 ? (
          <>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Return on Assets
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Return on Equity
              </option>
              <option>Small Pie</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Return on Invested Capital
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Cash Conversion Cycle
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
          </>
        ) : null}
        {/* All & Valuation */}
        {activeTab === 0 || activeTab === 6 ? (
          <>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Price to Earnings
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Price to Earnings to Growth Ratio
              </option>
              <option>Small Pie</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Price to Sales
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Price to Book
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Price to Book
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
          </>
        ) : null}
        {/* All & Health */}
        {activeTab === 0 || activeTab === 7 ? (
          <>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Debt to Equity
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Net Debt to EBITDA
              </option>
              <option>Small Pie</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Total Debt to Capitalization
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                LT Debt to Capitalization
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Current Ratio
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
            <select className='select select-bordered select-sm w-full max-w-xs m-1'>
              <option disabled selected>
                Quick Ratio
              </option>
              <option>Small Apple</option>
              <option>Small Orange</option>
            </select>
          </>
        ) : null}
        {/* All & Guru Screens */}
        {activeTab === 0 || activeTab === 8 ? (
          <>
            <h3>TBD</h3>
          </>
        ) : null}
      </div>
    </>
  )
}

export default StockFilters
