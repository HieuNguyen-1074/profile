
"use client"
import React, { useState } from 'react'
import FormProduct from './FormProduct'
import { updateProduct } from '../actionServer/actionServer'

const ModelProduct = () => {
    const [isShow, setIsShow] = useState<boolean>(false)
    return (
        <div>

            <button data-modal-target="modal-2" data-modal-toggle="modal-2" onClick={() => setIsShow(true)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Toggle modal
            </button>

            <FormProduct isShow={isShow} actionForm={updateProduct} />

        </div>
    )
}

export default ModelProduct
