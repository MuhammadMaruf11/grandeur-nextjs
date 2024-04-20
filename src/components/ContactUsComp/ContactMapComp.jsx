import React from 'react';

const ContactMapComp = () => {
    return (
        <section className=''>
            <iframe
                title="Google Map"
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.193455913319!2d55.27022402947976!3d25.204211431924435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43810c7c4dc1%3A0xebfe7de7edb69749!2sGrandeur!5e0!3m2!1sen!2sbd!4v1713590128846!5m2!1sen!2sbd"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="async"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
                    </section>
    );
};

export default ContactMapComp;