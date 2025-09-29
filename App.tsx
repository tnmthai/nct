
import React from 'react';
import ContactItem from './components/ContactItem';
import MapPinIcon from './components/icons/MapPinIcon';
import PhoneIcon from './components/icons/PhoneIcon';
import EnvelopeIcon from './components/icons/EnvelopeIcon';
import ChatBubbleIcon from './components/icons/ChatBubbleIcon';
import GlobeAltIcon from './components/icons/GlobeAltIcon';
import InfoIcon from './components/icons/InfoIcon';

const App: React.FC = () => {
  const address = "688/93/82 Quang Trung, Gò vấp, Ho Chi Minh City, Vietnam, 70000";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 bg-gray-100 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://picsum.photos/seed/modernhome/1920/1080')" }}
      ></div>
      <div className="absolute inset-0 bg-white/60 dark:bg-black/40 z-10"></div>

      <div className="relative z-20 w-full max-w-2xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 text-gray-800 animate-fade-in border border-gray-200/50">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-800">
            Nhà Của Trúc
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Dịch vụ chuyên nghiệp & uy tín
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-teal-200 pb-2 mb-4 flex items-center">
            <MapPinIcon className="h-6 w-6 mr-3 text-teal-600" />
            Khu vực & Địa chỉ
          </h2>
          <div className="bg-gray-50/80 p-4 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              <strong>Địa chỉ:</strong>{' '}
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline">
                {address}
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              <strong>Khu vực cung cấp dịch vụ:</strong> Quận Gò Vấp, Thành phố Hồ Chí Minh
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-teal-200 pb-2 mb-4 flex items-center">
            <InfoIcon className="h-6 w-6 mr-3 text-teal-600" />
            Thông tin liên hệ
          </h2>
          <div className="space-y-4">
            <ContactItem
              icon={<PhoneIcon className="h-5 w-5 text-teal-700" />}
              label="Điện thoại"
              value="+84 90 279 11 54"
              href="tel:+84902791154"
            />
            <ContactItem
              icon={<EnvelopeIcon className="h-5 w-5 text-teal-700" />}
              label="Email"
              value="truchoang2803@gmail.com"
              href="mailto:truchoang2803@gmail.com"
            />
            <ContactItem
              icon={<ChatBubbleIcon className="h-5 w-5 text-teal-700" />}
              label="Messenger"
              value="Nhà Của Trúc"
            />
            <ContactItem
              icon={<GlobeAltIcon className="h-5 w-5 text-teal-700" />}
              label="Website"
              value="nhacuatruc.net"
              href="http://nhacuatruc.net"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
