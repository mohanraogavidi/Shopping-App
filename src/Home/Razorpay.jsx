import { useEffect, useRef } from 'react';

const Razorpay = ({ amount, onSuccess, onFailure }) => {
  const razorpayRef = useRef(null);

  useEffect(() => {
    const loadRazorpayScript = () => {
      if (window.Razorpay) {
        initializeRazorpay();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        initializeRazorpay();
      };
      script.onerror = () => {
        console.error('Failed to load Razorpay SDK.');
        alert('Failed to load Razorpay SDK. Please try again.');
        if (onFailure) onFailure();
      };
      document.body.appendChild(script);
    };

    const initializeRazorpay = () => {
      if (!window.Razorpay) {
        console.error('Razorpay SDK not loaded.');
        alert('Razorpay SDK not loaded. Please refresh and try again.');
        if (onFailure) onFailure();
        return;
      }

      const options = {
        key: 'rzp_test_RaOMfa76cxghwi', // Razorpay Test Key ID
        amount: Math.round(amount * 100), // Amount in paisa, rounded to avoid decimals
        currency: 'INR',
        name: 'MS Shoping Mall',
        description: 'Purchase Description',
        image: 'https://your-logo-url.com/logo.png', // Optional: Your logo URL
        handler: function (response) {
          console.log('Payment successful:', response);
          if (onSuccess) onSuccess(response);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999'
        },
        notes: {
          address: 'Customer Address'
        },
        theme: {
          color: '#F37254'
        },
        modal: {
          ondismiss: function() {
            console.log('Payment modal dismissed');
            if (onFailure) onFailure();
          }
        }
      };

      try {
        razorpayRef.current = new window.Razorpay(options);
        razorpayRef.current.open();
      } catch (error) {
        console.error('Error initializing Razorpay:', error);
        alert('Error initializing payment. Please try again.');
        if (onFailure) onFailure();
      }
    };

    if (amount > 0) {
      loadRazorpayScript();
    }

    return () => {
      if (razorpayRef.current) {
        razorpayRef.current.close();
      }
    };
  }, [amount, onSuccess, onFailure]);

  return null; // This component doesn't render anything visible
};

export default Razorpay;


