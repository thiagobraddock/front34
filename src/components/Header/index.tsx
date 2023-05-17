import { useEffect, useRef, useState } from 'react';
import logoWhite from '../../assets/images/logo/white-logo.png';
import logo from '../../assets/images/logo/logo.svg';

function Header() {
  const [isNavOnTop, setIsNavOnTop] = useState(true);
  const togglerRef = useRef<HTMLButtonElement>(null);
  const navBarAreaRef = useRef<HTMLHeadElement>(null);
  const navBarBrandRef = useRef<HTMLAnchorElement>(null);

  const handlePageScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const elem = e.target as HTMLAnchorElement;
    const elemId = elem.href.split('#')[1];
    document.querySelector(`#${elemId}`)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleTogglerClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    togglerRef?.current?.classList?.toggle('active');
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset === 0) {
        setIsNavOnTop(true);
      } else {
        setIsNavOnTop(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={ `header navbar-area ${!isNavOnTop ? 'sticky' : ''}` }
      ref={ navBarAreaRef }
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="https://betrybe.com" ref={ navBarBrandRef }>
                  <img
                    src={ isNavOnTop ? logoWhite : logo }
                    alt="Logo"
                  />
                </a>
                <button
                  ref={ togglerRef }
                  className="navbar-toggler mobile-menu-btn"
                  style={ { border: 'none' } }
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  onClick={ handleTogglerClick }
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a
                        href="#home"
                        className="page-scroll active"
                        aria-label="Toggle navigation"
                        onClick={ handlePageScrollClick }
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#team"
                        className="page-scroll"
                        aria-label="Toggle navigation"
                        onClick={ handlePageScrollClick }
                      >
                        Time
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#news"
                        className="page-scroll"
                        aria-label="Toggle navigation"
                        onClick={ handlePageScrollClick }
                      >
                        Novidades
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#numbers"
                        className="page-scroll"
                        aria-label="Toggle navigation"
                        onClick={ handlePageScrollClick }
                      >
                        Números
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="button add-list-button">
                  <a
                    href="https://app.betrybe.com/learn"
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Começar estudos
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
