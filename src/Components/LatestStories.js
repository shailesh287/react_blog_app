import React, { useContext } from 'react';
import { MainContext } from './MainContext';
import { Link } from 'react-router-dom'

const LatestStories = () => {

    const [data] = useContext(MainContext);

    return (
        <div className="latest-container">
            <h2 className="latest-heading">Latest Stories</h2>
            <hr className="latest-stories-horizontal-line"/>
            <br></br>
            <div className="latest-body">
                {
                    data.filter(
                        latest => latest.id === '4' && (latest.category === 'Technology' || latest.category === 'Tourism' || latest.category === 'Bollywood')
                    ).map(
                        latestInfo => (
                            <div className="latest-card">
                                <Link to={`/category/article/${latestInfo.id}/${latestInfo.category}`} style={{ textDecoration: "none" }}>
                                    <img src={latestInfo.url} alt=""/>
                                    <h4 className='latest-title'>{latestInfo.title}</h4>
                                    <p className='latest-desc'>{latestInfo.body}</p>
                                    <p className='latest-date'><span className='latest-category'>{latestInfo.category}</span> / {latestInfo.date}</p>
                                </Link>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default LatestStories;