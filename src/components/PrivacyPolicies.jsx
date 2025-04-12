import React from 'react'

function PrivacyPolicies() {
    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-4">Effective Date: April 12, 2025</p>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                <p>
                    This Privacy Policy explains how we collect, use, disclose, and protect information
                    in connection with our screen management system deployed across various locations,
                    including private premises and public places.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
                <ul className="list-disc list-inside">
                    <li><strong>Device Information:</strong> We collect data from display devices such as device ID, IP address, and screen location.</li>
                    <li><strong>Usage Data:</strong> Includes screen uptime, content display logs, and system diagnostics.</li>
                    <li><strong>Location Data:</strong> The physical location of screens for managing content distribution effectively.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. Public Display Locations</h2>
                <p>
                    Our services may include screen displays in public areas such as malls, transit stations,
                    or building lobbies. No personal data from viewers is collected through these screens.
                    These are strictly used for content delivery and are monitored only for operational metrics.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. How We Use Your Information</h2>
                <ul className="list-disc list-inside">
                    <li>To manage and schedule digital content on remote screens.</li>
                    <li>To monitor system health and optimize performance.</li>
                    <li>To improve the delivery of targeted content (based on screen location, not personal data).</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
                <p>
                    We implement appropriate technical and organizational measures to safeguard the
                    integrity of our systems and protect against unauthorized access or disclosure.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. Third-Party Services</h2>
                <p>
                    We may use trusted third-party services for analytics and content delivery. These
                    services do not have access to any personal information.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy periodically. Changes will be posted on this page
                    with an updated effective date.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                    <br />
                    <strong>Email:</strong> privacy@ease-new.com
                </p>
            </section>
        </div>
    );
}

export default PrivacyPolicies
