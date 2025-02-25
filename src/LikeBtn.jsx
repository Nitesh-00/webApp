import { useState } from "react";

export default function LikeBtn(){
    const [isLiked,setIsLiked] = useState(false);
    let toggleLike = () =>{
        setIsLiked(!isLiked)
    }
    let styles = {color : "grey"}
    return(
        <p onClick={toggleLike}>{isLiked ? (<i style={styles} class="fa-solid fa-heart"></i>) : (<i class="fa-regular fa-heart"></i>)}</p>
    );
}