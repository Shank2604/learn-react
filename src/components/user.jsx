import "./user.css";

const userDetails = {
    username: "Shashank Srivastav",
    imageUrl: 'https://res.cloudinary.com/dbdvcacc7/image/upload/v1728797584/qhuhjnckwaq1ixhk34xc.jpg',
    imageSize: 90
};

function User(){
    return <>
        <h2>{userDetails.username}</h2>
        <img className="avatar" src={userDetails.imageUrl} alt={'Photo of :'+ userDetails.username} style={{width: userDetails.imageSize, height: userDetails.imageSize}} />

    </>
}

export {User};