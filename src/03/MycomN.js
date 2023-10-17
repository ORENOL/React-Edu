import style from "./Mycom.module.css"
const MycomN = (probs) => {

    return (
    <div>
    <div className={style.numDiv}>숫자: {probs.n1}</div>
    </div>
    );
};

export default MycomN