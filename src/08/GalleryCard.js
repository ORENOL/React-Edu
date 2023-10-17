
const GalleryCard = ({item, refv}) => {
    const year = item.galPhotographyMonth.slice(0,4,1)
    const mon = item.galPhotographyMonth.slice(4,6,1)

    const searchTag = item.galSearchKeyword.split(', ').map((item, idx) => 
        <span onClick={() => handleClick(item)} key={`sp${idx}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item}</span>
        )

    const handleClick = (item) => {
      console.log(item)
      refv.current.value = item
      refv.current.focus()
    }

  return (
<div key={item.galContentId} className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={item.galWebImageUrl} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item.galTitle}</div>
    <p className="text-gray-700 text-base">
        장소: {item.galPhotographyLocation}<br/>
        촬영일: {year}년 {mon}월
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
  {searchTag}   
</div>
  )
}

export default GalleryCard
