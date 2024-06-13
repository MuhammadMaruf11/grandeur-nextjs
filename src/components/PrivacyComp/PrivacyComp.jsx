/* eslint-disable react/no-unescaped-entities */

const PrivacyComp = () => {
    return (
        <section className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top py-20 px-3">
            <div className="max-w-screen-lg mx-auto bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 p-4 md:px-7 rounded-md lg:py-14">
                <h2 className="lg:text-3xl text-2xl font-bold mb-4 md:text-center text-theme">Our Commitment to Protecting Your Privacy</h2>
                <p className="text-justify mb-4 lg:text-base text-sm">
                    Our Privacy Policy explains how we collect, use, and protect your personal information when you use our website or services. We are committed to safeguarding your privacy and ensuring the security of your personal data. This policy outlines our data collection practices, the purposes for which we use your information, your rights regarding your data, and how we protect your privacy. Your privacy matters to us, and we are dedicated to being transparent about our data practices.
                </p>
                <ul className=" list-[disclosure-closed] lg:text-base text-sm marker:text-[#f37022] list-inside space-y-2 text-justify">
                    <li><strong>Introduction: </strong>Briefly explain the purpose of the Privacy Policy and its importance for users.</li>
                    <li><strong>Types of Information Collected: </strong>Detail the types of personal information collected, such as name, email address, phone number, IP address, etc.</li>
                    <li><strong>Methods of Collection: </strong>Explain how the website collects user information, including cookies, forms, registration, etc.</li>
                    <li><strong>Purposes of Data Collection: </strong>Describe the purposes for which user data is collected, such as providing services, improving user experience, marketing, etc.</li>
                    <li><strong>Data Usage and Sharing: </strong>Outline how user data is used and whether it is shared with third parties. Include information about data retention periods and any data processing agreements in place.</li>
                    <li><strong>Security Measures: </strong>Explain the security measures implemented to protect user data from unauthorized access, disclosure, alteration, or destruction.</li>
                    <li><strong>User Rights: </strong>Inform users about their rights regarding their personal data, including the right to access, rectify, delete, or restrict processing of their data.</li>
                    <li><strong>Updates to Privacy Policy: </strong>State that the Privacy Policy may be updated periodically and provide a date of the last update.</li>
                    <li><strong>Contact Information: </strong>Provide contact details for users to reach out with any questions or concerns regarding the Privacy Policy.</li>
                    <li><strong>Data Retention: </strong>Specify the period for which user data will be retained and the criteria used to determine the retention period.</li>
                    <li><strong>Cookies and Tracking Technologies: </strong>Explain the use of cookies and other tracking technologies on the website, including the types of cookies used, their purpose, and how users can manage their cookie preferences.</li>
                    <li><strong>Third-Party Links: </strong>Clarify that the Privacy Policy applies only to the website and that users should review the privacy policies of any third-party websites linked from the website.</li>
                    <li><strong>Children's Privacy: </strong>Address how the website handles the privacy of children under the age of 13, in compliance with the Children's Online Privacy Protection Act (COPPA) if applicable.</li>
                    <li><strong>International Data Transfers: </strong>Disclose if user data may be transferred to countries outside the user's country of residence and the safeguards in place to protect the data during such transfers.</li>
                    <li><strong>Data Subject Rights: </strong>Detail the rights users have regarding their personal data, such as the right to access, rectify, delete, or object to the processing of their data.</li>
                    <li><strong>Data Breach Notification: </strong>Outline procedures for notifying users in the event of a data breach, including the timeframe for notification and the information provided to users.</li>
                    <li><strong>California Privacy Rights: </strong>If applicable, provide information on users' rights under the California Consumer Privacy Act (CCPA), including the right to opt-out of the sale of personal information.</li>
                    <li><strong>European Union (EU) Data Protection: </strong>If applicable, explain how the website complies with the General Data Protection Regulation (GDPR) requirements for data protection and user privacy.</li>
                    <li><strong>Contact Information for Data Protection Officer (DPO): </strong>If required by law, provide contact details for the Data Protection Officer responsible for overseeing data protection compliance.</li>
                </ul>
            </div>
        </section>

    );
};

export default PrivacyComp;