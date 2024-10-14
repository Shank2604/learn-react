import "./user.css";

const userDetails = {
    username: "Shashank Srivastav",
    imageUrl: 'https://res.cloudinary.com/dbdvcacc7/image/upload/v1728797584/qhuhjnckwaq1ixhk34xc.jpg',
    imageSize: 100
}

let loggedIn = true;
let content = loggedIn?<AdminPage/> : <h2>No user found!</h2>;

function AdminPage(){
    return <>
        <h2>I'm logged In.</h2>
        <img className="avatar" src={userDetails.imageUrl} alt={'Photo of :'+userDetails.username} style={{width: userDetails.imageSize, height:  userDetails.imageSize}} />
    </>
}

export {content};