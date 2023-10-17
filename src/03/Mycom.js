import MycomN from "./MycomN";
const Mycom = () => {
    let n = undefined;
   
    /*
    let comTag;
    if (n === undefined)
        comTag = <div>값없1</div>
    else
        comTag = <MycomN n={n} n1={n*2}/>
    */

    return (
        <main className="container">
            <article>
            <header>Mycom</header>
            <MycomN n={10}/>
            {
                // n === undefined 
                // ? <div>값없</div> 
                // : <MycomN n={n} n1={n*2}/>
                
                // 변수로 undefined 예외처리
                // comTag

                //falsy연산 n이 undefined이면 &&은 실행안되고 ||은 실행됨
                n && <MycomN n={n} n1={n*2}/>
            }
            </article>
        </main>

    );
};

export default Mycom