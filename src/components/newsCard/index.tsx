import Image from "next/image"
import React from "react"

type Props = {
  title: string
  description: string
  img: string
}

const NewsCard = ({ title, description, img }: Props) => {
  return (
    <div className='flex flex-col lg:flex-row justify-between'>
      <div className='w-full lg:w-4/6 lg:pr-4'>
        <h4 className='text-gray-800 pb-1 font-semibold'>{title}</h4>
        <p className='text-sm pb-1'>{description}</p>
        <div className='text-gray-500 text-xs'>Liangping Gao 6 hours ago</div>
      </div>

      <div className='relative w-full lg:w-2/6'>
        <Image
          src={img}
          alt='article_image'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
    </div>
  )
}

export default NewsCard
