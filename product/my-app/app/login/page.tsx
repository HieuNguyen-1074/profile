
import Link from 'next/link';
import React, { useTransition } from 'react'
import FormLogin from '../components/FormLogin';
import users from '@/app/(api)/user';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';

const LoginPage = () => {

    /**
     * (Action server ) check login user 
     * @param formData 
     */
    async function login(formData: FormData) {
        "use server"

        try {
            const username = formData.get('username')
            const password = formData.get('password')

            const data = { username: username ?? "", password: password ?? "" }
            const tooken = await users.login(data)
            if (tooken.length === 0) {
                throw new Error("username and password not found")
            }

        } catch (error) {

            throw error


        }

        redirect("/")

    }

    return (
        <div>
            <FormLogin actiionServer={login} />
        </div>
    )
}

export default LoginPage
