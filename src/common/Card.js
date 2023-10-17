const Card = ({key, imgsrc, title, content, Tag}) => {

  let searchTag = null;
  if (Tag){
    searchTag = Tag.split(', ').map((item, idx) => 
        <span key={`sp${idx}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item}</span>
        )
  }

  return (
<div key={key} className="max-w-3xl rounded overflow-hidden shadow-lg">
  <img className="width-full" src={imgsrc} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base line-clamp-6">
        {content}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  </div>
  {searchTag}   
</div>
  )
}

export default Card
