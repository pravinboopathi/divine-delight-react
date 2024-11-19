import { useState } from 'react';
import messageImage from '../img/message.png';

const Message = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ show: false, type: '', message: '' });

    const API_KEY = '5203fa70-07f3-4c97-9ede-b414c14b7e68';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ show: false, type: '', message: '' });

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: API_KEY,
                    subject: `New message from ${formData.name}`,
                    ...formData,
                }),
            });

            const data = await response.json();
            if (data.success) {
                setStatus({
                    show: true,
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully.',
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Message not sent');
            }
        } catch (error) {
            setStatus({
                show: true,
                type: 'error',
                message: 'Oops! Something went wrong. Please try again.',
            });
        } finally {
            setLoading(false);
            setTimeout(() => setStatus({ show: false, type: '', message: '' }), 3000);
        }
    };

    return (
        <div className='bg-gray-100 '>

      
        <section className=" py-16 px-6 md:px-10 lg:px-40">
            <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                <form
                    onSubmit={handleSubmit}
                    className="flex-1 flex flex-col gap-6 w-full"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center md:text-left">
                        Get in Touch
                    </h2>

                    <p className="text-gray-600 text-center md:text-left">
                        Feel free to send us your thoughts, questions, or good wishes.
                    </p>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        required
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        required
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your Message"
                        required
                        rows="5"
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {status.show && (
                        <div
                            className={`mt-4 p-4 rounded-lg text-center ${
                                status.type === 'success'
                                    ? 'bg-green-500 text-white'
                                    : 'bg-red-500 text-white'
                            }`}
                        >
                            {status.message}
                        </div>
                    )}
                </form>

                <div className="hidden md:block">
                    <img
                        src={messageImage}
                        alt="Message"
                        className="w-80 "
                    />
                </div>
            </div>
        </section>
        </div>
    );
};

export default Message;
