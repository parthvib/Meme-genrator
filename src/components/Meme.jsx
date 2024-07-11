import React from "react"
 




export default function Meme(){
    
    // const [memeImage,setMemeImage]=React.useState("");
    const[meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/28j0te.jpg"
    })

    const[allImages,setAllImages]=React.useState([])

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllImages(data.data.memes))
    },[])

    function getRandomImage(){
        const random=Math.floor(Math.random() * allImages.length)
        const url=allImages[random].url 
         setMeme(prevMeme=>({
             ...prevMeme,
             randomImage:url

         }))

        // setMemeImage(url);//this will overwrite the memeImage value.
        
        }

        function handleChange(event){
            const{name,value}=event.target
            setMeme(preMeme=>({
                ...preMeme,
                [name]:value
            }))
        }


     return(
        <main>
            <div>
                <div className="form">
                    {/* <div className="inp"> */}
                    <input type="text"
                     placeholder=" Enter Top text" 
                     className="form-input"
                     name="topText"
                     value={meme.value}
                     onChange={handleChange}

                     ></input>

                    <input type="text"
                     placeholder=" Enter Bottom text" 
                     className="form-input inp1"
                     name="bottomText"
                     value={meme.value}
                     onChange={handleChange}
                     >
                     </input>
                    {/* </div> */}
                <button className="form-button" onClick={getRandomImage}  >Get a new Meme Image </button>
                </div>
                <br></br><br></br>
                <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            </div>
        </main>
    )
}

