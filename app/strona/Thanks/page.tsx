// pages/submit.tsx
import React from 'react';

const SubmitPage: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="container max-w-md bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105">
                <div className="text-center">
                    <div className="text-4xl mb-4">🎉</div>
                    <h1 className="text-3xl font-bold mb-2">Dziękujemy za przesłanie!</h1>
                    <p className="text-green-600 text-lg mb-4">Twoje dane zostały wysłane pomyślnie.</p>
                    <p className="text-gray-700 mb-4">Mamy nadzieję, że zostaniesz skontaktowany wkrótce.</p>
                    <a href="/" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-lg inline-block">
                        Wróć do strony głównej
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SubmitPage;
