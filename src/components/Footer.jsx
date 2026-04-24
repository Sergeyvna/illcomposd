import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/footer.png" alt="Footer" className="footer__image" />

        <div className="footer__contact">
            <a href="mailto:youremail@example.com">
            <img src="/email.svg" alt="" />
            maicahlou@gmail.com
            </a>

            <a href="https://www.instagram.com/illcomposd/" target="_blank">
            <img src="/instagram.svg" alt="" />
            @illcomposd
            </a>

            <div>
            <img src="/location.svg" alt="" />
            Leeds, UK
            </div>
        </div>
    </footer>
  );
}