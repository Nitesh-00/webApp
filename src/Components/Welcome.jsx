let Welcome = () => {

    let clickHandler = () => {
        console.log("Button is Clicked");
        
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
} 

export default Welcome