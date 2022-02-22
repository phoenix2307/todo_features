import React, {useState} from 'react'
import s from './Menu.module.css'

export const Menu = () => {

    let [visible, setVisible] = useState(false)

    const visibleToggle = () => {
        setVisible(!visible)
    }

    return (
        <div>
            {
                !visible && <div
                  className={s.menuButton} onClick={visibleToggle}>
                  MENU
                </div>
            }

            {
                visible && <div className={s.wrapper} onClick={visibleToggle}>
                  <div className={s.page}>preJunior</div>
                  <div className={s.page}>Junior</div>
                  <div className={s.page}>Junior+</div>
                </div>
            }

        </div>
    )
}