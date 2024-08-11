import InstagramButton from "./InstagramButton";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <section className="footer__secondaryNav"></section>
        <section className="footer__motto">
          <h5 className="footer__motto__text">Nutrición en cada sorbo</h5>
        </section>
        <section className="footer__social">
          <a href="https://www.instagram.com/fruitburst_sv/" target="_BLANK">
            <InstagramButton />
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
