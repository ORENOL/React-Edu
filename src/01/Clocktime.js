import { useEffect, useState } from "react";

const Clocktime = () => {
    // 일반 변수는 재렌더링이 되지 않으므로 상태변수로 선언하여 호출시마다 재랜더링되도록 함
    const [dt, setDt] = useState();

    // 처음 한번만 무언가 변화가 감지되면 실행됨
    useEffect(()=> {
        const t = setInterval(() => {
            setDt(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(t);
    }, [])

    // 특정 변수가 바뀔때 실행
    useEffect(() => {
        console.log(dt);
    }, [dt])




    return (
        <div>현재시간 : {dt}</div>
    );
}

export default Clocktime;