
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <form >
                <label>
                    Name:
                    <input type="text" placeholder="Enter your name" />
                    <br />
                    Email:
                    <input type="email" placeholder="Enter your mail" />
                    <br />
                    Message:
                    <textarea placeholder="Enter Message query" />
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                    <p>
                        For any queries, feel free to reach out to us. We&apos;ll get back to you as soon as possible.
                    </p>
                    <br />
                    <p>
                        You can also reach us at <a href="mailto:ecom@ecom.com">ecom@ecom.com
                        </a> or call us at <a href="tel:+1234567890">+
                            (123) 456-7890
                        </a>
                    </p>
                </label>
            </form>
        </div>
    );
}

export default Contact;