import { FC, useMemo, useState } from 'react';
import styles from './Input.module.scss';

const ONLY_DIGIT_REGEX = /^\d*$/;
const onlyDigitValidator = (value: string) => !!value.match(ONLY_DIGIT_REGEX);

const Input: FC = () => {
  const [value, setValue] = useState('');

  const error = useMemo(() => {
    return onlyDigitValidator(value) ? '' : 'Можно вводить только цифры';
  }, [value]);

  return (
    <div className={styles.input}>
      <input
        aria-invalid={!!error}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите значение"
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
