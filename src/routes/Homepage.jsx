import '../styles/Homepage.css';
import logo from '../assets/logo/habit-flow-icon-hd.png';
// import { useContext } from 'react';
// import { UserContext } from '../Context/Auth';
// import { useNavigate } from 'react-router-dom';

function Homepage() {
  //   const { email } = useContext(UserContext);
  // const navigate = useNavigate();
  // if(!!email){
  //     navigate('/dashboard')
  // }

  return (
    <main id='homepage-main-div'>
      <h1 id='homepage-welcome-title-text'>Welocome to</h1>
      <img id='homepage-main-icon' src={logo} alt='Logo' />
      <section id='homepage-info'>
        <article>
          <h2>Reach your goals at your own peace</h2>
        </article>
        <div class='empty-grid-space' />
        <div class='empty-grid-space' />
        <article>
          <h2>Failing is ok, it's part of growing</h2>
        </article>
      </section>
    </main>
  );
}

export default Homepage;
