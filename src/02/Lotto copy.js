import style from './Lotto.module.css';
import { useState } from 'react';

const Lotto = () => {
  
    let numArr = [];
    // let lottotag = []; 
    // const [lottoTag, setLottoTag] = useState([]);

    const getNum = () => {
        numArr = [];
        while(numArr.length<7) {
            let n = Math.floor(Math.random() * 45 ) + 1;
            if(numArr.indexOf(n) === -1)
                numArr.push(n);
        }
        console.log(numArr)
        // useState를 사용하여 변화를 감지함, html에 재적용
        setLottoTag(numArr.map((item) => 
        <div className={style.lottonum}>{item}</div>
    ));
    }


    //리턴에는 부모 태그 하나만 가능, 자식노드는 상관없다
    return(
        <main className="container">
            <article>
                <header>
                   <h1>로또번호 생성기</h1>
                </header>
                <div className={style.lottobox}>
                    {lottoTag}
                </div>
                <footer>
                    <button onClick={() => getNum()}>생성</button>
                </footer>
            </article>
        </main>
    );
}

export default Lotto;