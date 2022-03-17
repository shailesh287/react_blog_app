import React, { useContext } from 'react';
import { MainContext } from './MainContext';
import { Link } from 'react-router-dom'

const TheLatest = () => {

    const [data] = useContext(MainContext);

    return (
        <div className="latest-container">
            <h2 className="latest-heading">The Latest</h2>
            <div className="latest-body">
                {
                    data.filter(
                        latest => latest.id === '3' && (latest.category === 'Fitness' || latest.category === 'Bollywood' || latest.category === 'Food')
                    ).map(
                        latestInfo => (
                            <div className="latest-card">
                                <Link to={`/category/article/${latestInfo.id}/${latestInfo.category}`} style={{ textDecoration: "none" }}>
                                    <img src={latestInfo.url} alt=""/>
                                    <h4 className='latest-title'>{latestInfo.title}</h4>
                                    <p className='latest-desc'>{latestInfo.body}</p>
                                    <p className='latest-date'>
                                        <span className='latest-category'>{latestInfo.category}</span> / {latestInfo.date}
                                    </p>
                                </Link>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default TheLatest;