const TailTable = ({tbitem}) => {

    const th = tbitem.th.map((item) => 
        <th>{item}</th>
    )

    const tr = tbitem.tr.map((item, idx) =>
    <tr key={`tr${idx}`}>
        {item.map((i) => <td>{i}</td>)}
    </tr>)
    
  return (
    <table className="table-fixed">
    <thead>
        <tr>
            {th}
        </tr>
    </thead>
    <tbody>
        {tr}
    </tbody>
  </table>
  )
}

export default TailTable
