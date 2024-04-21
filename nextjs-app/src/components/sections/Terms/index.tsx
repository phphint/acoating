// TermsOfServiceComponent.js
import React from 'react';

const TermsOfServiceComponent = () => {
    return (
        <main className="py-10 text-[#1F211D]">
            <div className="container mx-auto bg-[#fefffe] border-[#EFEEED] p-6">
                <h1 className="text-2xl font-bold">Terms of Service</h1>
                <p className="mt-4">By using the services at Acoating.com, you are agreeing to our terms and conditions as outlined below.</p>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">General Terms</h2>
                    <p>By accessing Acoating.com, you agree to the terms provided in this agreement and accept all legal consequences. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">Service Scope and Pricing</h2>
                    <p>Our services include firearm coating, customization, laser engraving, and gunsmithing. We reserve the right to modify prices and the scope of our services at any time without prior notice to ensure that we can accommodate market conditions and material availability.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">Shipping and Handling</h2>
                    <p>All firearms and parts must be shipped in compliance with all applicable federal, state, and local laws. We are not liable for any damage that may occur during shipping to or from our facility. Please ensure that all shipments are insured for their full value and require a signature upon delivery.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">Payment and Refunds</h2>
                    <p>Full payment is required before any service is rendered. Refunds or adjustments are offered at our discretion, depending on the completion of services and return conditions of your item(s).</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">Liability Limitations</h2>
                    <p>Acoating.com and its employees are not liable for any unauthorized actions, damages, or liabilities incurred in connection with our services, beyond the value of the service provided.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">Privacy Policy</h2>
                    <p>Your privacy is of utmost importance to us. Details provided by customers are used strictly in accordance with our privacy policy for service provision and not shared with any third parties without explicit consent.</p>
                </section>

                <p className="mt-8">These terms are subject to change at any time and without notice. It is your responsibility to check periodically for any changes. Continued use of Acoating.com after any such changes constitutes your consent to such changes.</p>
            </div>
        </main>
    );
};

export default TermsOfServiceComponent;
