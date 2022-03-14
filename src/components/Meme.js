import React from 'react';
import memeData from './../memedata.js';

export default function Meme() {

    let allMeme = memeData.data.memes
    const [meme, setMeme] = React.useState({
        img: 'http://i.imgflip.com/1bij.jpg',
        bottomText: '',
        topText: '',
    });
    const [allMemeData, setMemeData] = React.useState(memeData);

    function Logw() {
        const randomElement = allMeme[Math.floor(Math.random() * allMeme.length)];
        setMeme(meme => ({
            ...meme,
            img: randomElement.url,
        }))
    }
    function setText(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="meme">
            <>
                <div className="inputBox">
                    <input type="text" name="topText" onChange={setText} placeholder="insert your meme title"/>
                    <input type="text" name="bottomText" onChange={setText} placeholder="insert your meme text"/>
                </div>
                <button type="" onClick={Logw}>Get a new meme image  🖼</button>

                <div className="imageContainer">
                    <img className="imageMeme" src={meme.img} />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>

            </>
        </div>
    )
}