import React, { useState } from 'react';
import { ReactComponent as LogoSVG } from './../../../Assets/logoIcon.svg';

export const Footer: React.FC = () => {
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

    const handleOpenPrivacyModal = () => setIsPrivacyModalOpen(true);
    const handleClosePrivacyModal = () => setIsPrivacyModalOpen(false);

    return (
        <footer className="w-full">
            <hr className="border-t-2" />
            <div className="flex flex-wrap justify-between items-center px-5 py-8">
                <div className="flex items-center">
                    <LogoSVG className="hidden sm:block h-8 fill-current mr-6" />

                    <a className="hover:underline px-4"  href="/terms">
                        Terms
                    </a>
                    <a className="hover:underline px-4" href="/privacy">
                        Privacy
                    </a>
                </div>
                <span className="text-md">
                    {new Date().getFullYear()} talkScaled ©   Made in Virginia
                </span>
            </div>
        </footer>
    );
};
