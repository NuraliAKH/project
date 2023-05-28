import React from 'react'
import './Opencard.comp.css'
import Icon from '../../assets/Vector.png'
import Icon1 from '../../assets/Vector (1).png'

export default function Opencard() {
  return (
    <div className='container'>
        <div className="openContainer">
            <p className='openTitle'>OPENCARD это</p>
            <div className="openCards">
                <div className="card">
                    <p>
                        <span>12 месяцев</span> <br /> 
                        Рассрочка от 3 до 12  мес
                    </p>
                </div>
                <div className="card">
                    <p>
                        <img src={Icon} alt="" /> <br /> 
                        Быстрое оформление
                    </p>
                </div>
                <div className="card">
                    <p>
                        <span>50 000 000</span> <br /> 
                        Лимит до 50 млн. сумм
                    </p>
                </div>
                <div className="card">
                    <img src={Icon1} alt="" /> <br /> <br />
                    Никакой предоплаты
                </div>
            </div>
        </div>

    </div>
  )
}
