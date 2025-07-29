export default function Footer() {
    const dataing = new Date().getFullYear();
    return(
        <>
            <footer className="h-auto w-full bg-gray-900 absolute">
                <div className="lg:px-10 px-4 text-white block lg:flex lg:justify-around pt-14 lg:mb-20 text-lg">
                    <div className="my-8 lg:my-0">
                        <ul>
                            <li><i className="fa-solid fa-file-arrow-down mr-2"></i><a href="/cv.pdf" download>Download Cv</a></li>
                            <li><i className="fa-solid fa-comments mr-2"></i><a href="/chat">Chat</a></li>
                            <li><i className="fa-solid fa-blog mr-2"></i><a href="/blog">Blog</a></li>
                            <li><i className="fa-solid fa-envelope mr-2"></i><a href="/contact">Contact</a></li>
                            <li><i className="fa-solid fa-user mr-2"></i><a href="/about">About</a></li>
                        </ul>
                    </div>
                    <div className="my-8 lg:my-0">
                        <ul>
                            <li><i className="fa-solid fa-briefcase mr-2"></i><a href="/portfolio">Portfolio</a></li>
                            <li><i className="fa-brands fa-github mr-2"></i><a href="https://github.com/antoinemben12" target="_blank" rel="noopener noreferrer">Github</a></li>
                            <li><i className="fa-brands fa-instagram mr-2"></i><a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><i className="fa-brands fa-telegram mr-2"></i><a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                            <li><i className="fa-brands fa-facebook mr-2"></i><a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        </ul>
                    </div>
                    <div className="my-8 lg:my-0">
                        <ul>
                            <li><i className="fa-brands fa-linkedin mr-2"></i><a href="https://linkedin.com/in/antoineMen" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                            <li><i className="fa-solid fa-envelope mr-2"></i><a href="mailto:ngwemmben@gmail.com">Email</a></li>
                            <li><i className="fa-brands fa-whatsapp mr-2"></i><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
                            <li><i className="fa-solid fa-tags mr-2"></i><a href="/pricing">Pricing</a></li>
                            <li><i className="fa-brands fa-free-code-camp mr-2"></i><a href="https://freecodecamp.org" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a></li>
                        </ul>
                    </div>
                    <div className="my-8 lg:my-0">
                        <ul>
                            <li><i className="fa-solid fa-graduation-cap mr-2"></i><a href="https://coursera.org" target="_blank" rel="noopener noreferrer">Formation</a></li>
                            <li><i className="fa-solid fa-eye mr-2"></i><a href="/portfolio">View Projects</a></li>
                            <li><i className="fa-solid fa-code mr-2"></i><a href="/about">Skills</a></li>
                            <li><i className="fa-solid fa-house mr-2"></i><a href="/">Start Page</a></li>
                            <li><i className="fa-brands fa-twitter mr-2"></i><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </div>
                    <div className="my-8 lg:my-0">
                        <p>Send Feedback</p>
                        <div className="lg:w-62 w-3/4 border items-center h-10 flex bg-white border-black">
                            <input type="text" className="lg:w-50 w-11/12 h-10 text-black bg-transparent px-1 outline-0" placeholder="Enter a feedback"/>
                            <button type="submit" className="cursor-pointer bg-blue-600 h-full w-full px-2"><i className="fa-solid fa-paper-plane text-white"></i></button>
                        </div>
                        <p className="text-sm text-blue-600">thanks for your feedbacks</p>
                    </div>
                </div>
                <div className="bottom-0 absolute ml-14 text-white">
                    <p>All rights reserved <b className="text-blue-900">{dataing}</b></p>
                </div>
            </footer>
        </>
    );
}
