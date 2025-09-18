import Car from './Car';
import Apple from './Apple';


function Garage() {
    const isDoorOpened = true;
    // const brand = 'Ferrari';
    // const color = 'Yellow';
    const carInfo = { brand: "Ferrari", color: "Black" }
    const appleInfo = { type: "Fuji", color: "Red" };

    const carList =[
        {brand: "BMW", color :"red"},
        {brand:"Ford", color:"green"},
        {brand:"Tesla", color:"black"},
    ];

    const numberList = [
        1,2,3,3,4,5,6,6
    ];
      
    
    const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined;
    return (
        <div>
            <h1>Who lives inside my Garage?</h1>
            {/* <Car brand ={brand} color={color} /> */}
            {
                showCarInfo &&  <Car carInfo={carInfo} /> 
                    
            }
            <Apple appleInfo={appleInfo} />
            {isDoorOpened ? <h2>Garage door is open</h2> : <h2>Garage Door is Closed</h2>}
            <ul>
                { carList.map((carInfo) =>  <li key={carInfo.brand}><Car carInfo={carInfo}/></li> )}
            </ul>

            <ul>
                {numberList.map((e,index) => <p key={index}>{e}</p>)}
            </ul>
        </div>
    );
}

export default Garage;