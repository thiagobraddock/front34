type CardProps = {
  title: string;
  image: string;
  description: string;
  odd: boolean;
};

export function Card({ title, image, description, odd = false }: CardProps) {
  const imageEl = (
    <div className="col-lg-6 col-md-12 col-12">
      <div className="info-image wow fadeInLeft" data-wow-delay=".3s" style={ { visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInLeft' } }>
        <img className="ss1" alt="#" data-pagespeed-url-hash="2622135838" src={ image } />
      </div>
    </div>
  );

  return (
    <div className="info-one style2">
      <div className="row align-items-center">
        { odd && imageEl }
        <div className="col-lg-6 col-md-12 col-12">

          <div
            className="info-text wow fadeInRight"
            data-wow-delay=".5s"
            style={ { visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInRight' } }
          >
            <h2>{ title }</h2>
            <p>{ description }</p>
            <div className="button">
              <a href="" className="btn">Iniciar</a>
            </div>
          </div>
        </div>
        { odd || imageEl }
      </div>
    </div>
  );
}
