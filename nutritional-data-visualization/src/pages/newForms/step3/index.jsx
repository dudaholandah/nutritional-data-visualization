import Toggle from '../../../components/toggle';
import styles from './style.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';

function Forms3() {

  const navigate = useNavigate();
  const {state} = useLocation();

  const prevStep = () => {
    navigate('/step2');
  }

  const nextStep = () => {
    navigate('/visualizations', { state: state });
  }

  const displayColunas = () => {
    const col = [];
    for (let i = 1; i <= 5; i++) {

      {/* TO-DO: display options when button checked*/ }

      col.push(
        <div className={styles.containerColuna}>
          <div className={styles.coluna}>
            <p>visualização {i}</p><Toggle id={i} />
          </div>
          <p>ver exemplo ?</p>
        </div>);
    }
    return col;
  }

  return (
    <div className={styles.forms}>
      <div className={styles.steps}>
        <p className={styles.stepOther}>1</p>
        <p className={styles.stepOther}>2</p>
        <p className={styles.stepCurr}>3</p>
      </div>

      <div className={styles.frame}>
        <p style={{ fontSize: '20px' }}>Quais colunas você deseja incluir nas visualizações?</p>

        <div className={styles.colunas}>
          {displayColunas()}
        </div>
        <div className={styles.bottom}>
          <button onClick={prevStep}>anterior</button>
          <button onClick={nextStep}>proximo</button>
        </div>
      </div>

    </div>

  )
}

export default Forms3;