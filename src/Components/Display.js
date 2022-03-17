import { useContext } from 'react'
import { MainContext } from './MainContext'

const MoreSiren = () => {
    const [data] = useContext(MainContext)

    return (
        <>
            <div className="display-container">
                <h2 className="display-heading">More From The Siren</h2>
                <hr className="display-horizontal-line"/>
                <div className="display-items">
                    {
                        data.filter(
                            latest => latest.id === '5' && (latest.category === 'Technology' || latest.category === 'Tourism' || latest.category === 'Food')
                        ).map(
                            latestInfo => (
                                <div className="display-box">
                                    <p className="display-info">Related Reads</p>
                                    <img src={latestInfo.url} className="display-image" alt=""/>
                                    <h4 className="display-title">{latestInfo.title}</h4>
                                    <div className="display-user-box" >
                                        <img className="display-user" src={require('../icons/user.png')} alt=""/>
                                        <div className="display-user-details">
                                            <p>Shailesh Bind</p>
                                            <p className="display-date">March 16, 2022</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default MoreSiren;