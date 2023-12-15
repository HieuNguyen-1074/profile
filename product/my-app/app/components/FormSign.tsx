"use client"

import Link from 'next/link'
import React, { useState } from 'react'


interface IProps {
    actiionServer: (formData: FormData) => Promise<void>
}
const FormSign = ({ actiionServer }: IProps) => {
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()
    return (
        <>
            <form action={actiionServer}>
                <input className='border-2 border-solid border-red-500' placeholder='user name' onChange={(e) => setUsername(e.target.value)} type="text" name="username" />
                <input className='border-2 border-solid border-red-500' placeholder='password' onChange={(e) => setPassword(e.target.value)} type="password" name="password" />
                <input className='border-2 border-solid border-red-500' placeholder='email' onChange={(e) => setUsername(e.target.value)} type="text" name="email" />
                <input className='border-2 border-solid border-red-500' placeholder='fname' onChange={(e) => setPassword(e.target.value)} type="text" name="fname" />
                <input className='border-2 border-solid border-red-500' placeholder='lname' onChange={(e) => setUsername(e.target.value)} type="text" name="lname" />

                <input className='border-2  ' type="submit" value="login" />
                <Link href={"/sign"} className='border-2 ' >Sign</Link>
            </form>
        </>
    )
}

export default FormSign
