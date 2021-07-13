import "./coffee-products.css"
import Separator from "../../Separator/Separator"
import CoffeeBlock from "./CoffeeBlock"
import ScrollFunc from "../../../Components/ScrollFunc"

const CoffeeProducts = () => {
    return (
        <>
            <ScrollFunc/>
            <div className="container">
                <div className="row flex-column-left" style={{margin: '80px 0'}}>
                    <div className="flex-column-center col-xs-12 col-md-12">
                        <div className="title-section col-xs-11 col-sm-11 col-md-8 col-lg-8 col-xl-8">Lorem ipsum dolor sit amet</div>
                        <Separator/>
                        <p className="col-xs-11 col-sm-10 col-md-8 col-lg-6 col-xl-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit, auctor eget purus. Phasellus scelerisque.</p>
                    </div>
                    <CoffeeBlock/>                
                </div>
            </div>
        </> 
    )
}

export default CoffeeProducts