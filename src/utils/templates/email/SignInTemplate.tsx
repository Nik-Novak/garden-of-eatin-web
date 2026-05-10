import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Link,
} from '@react-email/components';

export type SignInTemplateProps = {
  appName: string;
  title: string;
  url: string;
};

export default function SignInTemplate({
  appName = 'Our App',
  title = 'Sign In',
  url = 'https://example.com/magic-link',
}: SignInTemplateProps) {
  
  return (
    <Html>
      <Head>
        <title>{`${title} - ${appName}`}</title>
        <Preview>Your secure sign-in link for {appName} is inside.</Preview>
      </Head>
      <Body style={main}>
        <Container style={container}>
          
          {/* HEADER / LOGO */}
          <Section style={headerSection}>
            <Text style={logoText}>{appName}</Text>
          </Section>

          {/* MAIN CONTENT */}
          <Section style={contentSection}>
            <Text style={mainTitle}>Authenticate your account</Text>
            <Text style={paragraph}>
              You requested a magic link to sign in to <strong>{appName}</strong>. Click the button below to securely access your account.
            </Text>

            <Section style={buttonContainer}>
              <Button href={url} style={magicButton}>
                Sign In Securely
              </Button>
            </Section>

            <Text style={expirationText}>
              This link is secure and will expire in 15 minutes.
            </Text>

            <Hr style={divider} />

            {/* FALLBACK LINK */}
            <Text style={fallbackLabel}>
              Button not working? Copy and paste this URL into your browser:
            </Text>
            <Link href={url} style={fallbackLink}>
              {url}
            </Link>
          </Section>

          {/* FOOTER */}
          <Section style={footer}>
            <Text style={footerText}>
              If you didn't request this email, you can safely ignore it. Your account remains secure.
            </Text>
            <Text style={footerText}>
              © {new Date().getFullYear()} {appName}. All rights reserved.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

// --- STYLES ---

const main: React.CSSProperties = {
  backgroundColor: '#f5f5f7',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: '40px 0',
};

const container: React.CSSProperties = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  maxWidth: '480px', // Slightly narrower for a premium auth card look
  borderRadius: '12px',
  border: '1px solid #eaeaea',
  overflow: 'hidden',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
};

const headerSection: React.CSSProperties = {
  padding: '32px 32px 0',
  textAlign: 'center',
};

const logoText: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: '800',
  color: '#111',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  margin: 0,
};

const contentSection: React.CSSProperties = {
  padding: '24px 32px',
  textAlign: 'center',
};

const mainTitle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: '700',
  color: '#000',
  margin: '0 0 16px 0',
  letterSpacing: '-0.5px',
};

const paragraph: React.CSSProperties = {
  fontSize: '15px',
  lineHeight: '24px',
  color: '#555',
  margin: '0 0 32px 0',
};

const buttonContainer: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '24px',
};

const magicButton: React.CSSProperties = {
  backgroundColor: '#000000',
  borderRadius: '8px',
  color: '#ffffff',
  fontWeight: '600',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  padding: '14px 32px',
  letterSpacing: '0.3px',
};

const expirationText: React.CSSProperties = {
  fontSize: '13px',
  color: '#888',
  margin: '0 0 32px 0',
};

const divider: React.CSSProperties = {
  borderColor: '#eaeaea',
  margin: '0 0 24px 0',
};

const fallbackLabel: React.CSSProperties = {
  fontSize: '13px',
  color: '#666',
  marginBottom: '8px',
};

const fallbackLink: React.CSSProperties = {
  fontSize: '13px',
  color: '#0066cc',
  textDecoration: 'underline',
  wordBreak: 'break-all',
  lineHeight: '18px',
};

const footer: React.CSSProperties = {
  backgroundColor: '#fafafa',
  padding: '24px 32px',
  textAlign: 'center',
  borderTop: '1px solid #eaeaea',
};

const footerText: React.CSSProperties = {
  fontSize: '12px',
  lineHeight: '18px',
  color: '#999',
  margin: '0 0 8px 0',
};