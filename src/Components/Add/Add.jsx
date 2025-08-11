import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { FaCloudUploadAlt } from 'react-icons/fa'

export default function Add() {

    const inputRef = useRef()
    const { register, handleSubmit } = useForm()

    async function addPost(data) {
        console.log(data.body, inputRef.current.files[0]);
        const formData = new FormData()
        formData.append("body", data.body)
        formData.append('image', inputRef.current.files[0])


        try {
            await axios.post('https://linked-posts.routemisr.com/posts', formData, {
                headers: { token: localStorage.getItem('token') }
            })
            console.log(data);

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div>
            <Card>
                <form onSubmit={handleSubmit(addPost)} className="flex flex-col gap-4">
                    <div className="mb-2 block">
                        <Label htmlFor="addPost" className='block mb-3' >Post Something</Label>
                        <div className='flex gap-3'>
                            <TextInput {...register("body")} id="addPost" type="text" placeholder='Post Something' className="flex-grow" required />
                            <input {...register("image")} ref={inputRef} hidden type='file' />
                            <FaCloudUploadAlt onClick={() => inputRef.current.click()} className='text-4xl cursor-pointer' />
                        </div>

                    </div>
                    <Button type="submit">Create Post</Button>
                </form>
            </Card>

        </div >
    )
}
