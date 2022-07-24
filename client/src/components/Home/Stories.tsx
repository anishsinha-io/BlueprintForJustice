import GeneralResources from "assets/resource-images/general-resources.png";

const Stories = () => {
  return (
    <section className="app-stories">
      <div className="app-stories__title">
        <div className="stories-title">
          <h1>Hear about stories from the mothers of the movement</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            quasi earum eaque molestias nam voluptatem iste velit unde, qui sint
            architecto quo quidem hic, minima veniam repellat eligendi beatae
            deleniti tempora ipsam?
          </p>
        </div>
      </div>
      <div className="app-stories__img">
        <img src={GeneralResources} alt="legal aid" className="stories-img" />
      </div>
      <div className="app-stories__description">
        <div className="stories-description">
          <h3>Black Mothers Documentary</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            quae, debitis sed quidem beatae, dolore rem unde, velit similique
            libero recusandae dicta excepturi nemo sint iure blanditiis
            voluptatibus dolor vitae.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stories;
