import { useEffect, useState } from 'react';
import LottoNums from './LottoNums';

const Lotto = () => {
  
    const [nums, setNums] = useState();
    
    // 버튼 클릭시
    const handleClick = () => {
        let temp = [];
        
        while(temp.length < 8) {
            let num = Math.floor(Math.random()*45)+1;
            if (temp.indexOf(num) < 0)
            temp.push(num);
        }

        setNums(temp);
    }

    useEffect(() => { console.log("nums= " + nums)}, [nums])

    //리턴에는 부모 태그 하나만 가능, 자식노드는 상관없다
    return(
        <main className="container">
            <article>
                <header>
                   <h1>로또번호 생성기</h1>
                </header>
                {nums ? <LottoNums nums={nums}/> : "숫자없음" }
                <footer>
                    <button onClick={handleClick}>생성</button>
                </footer>
            </article>
        </main>
    );
}

export default Lotto;