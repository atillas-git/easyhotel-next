'use client'
import { Button, Checkbox, Input } from '@nextui-org/react'
import Link from 'next/link'
import React, { useState } from 'react'
const SignIn = () => {

    const [email,setEmail] = useState({
        value:"",
        invalid:false,
        errorMessage:""
    });

    const [password,setPassword] = useState({
        value:"",
        invalid:false,
        errorMessage:""
    });

    const [isLoading,setIsLoading] = useState(false)
    
    function handleSignIn(){
        clearError()
        if(!email.value || !password.value){
            setEmail({
                value:"",
                invalid:true,
                errorMessage:"Please check your credentials"
            })
            setPassword({
                value:"",
                invalid:true,
                errorMessage:"Please check your credentials"
            })
            return;
        }
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        },5000)
    }

    function clearError(){
        setEmail({
            value:email.value,
            invalid:false,
            errorMessage:""
        })
        setPassword({
            value:password.value,
            invalid:false,
            errorMessage:""
        })
    }

    return (
    <div className='min-h-screen'>
        <div className='grid sm:grid-cols-1 md:grid-cols-4 h-screen'>
            <section className='sm:none md:col-span-1 h-full flex flex-col items-center justify-center bg-teal-600 text-teal-50'>
                <div className='font-semibold'>
                    EasyHotel
                </div>
            </section>
            <section className='md:col-span-3 sm:col-span-1 h-full flex flex-col items-center justify-center relative'>
                <div className='absolute top-12 right-12'>
                    <Link href={"/auth/signup"} className='underline underline-offset-2'>
                        You do not have an account?
                    </Link>
                </div>
                <div className='w-1/2 flex flex-col gap-3 text-center'>
                    <h1 className='mb-4 font-semibold uppercase text-xl'>
                        Welcome to EasyHotel
                    </h1>
                    <Input
                        label = "Email"
                        isInvalid = {email.invalid}
                        className='text-left'
                        onChange={(e)=>setEmail({...email,value:e.target.value})}
                        errorMessage = {email.errorMessage}
                    />
                    <Input
                        label = "Password"
                        isInvalid = {password.invalid}
                        errorMessage = {password.errorMessage}
                        onChange={(e)=>setPassword({...password,value:e.target.value})}
                        type='password'
                        className='text-left'                    
                    />
                    <div className='flex items-center justify-between'>
                        <Checkbox color='success' className='my-2'>
                            Show Password
                        </Checkbox>
                        <Link href={"/auth/signup"} className='underline underline-offset-2'>
                            Forgot Password ?
                        </Link>
                    </div>
                    <Button 
                        className='w-full bg-teal-600 text-teal-50 font-semibold' 
                        onClick={handleSignIn}
                        isLoading = {isLoading}
                    >
                        {isLoading ? "Please Wait":"Signin"}
                    </Button>
                </div>
            </section>
        </div>
    </div>
  )
}

export default SignIn