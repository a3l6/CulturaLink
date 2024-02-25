import React from "react"
import "./create.css"
import { IoIosAddCircleOutline } from "react-icons/io"
import { useState } from "react"

export const Create = () => {
  const [msg, setMsg] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  return (
    <>
      <section className='newPost'>
        <div className='container boxItems'>
          <div className='img '>
            <img src='https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image' class='image-preview' />
          </div>
          <form>
            <div className='inputfile flexCenter'>
              <input type='file' accept='image/*' alt='img' />
            </div>
            <input type='text' placeholder='Title' onChange={(event) => {
              setTitle(event.target.value)
            }} />

            <textarea name='' id='' cols='30' rows='10' onChange={(event) => {
              setContent(event.target.value)
            }}></textarea>

            <button className='button' type="button" onClick={async () => {

              const res = await fetch("http://127.0.0.1:5000/add-article", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  title: title,
                  content: content
                })
              })

              const json = await res.json()

              setMsg(json.msg)
            }}>Create Post</button>
            <span style={{ color: "red", fontSize: 14, marginTop: "10px" }}>{msg}</span>
          </form>
        </div>
      </section>
    </>
  )
}
