

function Car(props) {
    // const { brand, color} = props

    const { carInfo } = props
    const { brand, color} = carInfo

    const text = `Hi, I'm a ${color} ${brand} Car`;
  return (
<h2>{text}</h2>
  );
}

export default Car;