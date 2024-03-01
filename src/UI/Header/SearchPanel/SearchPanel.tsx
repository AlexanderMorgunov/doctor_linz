import { UIButton } from '../../UIButton/UIButton'
import styles from './SearchPanel.module.scss'
import basket from '../../../assets/svg/shopping-cart.svg'
import loupe from '../../../assets/svg/loupe.svg'
import check from '../../../assets/svg/check.svg'

export const SearchPanel = () => {
    return (
        <div className={styles.SearchPanel_main_container}>
            <div className={styles.SearchPanel_container}>
                <div className={styles.search_panel}>
                    <UIButton 
                    variant='secondary'
                    classNames={styles.clinics_btn}
                    >
                    <span>4 Клиники</span>
                    <img src={check} alt="check" />
                    </UIButton>
                    <div className={styles.search_input_container}>
                    <input type="search" className={styles.search_input}/>
                    <i><img src={loupe} alt="loupe" /></i>
                    {/* <button className={styles.btn_loupe}><img src={loupe} alt="loupe" /></button>     */}
                    </div>
                    <UIButton variant="main" isActive={false} classNames={styles.btn_basket}><img src={basket} alt="basket" />
                    <span>Интернет магазин</span></UIButton>
                </div>
            </div>
          
        </div>
    )
}
