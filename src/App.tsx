import styled from "styled-components";
import styles from './App.module.css';
import Input from "./components/Input/Input";
import {FC} from "react";
import {HomeOutline} from "./components/kit";
import RedoOutline from './components/kit/icons/RedoOutline.svg'
import Background from './assets/images/background.jpg'
import Kitty from './assets/images/kitty.png'
import MoscowCity from './assets/images/moscowcity.jpg'
import Meow from './assets/images/meow.gif'

const App: FC = () => {
    return <div className={styles.app}>
        <StyledHeading>Hello, React!</StyledHeading>
        <div style={{ display: 'flex', gap: '8px' }}>
            <HomeOutline />
            <div>import default exported ReactComponent</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
            <RedoOutline />
            <div>import from SVG file directly as ReactComponent</div>
        </div>
        <img src={MoscowCity} alt="moscow" width="540px" />
        <img src={Kitty} alt="kitty" width="540px" />
        <img src={Meow} alt="meow" />
        <img src={Background} width="540px" alt="background" />
        <p>Я такой крутой, что собрал на говне Реакт с поддержкой:</p>
        <ul className={styles.list}>
            <li className={styles.listItem}>SCSS</li>
            <li className={styles.listItem}>SVG</li>
            <li className={styles.listItem}>Typescript</li>
            <li className={styles.listItem}>Images</li>
        </ul>
        <p className={styles.pasha}>Илюха уволен</p>
        <label>Сколько тебе годиков?</label>
        <Input />
    </div>
}

const StyledHeading = styled.h1`
    color: red;
`;

export default App;
