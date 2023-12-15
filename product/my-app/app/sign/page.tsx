import React from 'react'
import FormSign from '../components/FormSign'
import { redirect } from 'next/navigation'
import users from '../(api)/user'

const SignPage = () => {

    // server action for create new user
    async function create(formData: FormData) {
        "use server"

        try {
            //get param input fields
            const username = formData.get('username')
            const password = formData.get('password')
            const email = formData.get('email')
            const fname = formData.get('fname')
            const lname = formData.get('lname')

            const data = {
                username: username ?? "", password: password ?? "",
                email: email, name: { lastname: lname, firstname: fname }, address: {}, phone: ""
            }
            const result = await users.createUser(data)
            if (!result) {
                throw new Error("Something went wrong")
            }

        } catch (error) {
            console.log(error)
            throw error


        }

        redirect("/login")

    }
    return (
        <div>
            <FormSign actiionServer={create} />
        </div>
    )
}

export default SignPage
