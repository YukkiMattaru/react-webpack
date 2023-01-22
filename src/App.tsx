import styled from "styled-components";
import styles from './App.module.css';
import Input from "./components/Input/Input";
import {FC} from "react";
import HomeOutlineIcon from "./components/kit/icons/HomeOutline.svg";

const App: FC = () => {
    return <>
        <StyledHeading>Hello, React!</StyledHeading>
        <HomeOutlineIcon />
        <p>Я лучший! Ведь я:</p>
        <ul className={styles.list}>
            <li className={styles.listItem}>Пузатый</li>
            <li className={styles.listItem}>Аморфный</li>
            <li className={styles.listItem}>слегка Шлюховатый</li>
            <li className={styles.listItem}>Алгоколик</li>
        </ul>
        <p className={styles.pasha}>Я П.А.Ш.А.!</p>
        <label>Сколько тебе годиков?</label>
        <Input />
    </>
}

const StyledHeading = styled.h1`
    color: red;
`;

export default App;
