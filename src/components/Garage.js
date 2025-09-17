import Car from './Car';
import Apple from './Apple';


function Garage() {
    // const brand = 'Ferrari';
    // const color = 'Yellow';
    const carInfo = {brand : "Ferrari", color : "Black"}
    return (
        <div>
            <h1>Who lives inside my Garage?</h1>
            {/* <Car brand ={brand} color={color} /> */}
            <Car carInfo = {carInfo} />
            <Apple/>
        </div>
    );
}

export default Garage;