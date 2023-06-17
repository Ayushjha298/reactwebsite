import "./gallery.css"
import Header from "../../components/Header";
import HeaderImage from "../../images/gallery1.jpg"
const Gallery = () => {
  const galleryLength = 15;
  const images = [];
   for(let i=1;i<=galleryLength;i++){
    images.push(require(`../../images/gallery${i}.jpg`))
   }
   console.log(images);
  return (
    <>
    <Header title="Our gallery" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet fuga itaque hic illo ratione at vel dolorum repudiandae aspernatur recusandae.
    </Header>
    <section className="gallery">
      <div className="container gallery_container">
        {
          images.map((image,index)=>{
            return <article key={index}>
              <img src={image} alt={`Gallery Image ${index +1}`} />
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery
