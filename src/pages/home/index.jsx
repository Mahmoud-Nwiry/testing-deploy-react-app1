import './home.css'
import { NavLink } from 'react-router-dom'
import {FacebookFilled, InstagramOutlined} from '@ant-design/icons'

const HomeNav = () => {
    return(
        <nav>
            <div className="container">
                <p className="logo">MERO</p> 
                <ul className="links">
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/timeline'>Timeline</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

const Home = () => {
    return (
        <div className='body'>
            <HomeNav />
            <div className="container content">
                <div className="text">
                    <div className="info">
                        <h1>Mahmoud H. Nwiry</h1>
                        <h3>I'm Website Developer, ( MERN-STACK )</h3>
                        <NavLink className="btn" to="/about">Read More</NavLink>
                    </div>
                    <div className="social">
                        <ul>
                            <li><a href='#'><FacebookFilled style={{color : '#00f', fontSize : '2.5rem'}}/></a></li>
                            <li><a href="#"><InstagramOutlined style={{color : '#f55', fontSize : '2.5rem'}}/></a></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="image">
                    <img src="me.png" alt="Mahmoud Nwiry" />
                </div>
            </div>
        </div>
    )
}

export default Home