

import { revalidateTag } from 'next/cache'
import Image from 'next/image'
import React from 'react'

const Table = ({ data }: { data: IProduct[] }) => {
    return (
        <>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>price</th>
                        <th>description</th>
                        <th>category</th>
                        <th>image</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((product: IProduct) => {
                            return <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td><Image alt='icon ' width={1000} height={1000}
                                    src={product.image} /></td>
                            </tr>
                        })
                    }


                </tbody>
            </table>
        </>
    )
}

export default Table
