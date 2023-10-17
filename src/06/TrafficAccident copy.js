import Hh1 from "../common/Hh1"
import data from "./dataTaccident.json"

const TrafficAccident1234 = () => {

    console.log(data);


    let c1 = [];
    

    // 대분류 중복없이 배열에 넣기 1 (indexOf)
    const tdata = data.data;
    tdata.map((item) => {
        if (c1.indexOf(item.사고유형_대분류)<0) {
            c1.push(item.사고유형_대분류);
        }
    })

    // 대분류 중복없이 배열에 넣기 2 (Set)
    /*
    c1 = new Set(c1);
    c1 = [...c1];
    */

    console.log(c1);

    let c1Tag = c1.map((item, idx) => 
        <li><button key={`c1${idx}`}>{item}</button></li>
    )

    return (
        <main className="container">
            <article>
                <Hh1 title="사고유형별 교통사고 통계" />
                <nav>
                    <ul>
                        <li><strong>대분류</strong></li>
                    </ul>
                    <ul>
                        {c1Tag}
                    </ul>
                </nav>
            </article>
        </main >
    )
}

export default TrafficAccident