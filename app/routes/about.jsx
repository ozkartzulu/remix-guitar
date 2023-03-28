
import image from '../../public/img/nosotros.jpg'
import styles from '~/styles/about.css'

export function meta(){
    return {
        title: 'Guitar About',
        description: 'Sell of guitars and musics'
    }
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: image,
            as : 'image'
        }
    ]
}

function About(){
    return (
        <main>
            <h2 className="heading">About</h2>
            <div className="container about">
                <img src={image} alt="Image of About" />
                <div className="contain">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                </div>
            </div>
        </main>
    )
}

export default About