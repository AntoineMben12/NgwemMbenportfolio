import './footer.css';
export default function Footer() {
    const dataing = new Date().getFullYear();
    return(
        <>
            <footer className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <ul>
                            <li><i className="fa-solid fa-file-arrow-down mr-2"></i><a href="/cv.pdf" download>Download Cv</a></li>
                            <li><i className="fa-solid fa-comments mr-2"></i><a href="/chat">Chat</a></li>
                            <li><i className="fa-solid fa-blog mr-2"></i><a href="/blog">Blog</a></li>
                            <li><i className="fa-solid fa-envelope mr-2"></i><a href="/contact">Contact</a></li>
                            <li><i className="fa-solid fa-user mr-2"></i><a href="/about">About</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <ul>
                            <li><i className="fa-solid fa-briefcase mr-2"></i><a href="/portfolio">Portfolio</a></li>
                            <li><i className="fa-brands fa-github mr-2"></i><a href="https://github.com/antoinemben12" target="_blank" rel="noopener noreferrer">Github</a></li>
                            <li><i className="fa-brands fa-instagram mr-2"></i><a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><i className="fa-brands fa-telegram mr-2"></i><a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                            <li><i className="fa-brands fa-facebook mr-2"></i><a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <ul>
                            <li><i className="fa-brands fa-linkedin mr-2"></i><a href="https://linkedin.com/in/antoineMen" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                            <li><i className="fa-solid fa-envelope mr-2"></i><a href="mailto:ngwemmben@gmail.com">Email</a></li>
                            <li><i className="fa-brands fa-whatsapp mr-2"></i><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
                            <li><i className="fa-solid fa-tags mr-2"></i><a href="/pricing">Pricing</a></li>
                            <li><i className="fa-brands fa-free-code-camp mr-2"></i><a href="https://freecodecamp.org" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <ul>
                            <li><i className="fa-solid fa-graduation-cap mr-2"></i><a href="https://coursera.org" target="_blank" rel="noopener noreferrer">Formation</a></li>
                            <li><i className="fa-solid fa-eye mr-2"></i><a href="/portfolio">View Projects</a></li>
                            <li><i className="fa-solid fa-code mr-2"></i><a href="/about">Skills</a></li>
                            <li><i className="fa-solid fa-house mr-2"></i><a href="/">Start Page</a></li>
                            <li><i className="fa-brands fa-twitter mr-2"></i><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <p>Send Feedback</p>
                        <div className="footer-feedback">
                            <input type="text" className="footer-input" placeholder="Enter a feedback"/>
                            <button type="submit" className="footer-btn"><i className="fa-solid fa-paper-plane footer-btn-icon"></i></button>
                        </div>
                        <p className="footer-feedback-msg">thanks for your feedbacks</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>All rights reserved <b className="footer-bottom-year">{dataing}</b></p>
                </div>
            </footer>
        </>
    );
}
