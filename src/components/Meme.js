import memedata from './../memedata.js';

export default function Meme() {
    
    let allMeme = memedata.data.memes

    function Logw() {
        const randomElement = allMeme[Math.floor(Math.random() * allMeme.length)];
    }
    return (
        <div className="meme">
            <form>
                <div className="inputBox">
                    <input type="text" placeholder="insert your meme title"></input>
                    <input type="text" placeholder="insert your meme text"></input>
                </div>
                <div>
                </div>
            </form>
            <button type="" onClick={Logw}>Get a new meme image  🖼</button>
        </div>
    )
}