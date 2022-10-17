import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  ArrowPathIcon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon
} from "@heroicons/react/24/outline"

const solutions = [
  {
    name: "Country"
  },
  {
    name: "Industry"
  },
  {
    name: "Sector"
  },
  {
    name: "Market Cap"
  },
  {
    name: "Exchange"
  },
  {
    name: "Gross Profit Margin"
  },
  {
    name: "Operating Profit Margin"
  },
  {
    name: "Net Profit Margin"
  },
  {
    name: "OCF/Net Income"
  },
  {
    name: "Revenue Growth YoY"
  },
  {
    name: "Gross Profit Growth YoY"
  },
  {
    name: "EPS Growth YoY"
  },
  {
    name: "Revenue Growth YoY"
  },
  {
    name: "Free Cashflow Growth YoY"
  },
  {
    name: "Revenue per Share Growth 3Y"
  },
  {
    name: "EPS Growth 3Y"
  },
  {
    name: "Revenue per Share Growth 5Y"
  },
  {
    name: "EPS Growth 5Y"
  },
  {
    name: "Revenue per Share Growth 10Y"
  },
  {
    name: "Dividen Yield"
  },
  {
    name: "Payout Ration"
  },
  {
    name: "Dividend per Share Growth 3Y"
  }
]

const callsToAction = [
  { name: "Watch Demo", href: "#", icon: PlayIcon },
  { name: "Contact Sales", href: "#", icon: PhoneIcon }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

const TableFilter = () => {
  return (
    <>
      <div className='flex items-center py-6 justify-start relative'>
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? "text-gray-900" : "text-gray-500",
                  "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 px-4"
                )}
              >
                <span>Solutions</span>
              </Popover.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-200'
                enterFrom='opacity-0 translate-y-1'
                enterTo='opacity-100 translate-y-0'
                leave='transition ease-in duration-150'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-1'
              >
                {/* sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 👇*/}
                <Popover.Panel className='absolute z-10 mt-3 w-full transform'>
                  <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                    <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
                        >
                          {/* <item.icon
                            className='h-6 w-6 flex-shrink-0 text-indigo-600'
                            aria-hidden='true'
                          /> */}
                          <div className=''>
                            <p className='text-xs font-medium text-gray-900'>
                              {item.name}
                            </p>
                            {/* <p className='mt-1 text-sm text-gray-500'>
                              {item.description}
                            </p> */}
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className='space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                      {callsToAction.map((item) => (
                        <div key={item.name} className='flow-root'>
                          <a
                            href={item.href}
                            className='-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100'
                          >
                            <item.icon
                              className='h-6 w-6 flex-shrink-0 text-gray-400'
                              aria-hidden='true'
                            />
                            <span className='ml-3'>{item.name}</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </>
  )
}
export default TableFilter
