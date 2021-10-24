import { useEffect, useState } from 'react';
import styles from './index.module.scss';

const unsplashURL = 'https://images.unsplash.com/photo-1494199505258-5f95387f933c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80';

//Custom Hook 
const useScrollPosition = () => {
  const [scrollYPos, setScrollYPos] = useState(0);

  const onScroll = () => {
    setScrollYPos(window.scrollY)
  };

  useEffect(() => {
    setScrollYPos(window.scrollY);
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [])
  return scrollYPos;
}

export default function Home() {
  const scrollPos = useScrollPosition();

  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["text-parent"]}>
        <h1 style={{
          transform: `translate3d(-${scrollPos / 2}px, -${scrollPos * 0.1}px,0px)`
        }}>The strength of the team is each individual member</h1>
        <h1 style={{
          transform: `translate3d(${scrollPos / 2}px, ${scrollPos * 0.1}px,0px)`
        }}>
          I really got motivated when I have doubters
        </h1>
      </div>

      <img src={unsplashURL} alt="image" style={{
        transform: `translate3d(-50%,calc(-${scrollPos * 0.9}px - 50%),0px)`
      }} />

      <div className={styles["text-parent"]}>
        <h1 className={styles.outline}>The strength of the team is each individual member</h1>
        <h1 className={styles.outline}>
          I really got motivated when I have doubters
        </h1>
      </div>
    </div>
  )
}
