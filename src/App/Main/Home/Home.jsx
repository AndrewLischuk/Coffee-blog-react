import homeCoffeeCup from "../../../assets/HomePage/home_coffee_cup.png"
import homeCoffeeIcon from "../../../assets/HomePage/home_coffee_icon1.png"
import homeCoffeePackage from "../../../assets/HomePage/home_coffee_package.png"
import Separator from "../../Separator/Separator"
import "./home.css"

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="flex-row-between-stretch fade-in">
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 flex-column-spaced-evently">
                            <div className="box-cut"><img className="box-img" src={homeCoffeeIcon} alt=""></img></div>
                            <div className="title-ev">Fusce interdum justo quis libero ultricies</div>
                            <Separator/>
                            <div className="text-ev">Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros.</div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 box-cut"><img className="box-img" src={homeCoffeeCup} alt=""></img></div>
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 flex-column-spaced-evently">
                            <div className="title-ev"><span>Fusce ut velit</span></div>                            
                            <div className="title-section">$ 15,99</div>
                            <div className="box-cut"><img className="box-img" src={homeCoffeePackage} alt=""></img></div>
                        </div>
                    </div>                    
                </div>
            </div>            
                <div className="home home-video-block" style={{margin: '80px 0'}}>
                    <div className="container">
                        <div className="row flex-row-between fade-in">
                            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 flex-column-center box-cut" style={{height: '400px'}}>                                
                                <iframe className="box-img" title="player" src="https://player.vimeo.com/video/58010546?autoplay=1&color=ff9933&title=0&byline=0&portrait=0"  frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>                                
                                <script src="https://player.vimeo.com/api/player.js"></script>
                            </div>                                                    
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                <div className="cathegory-ev">In condimentum maximus</div>
                                <div className="title-section"><span>Maecenas non laoreet odio fusce lobortis</span></div>
                            </div>
                        </div>                    
                    </div>
                </div>
            <div className="home home-checklist">
                <div className="container">
                    <div className="row">
                        <div className="fade-in col-xs-12 col-sm-12 col-md-7 col-lg-6 col-xl-6 checklist-block">
                            <p className="title-ev">Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget</p>
                            <p className="text-ev">Nunc urna libero, congue porta nibh a, semper feugiat sem. Sed auctor dui eleifend, scelerisque eros ut, pellentesque nibh. Nam lacinia suscipit accumsan. Donec sodales, neque.</p>
                            <ul>
                                <li><i className="fas fa-check"></i> Suspendisse a pellentesque dui, non felis.</li>
                                <li><i className="fas fa-check"></i> Quisque lorem tortor fringilla sed.</li>
                                <li><i className="fas fa-check"></i> Quisque cursus et, porttitor risus.</li>
                                <li><i className="fas fa-check"></i> Nulla ipsum dolor lacus, suscipit adipiscing.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home