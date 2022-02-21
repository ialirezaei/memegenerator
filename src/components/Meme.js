import React from 'react';
import memedata from './../memedata.js';

export default function Meme() {

    let allMeme = memedata.data.memes

    const randomElement = allMeme[Math.floor(Math.random() * allMeme.length)];
    const [meme, setMeme] = React.useState({
        img: 'http://i.imgflip.com/1bij.jpg',
        bottomText: '',
        topText: '',
    });

    function Logw() {
        const randomElement = allMeme[Math.floor(Math.random() * allMeme.length)];
        setMeme(meme => ({
            ...meme,
            img: randomElement.url,
        }))
    }

    return (
        <div className="meme">
            <>
                <div className="inputBox">
                    <input type="text" placeholder="insert your meme title"></input>
                    <input type="text" placeholder="insert your meme text"></input>
                </div>
                <button type="" onClick={Logw}>Get a new meme image  🖼</button>

                <div className="imageContainer">
                    <img className="imageMeme" src={meme.img}>

                    </img>
                </div>
            </>
        </div>
    )
}