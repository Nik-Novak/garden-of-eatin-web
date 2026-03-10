import React, { Suspense } from 'react';
import LoadAgreement from '@/components/LoadAgreement';

export default function TermsPage() {
  return (
    <main style={styles.container}>
      <Suspense fallback={<div style={styles.loading}>Loading...</div>}>
        <div style={styles.content}>
          <LoadAgreement type="TermsofService" />
        </div>
      </Suspense>
    </main>
  );
}

// 'satisfies' checks the types without losing your specific key names!
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '60px 24px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  loading: {
    padding: '40px 0',
    textAlign: 'center', // No longer need 'as const' here!
    color: '#6b7280',
  },
  content: {
    lineHeight: 1.6,
    color: '#111827',
  }
} satisfies Record<string, React.CSSProperties>;