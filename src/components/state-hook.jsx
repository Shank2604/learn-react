function StateHook({count,onClick}){
    return <>
        <button onClick={onClick}>Clicked {count} times</button>
    </>

}

export {StateHook};