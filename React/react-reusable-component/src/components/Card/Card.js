import React from 'react';
import "./Card.css";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
// import 'bootstrap/dist/css/bootstrap.min.css'
// TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(en)

const like = (event) => {
    console.log('like')
}
const reply=(event)=>{
    alert('Kamu klik reply')
}

const timeAgo = new TimeAgo('en-US')

const time=timeAgo.format(Date.now() - 2*1000, 'round')

const Card = ({ gambar, title, comment, href, width, nickname }) => {
    return (
        <div className="wrapper mb-4">
            <img src={gambar} alt="" width={width} />
            <div className="card-text">
                <div className='title-wrap'>
                    <h5 className='title'>{title}</h5>
                    <span style={{margin:"0 5px"}}>-</span>
                    <h5 className='nick'>{nickname}</h5>
                </div>
                <p className='comment'><strong>{comment}</strong></p>
                <div className='expression'>
                    <a href={href} onClick={like}>Like</a>
                    <span style={{margin:"0 5px"}}>-</span>
                    <a href={href} onClick={reply}>Reply</a>
                    <span style={{margin:"0 5px"}}>-</span>
                    <span className='time' >{time}</span>
                </div>
            </div>
        </div>
    )
}
export default Card;
