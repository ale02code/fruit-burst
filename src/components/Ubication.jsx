function Ubication() {
  return (
    <section className="ubication" id="ubication">
      <iframe
        className="ubication__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.0767599021365!2d-89.19190832611876!3d13.713800698174538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330bd7b5f9183%3A0xeb2be1ba21ec1c51!2sLiceo%20Cristiano%20%22Reverendo%20Juan%20Bueno%22%20Central!5e0!3m2!1ses-419!2ssv!4v1723358383485!5m2!1ses-419!2ssv"
        // style={{ border: 0, width: "100%", height: "300px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Ubication;
