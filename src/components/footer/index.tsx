import { HeartIcon } from "@heroicons/react/24/outline"

const Footer = () => {
  return (
    <footer className='py-3 px-8'>
      <p className='mb-0'>
        <span className='float-left d-block d-md-inline-block mt-25'>
          COPYRIGHT © {new Date().getFullYear()}{" "}
          <a
            className='text-blue-600'
            href='https://andreibojor.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            bojor
          </a>
          <span className='invisible sm:visible'>, All rights Reserved</span>
        </span>
        <span className='float-right invisible md:visible'>
          Hand-crafted & Made with{" "}
          <HeartIcon className='h-6 w-6 inline-block text-red-500' aria-hidden='true' />
        </span>
      </p>
    </footer>
  )
}

export default Footer
