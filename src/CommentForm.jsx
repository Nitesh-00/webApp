import { useState } from "react";

export default function CommentForm(){
    let [formData,setFormData] = useState({
        username : "",
        remarks : "",
        rating : 5
    })


    let inputHandle = (event) => {
        
        setFormData((currData) => {
            return {...currData,[event.target.name] : event.target.value}
        })
         
        
    }
    let handleSubmit = (event) => {
        console.log(formData);
        setFormData({
            username : "",
            remarks : "",
            rating : 5
        })
        event.preventDefault();
    }
    return (
        <div>
            <h1>Comments Please!</h1>
            <form onSubmit={handleSubmit}>
                <input name = "username" type="text" placeholder="Username" value={formData.username} onChange={inputHandle}/>
                <br /><br />
                <textarea name="remarks" id="" placeholder="remarks" value={formData.remarks} onChange={inputHandle}></textarea >
                <br /><br />
                <input name = "rating" type="number" min={1} max={5} placeholder="rating" value={formData.rating} onChange={inputHandle}/>
                <br /><br />
                <button >Submit</button>
            </form>
        </div>
    );
}