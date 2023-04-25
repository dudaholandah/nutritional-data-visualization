import Toggle from '../../../components/toggle';
import styles from './style.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';

function Forms2() {

  const navigate = useNavigate();
  const {state} = useLocation();

  const prevStep = () => {
    navigate('/step1');
  }

  const nextStep = () => {
    navigate('/step3', { state: state });
  }

  const displayColunas = () => {
    const col = [];
    for (let i = 1; i <= 8; i++) {

      {/* TO-DO: display options when button checked*/ }

      col.push(
        <div className={styles.coluna}>
          <p>exemplo {i}</p><Toggle id={i} />
        </div>);
    }
    return col;
  }

  return (
    <div className={styles.forms}>
      <div className={styles.steps}>
        <p className={styles.stepOther}>1</p>
        <p className={styles.stepCurr}>2</p>
        <p className={styles.stepOther}>3</p>
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

export default Forms2;