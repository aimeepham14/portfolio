import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1>About Me</h1>

            <p className={styles.extraBisque}>Hi I am Aimee, I am a super cool software engineer now and I make neat stuff with the codes </p>

            {/* load an image locally */}
            <Image
                src='/vercel.svg'
                alt='logo'
                width={300}
                height={300}
            />
            {/* <img
                src='/unnamed.jpg'
                alt='happy beer man'
            /> */}
            {/* load an image hosted on another domain like imgur */}
            <Image
                src='https://placekitten.com/400/500'
                alt='portfolio cat'
                width={400}
                height={500}
            />
        </div>
    )
}