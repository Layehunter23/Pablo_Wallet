
import {Form,Input,Label,Typography} from'@heroui/react'
import { Link } from 'react-router-dom'
function SignUp(){
    return(
        <>
        <div className='flex flex-row items-center justify-center h-125'>
            <Form className='flex flex-col m-50'>
                <div className='m-3'>
               <Typography.Heading level={3}>Create new account</Typography.Heading>
               <Typography.Paragraph>Welcome! Please enter your details</Typography.Paragraph>
                </div>
            
                <Label>Full Name</Label>
                <Input type='text' placeholder='Your name' className='w-100 m-2'></Input>
                <Label>E-mail</Label>
                <Input type='email' placeholder='Your E-mail' className='w-100 m-2'></Input>
                <Label>Password</Label>
                <Input type="password" placeholder='Your Password' className='w-100 m-2' />
                <Input type='submit'value='Create Account' className='bg-[#C8EE44] m-2'/>
                <Typography.Paragraph color='muted'>Already have an account?<Link to='/signin' className='font-bold'> Sign-in</Link> </Typography.Paragraph>
            </Form>
            <div className='flex'>
            <img src='/signup.svg' alt='hello' className='h-[670px] object-cover flex justify-items-end'/>
            </div>
            </div>
        </>
    )
}

export default SignUp