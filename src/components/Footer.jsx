
import './footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <div className="contain">
            <div className="social">
                <a href="#"><i className="fab fa-facebook">facebook</i></a>
                <vr>  |  </vr>
                <a href="#"><i className="fab fa-instagram">Instagram</i></a>
                <vr>  |  </vr>
                <a href="#"><i className="fab fa-twitter">Twitter</i></a>
                <vr>  |  </vr>
                <a href="#"><i className="fab fa-linkedin">LinkedIn</i></a>
                <vr>  |  </vr>
                <a href="#"><i className="fab fa-youtube">YouTube</i></a>
            </div>
            <footer className="footer">
                <p>&copy; 2024 . All rights reserved.</p>
            </footer>
        </div>

    );

}

export default Footer;