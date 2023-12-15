import Image from 'next/image'

import 'react-toastify/dist/ReactToastify.css';
import products from './(api)/product';
import Table from './components/Table';



export default async function Home() {
  try {
    const data = await products.getListProduct()



    return (
      <div>
        <div className='h-[50vh]'>

          <Table data={data} />


        </div>
      </div>
    )
  } catch (error) {
    console.log(error)

  }


}
