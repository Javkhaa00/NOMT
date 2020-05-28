import React from 'react'
import Header from "../Header/Header"
import './Payment.scss'


const Payment = () => {
    return (
        <div className="pay">
            <Header />
            <div className="allText">
                <div className='head'>Төлбөр тооцоо</div>
                <div className='bundle'>
                <div style={{textTransform: 'uppercase', fontWeight: '500'}}>bundle буюу багцуудын бас санал болгоно: </div>
                <div style={{marginLeft: '15px'}}>
                1. 2 хичээл авбал 3 дахь нь 30% хөнгөлөх <br />
                2. 3 хичээл авбал 4 дэхь нь 50% хөнгөлөх <br />
                3. 2 найзаа дагуулвал 30%30%30% хөнгөлөх/зөвхөн нэг хичээл дээр/</div>
                </div>
            </div>
        </div>
    )

}

export default Payment