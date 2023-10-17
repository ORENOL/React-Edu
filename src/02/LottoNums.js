import style from './Lotto.module.css'

const LottoNums = ({nums}) => {

    let count = 1;

    const numsTag = nums.map((item, idx) => {
        let temp;
        // 1~9
        /*
        if (item<10){
            return (
                temp = <div key={'ns'+idx} className={style.lottonum1}>{item}</div>
            )
        }
        // 10~19
        else if (item<20){
            return (
                temp = <div key={'ns'+idx} className={style.lottonum2}>{item}</div>
            )
        }
        // 20~29
        else if (item<30){
            return (
                temp = <div key={'ns'+idx} className={style.lottonum3}>{item}</div>
            )
        }
        // 30~39
        else if (item<40){
            return (
                temp = <div key={'ns'+idx} className={style.lottonum4}>{item}</div>
            )
        }
        // 40~45
        else if (item<46){
            return (
                temp = <div key={'ns'+idx} className={style.lottonum5}>{item}</div>
            )
        } 
        */

        /*
        switch(item){
            case (item<10): 
                temp = <div key={'ns'+idx} className={style.lottonum1}>{item}</div> 
                break;
            case (item<20): 
            temp = <div key={'ns'+idx} className={style.lottonum1}>{item}</div> 
            break;                
        }
        */
        let n = Math.floor(item/10)
        let ncss = style[`lottonum${n+1}`];
        if (count === 7) {
            ncss = style[`plus`];
            item = "+"
        }
        temp = <div key={'ns'+idx} className={ncss}>{item}</div>
        count++;

        console.log(temp);

        return temp;
    });


    


  return (
    <div className={style.lottobox}>
      {numsTag}
    </div>
  )
}

export default LottoNums