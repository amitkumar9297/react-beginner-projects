import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <h1>Contact Us</h1>
                <form>
                    <div>
                        <label>Name</label>
                        <input type='text' required placeholder="Your name"></input>
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input type='email' required placeholder="abc@xyz.com"></input>
                    </div>
                    <div>
                        <label>Message</label>
                        <input type='text' required placeholder="Tell us about your query..."></input>
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </main>
        </div>
    )
}

export default Contact