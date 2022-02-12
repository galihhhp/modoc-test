import React from 'react'
import Image from 'next/image'
import { News } from '../interfaces'
import useTimeSince from '../hooks/useTimeSince'

type Props = {
  res?: News[]
}

const NewsList = ({ res }: Props) => {
  const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <>
      {
        res && res.map((item) => {
          const {
            img_banner,
            img_profile,
            title,
            username,
            created_at,
            news_id,
          } = item
          // const date = new Date(created_at).toISOString().slice(0, 10)
          const time = useTimeSince(new Date(created_at))
          const modoc = username.slice(0, 5)
          const news = username.slice(5, 9)
          const official = username.slice(9)
          const newUsername = `${capitalizeFirstLetter(modoc)} ${capitalizeFirstLetter(news)} ${capitalizeFirstLetter(official)}`
          return (
            <div className="flex mb-3" key={news_id}>
              <Image src={img_banner} alt="Image banner" height={180} width={400} className="rounded-[15px] cursor-pointer greyscale hover:greyscale-0" />
              <div className="flex flex-col justify-between w-full pl-6">
                <div className="flex mb-2 mb-md-1">
                  <Image src={img_profile} alt="Image banner" height={50} width={50} />
                  <div className="flex flex-col ml-4">
                    <h1 className="cursor-pointer hover:text-orange-500">{newUsername}</h1>
                    <h1>{time}</h1>
                  </div>
                </div>
                <h1 className="text-lg cursor-pointer text-md-xl hover:text-orange-500">{title}</h1>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default NewsList;