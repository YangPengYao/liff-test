import liff from '@line/liff';

const liffId = import.meta.env.VITE_LIFF_ID || '';

const initLIFF = async (): Promise<void> => {
  try {
    await liff.init({ liffId });
    console.log('LIFF initialized successfully');
  } catch (error) {
    console.error('LIFF initialization failed', error);
  }
};

export { initLIFF };
export default liff;
