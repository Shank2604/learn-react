const Click = () => {
    return alert("Button is clicked")
}

function MyButton(){
    return <>
        <button onClick={Click}>Click Me</button>
    </>
}

export {MyButton}