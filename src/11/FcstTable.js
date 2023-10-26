const FcstTable = ({trItem}) => {

    const ultraMain = trItem.map((item, idx) => 
    <tr key={'tr'+idx}>
    <td>{item[0]}</td>
    <td>{item[1]}</td> 
    <td>{item[2]} {item[3]}</td>
  </tr>
    )

  return (
    <table className="table-auto">
    <thead>
    <th>항목명</th>
    <th>예측시간</th>
    <th>예보값</th>
    </thead>
    <tbody>
      {ultraMain}
    </tbody>
  </table>
  )
}

export default FcstTable
