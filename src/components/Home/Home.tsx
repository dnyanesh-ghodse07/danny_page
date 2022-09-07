import React from 'react'
import "./Home.scss"
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <>
            <div>
                <div className="main-wrapper">
                    <Header />
                    <Skills />
                    <Projects />
                    <Form />
                </div>
            </div>
        </>
    )
}

export default Home