"use client"
import React, { useState } from 'react';

const MultiSectionContent: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('section1');

    const handleSectionChange = (section: string) => {
        setActiveSection(section);
    };

    return (
        <main className="container mx-auto py-8">
        {activeSection === 'section1' && (
            <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Section 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>
        )}

        {activeSection === 'section2' && (
            <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Section 2</h2>
            <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </section>
        )}

        {activeSection === 'section3' && (
            <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Section 3</h2>
            <p>Vestibulum quis quam ut magna consequat faucibus.</p>
            </section>
        )}
        </main>
    );
};

export default MultiSectionContent;
