
import React from 'react';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value, href }) => {
  const content = (
    <>
      <div className="flex items-center">
        <span className="w-8 h-8 flex items-center justify-center mr-3">{icon}</span>
        <span className="font-semibold text-gray-600">{label}</span>
      </div>
      <span className="text-teal-800 font-medium text-right break-all">{value}</span>
    </>
  );

  const baseClasses = "flex items-center justify-between p-3 bg-teal-50/70 rounded-lg transition-all duration-300";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} hover:bg-teal-100 hover:shadow-md hover:scale-105`}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={baseClasses}>
      {content}
    </div>
  );
};

export default ContactItem;
