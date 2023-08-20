import React from 'react';
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"
import vg from "../assets/2.webp"

const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className='home2'>
                <img src={vg} alt='Graphics' />
                <div>
                    <p>
                        we are your one and only solution to the tech problems you face every day. we are leading tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>
            <div className='home3' id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis temporibus sed eum ut, deserunt vero explicabo eaque iusto animi odit a iure sapiente qui doloribus nostrum consequatur asperiores placeat? Accusamus at, neque nostrum accusantium exercitationem alias perspiciatis, quo dolore natus consequatur rerum quam placeat. Doloremque at, dolores dignissimos eaque repudiandae provident libero adipisci, optio et assumenda ex corrupti eveniet quis accusamus labore exercitationem magni illum quaerat totam vero! Sed deleniti temporibus eius tenetur eum delectus facilis ex ea corporis tempora ipsum officiis enim ullam excepturi eveniet sapiente magni, voluptates reprehenderit totam veniam nobis, magnam, neque similique pariatur? Temporibus modi necessitatibus nesciunt, harum assumenda porro mollitia ducimus placeat vel, neque eum tempora autem veritatis alias blanditiis vitae. Odit sunt harum, deserunt quibusdam saepe praesentium laborum modi rem, necessitatibus optio natus debitis ipsum beatae nulla consequuntur deleniti quisquam aspernatur nostrum recusandae temporibus.</p>
                </div>
            </div>
            <div className='home4' id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s"
                        }}>
                            <AiFillYoutube />
                            <p>youtube</p>
                        </div>
                        <div style={{
                            animationDelay: "1s"
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home