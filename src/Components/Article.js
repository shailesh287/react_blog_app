import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MainContext } from './MainContext'
import Display from './Display'

const Article = () => {
    const [data] = useContext(MainContext)
    const { ID } = useParams()
    const { categories } = useParams()

    return (
        <>
            <div className="article-container">
                {
                    data.filter(
                        article => article.id === ID && article.category === categories
                    ).map(
                        content => <>
                            <h3 className="article-title">{content.title}</h3>
                            <img className="article-image" src={content.url} alt="" />
                            <p className="article-body" >{content.body}</p><br></br>
                            <p className="article-context" >Let's talk about them...</p>
                            <p className="article-description" >This is about {content.title} which is popular on the social media platform and much to say is that {content.body}</p>
                            <div className="article-category-clap">
                                <span className="article-category" >{content.category}</span>
                                <span className="article-clap">
                                    <img src={require('../icons/claps.png')} className="article-clap-image" alt="clap"/>90k
                                </span>
                            </div>
                            <hr className="article-horizontal-line" />
                            <div className="article-user" >
                                <img className="artice-user-image" src={require('../icons/user.png')} alt="user_icon"/>
                                <div className="article-user-division">
                                    <p className="article-user-written">written by <br/> </p>
                                    <p>Shailesh Bind</p>
                                    <p className="article-user-date">March 16, 2022</p>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
            <Display />
        </>
    )
}
export default Article;