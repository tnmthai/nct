
import React from 'react';

// --- Helper Components (Defined outside the main component) ---

const Logo = () => (
    <svg 
      className="w-16 h-16 text-teal-600"
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
);

interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, children }) => (
    <div>
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">{title}</h2>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

interface InfoItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, children }) => (
    <div className="flex items-center space-x-4 text-gray-700">
        <div className="flex-shrink-0 w-6 h-6 text-gray-400">{icon}</div>
        <div className="text-base">{children}</div>
    </div>
);


// --- SVG Icons (Defined outside the main component) ---

const ThumbsUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.426 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M6.633 10.5l-1.07-1.07a.75.75 0 00-1.06 1.06l1.07 1.07m0-1.06a.75.75 0 011.06 0l1.07 1.07m-1.07-1.07v10.5m1.07-10.5a.75.75 0 00-1.06 0l-1.07 1.07" />
    </svg>
);

const PriceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
);

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

const MessengerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.917-.464-1.255a11.916 11.916 0 01-2.18-1.88c-.533-.533-.924-1.19-1.176-1.946A9.76 9.76 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
);


// --- Main Application Component ---

const App: React.FC = () => {
    return (
        <main className="bg-slate-100 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                    <header className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                        <div className="flex-shrink-0">
                            <Logo />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Nhà Của Trúc</h1>
                            <p className="text-md text-gray-500 mt-1">Thông tin doanh nghiệp</p>
                        </div>
                    </header>

                    <div className="space-y-10">
                        <InfoSection title="Thông tin cơ bản">
                            <InfoItem icon={<ThumbsUpIcon />}>
                                100% đề xuất <span className="text-gray-500">(13 lượt đánh giá)</span>
                            </InfoItem>
                            <InfoItem icon={<PriceIcon />}>
                                $$
                            </InfoItem>
                            <InfoItem icon={<ClockIcon />}>
                                <div className="flex items-center space-x-2">
                                    <span>Đang đóng cửa</span>
                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                </div>
                            </InfoItem>
                            <InfoItem icon={<MapPinIcon />}>
                                688/93/82 Quang Trung, Gò vấp, Ho Chi Minh City, Vietnam, 70000
                            </InfoItem>
                            <InfoItem icon={<GlobeIcon />}>
                                Quận Gò Vấp, Ho Chi Minh City · Thành phố Hồ Chí Minh
                            </InfoItem>
                        </InfoSection>

                        <InfoSection title="Liên kết">
                            <InfoItem icon={<LinkIcon />}>
                                <a href="http://nhacuatruc.net" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 hover:underline transition-colors duration-200">
                                    nhacuatruc.net
                                </a>
                            </InfoItem>
                        </InfoSection>

                        <InfoSection title="Thông tin liên hệ">
                            <InfoItem icon={<PhoneIcon />}>
                                <a href="tel:+84902791154" className="text-teal-600 hover:text-teal-700 transition-colors duration-200">
                                    +84 90 279 11 54
                                </a>
                            </InfoItem>
                            <InfoItem icon={<EmailIcon />}>
                                <a href="mailto:truchoang2803@gmail.com" className="text-teal-600 hover:text-teal-700 transition-colors duration-200">
                                    truchoang2803@gmail.com
                                </a>
                            </InfoItem>
                            <InfoItem icon={<MessengerIcon />}>
                                Nhà Của Trúc
                            </InfoItem>
                        </InfoSection>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default App;
