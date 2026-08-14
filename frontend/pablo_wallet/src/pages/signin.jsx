
import {Form,Input,Label,Typography} from'@heroui/react'
import { Link } from 'react-router-dom'
function SignIn(){
    return(
        <>
        <div className='flex flex-row items-center justify-center h-125'>
            <Form className='flex flex-col m-50'>
                <div className='m-3'>
               <Typography.Heading level={3}>Welcome Back</Typography.Heading>
               <Typography.Paragraph>Welcome Back! Please enter your details</Typography.Paragraph>
                </div>
            
                <Label>E-mail</Label>
                <Input type='email' placeholder='Your E-mail' className='w-100 m-2'></Input>
                <Label>Password</Label>
                <Input type="password" placeholder='Your Password' className='w-100 m-2' />
                <div className='flex flex-row '>
                <input type="checkbox" className='m-0.5'/> 
                <Label>Remember for 30 Days</Label>
                <Label className='ml-35'>Forgot Password?</Label>
                </div>
               
                <Input type='submit'value='Sign In' className='bg-[#C8EE44] m-2'/>
                <Typography.Paragraph color='muted'>Don't have an account ?<Link to='/signup' className='font-bold'> Sign-Up</Link> </Typography.Paragraph>
            </Form>
            <div className='flex'>
            <img src='/signup.svg' alt='hello' className='h-[670px] object-cover flex justify-items-end'/>
            </div>
            </div>
        </>
    )
}

export default SignIn