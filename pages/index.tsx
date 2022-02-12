import React from 'react'
import Layout from '../components/Layout'
import { useState } from 'react'
import services from '../services/index';
import dynamic from 'next/dynamic';

const NextListWithLoading = dynamic(
  () => import('../components/NewsList'),
  { loading: () => <p>Loading</p> }
)

const IndexPage = () => {
  const [params, setParams] = useState(5)
  const [data, setData] = useState([])

  const loadMore = () => setParams(params + 5)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await services.getNews(params)
        setData(data.news_release)
      } catch (e) {
        console.log(e)
      }
    } 
    getData()
  }, [params])

  // console.log(data)
  //?? Apabila dilihat dari console.log ini terlihar bahwa terdapat increment 5 dari params

  return (
    <Layout title="Home | Modoc">
      <div className="flex justify-center min-h-[91vh] pt-14 pb-3 align-center bg-[#f3f4f6]">
        <div className="flex flex-col sm:justify-around w-5/6 p-4 bg-white rounded-[15px] md:w-4/5 lg:w-2/4">
          <h1 className="text-2xl">Lembar Berita</h1>
          <NextListWithLoading res={data} />
          <button onClick={loadMore} className="self-center w-40 py-2 mt-4 text-gray-400 border border-gray-400 rounded-full hover:bg-blue-100 hover:text-blue-400 hover:border-blue-400">Lihat Lainnya</button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage