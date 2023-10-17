import GalleryCard from "./GalleryCard";

const GalleryPhoto = ({photo}) => {
    
  const tags = photo.map((item, idx) => 
    <GalleryCard item={item}/>
  );


    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
      {tags}
    </div>
  )
}

export default GalleryPhoto
