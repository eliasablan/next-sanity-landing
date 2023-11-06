'use client';
import { useRouter } from 'next/navigation';

const BackToHomeButton = ({ children }) => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      {children}
    </button>
  );
};

export default BackToHomeButton;
