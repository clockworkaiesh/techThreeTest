import statusDot from '../assets/status-icon.svg'

function Footer() {
  return (
    <footer>
      <div className="footer-id">
        <span>18540578</span>
        <div className="ico">
          <img src={statusDot} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer