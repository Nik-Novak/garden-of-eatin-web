import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Column,
  Row,
  Text,
  Button,
  Hr,
  Link,
} from '@react-email/components';
import type { Meal } from '@prisma/client'; // Adjust path if needed based on your repo structure
import { getScheduleDisplay } from '@/utils/fns/schedule-formatting';

export type NewMealTemplateProps = {
  appName: string;
  title: string;
  meal: Meal;
  frontendWeb: string;
  token: string;
};

// --- HELPERS ---

// Helper to split CamelCase enums (e.g., "VeganOptions" -> "Vegan Options")
const formatEnum = (text: string) => {
  return text.replace(/([A-Z])/g, ' $1').trim();
};

export default function NewMealTemplate({
  appName,
  title,
  meal,
  frontendWeb,
  token
}: NewMealTemplateProps) {
  
  // 1. Use the exact shared utility to format the schedule text/badge
  const scheduleInfo = getScheduleDisplay(meal.schedule);

  // Construct Links
  const encodedLabel = encodeURIComponent(meal.name);
  const [lng, lat] = meal.location.coordinates;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(meal.place.address)}`;
  const directionsLink = `https://www.google.com/maps/dir/?api=1` + `&destination=${lat},${lng}` + `&destination_place_id=${encodedLabel}` + `&travelmode=${'d'}`
  const approveLink = `${frontendWeb}/meals/${meal.id}/approve?token=${token}`;
  const denyLink = `${frontendWeb}/meals/${meal.id}/reject?token=${token}`;

  return (
    <Html>
      <Head>
        <title>{`${appName}: ${title}`}</title>
        <Preview>{title}</Preview>
      </Head>
      <Body style={main}>
        <Container style={container}>
          
          {/* TOP NAV / HEADER */}
          <Section style={headerSection}>
            <Text style={navLabel}>MEAL DETAILS</Text>
          </Section>

          {/* MAIN TITLE */}
          <Section style={contentSection}>
            <Text style={mainTitle}>{meal.name}</Text>
            {meal.submitter_name && (
              <Text style={submitterText}>
                👤 ADDED BY {meal.submitter_name.slice(0, 15).toUpperCase()}
              </Text>
            )}
          </Section>

          {/* LAYOUT FIX: 
             We wrap the cards in a Section with padding to prevent them 
             from touching the edges.
          */}
          <Section style={cardContainer}>
            
            {/* SCHEDULE CARD */}
            <Row style={cardRow}>
              <Column style={{ width: '40px', verticalAlign: 'middle', paddingLeft: '16px' }}>
                <Text style={iconStyle}>⏰</Text>
              </Column>
              <Column style={{ padding: '16px 16px 16px 0' }}>
                {/* Badge Container */}
                <div style={recurrenceBadge}>
                  <Text style={recurrenceBadgeText}>{scheduleInfo.badge}</Text>
                </div>
                {/* Main Schedule Text */}
                <Text style={infoText}>{scheduleInfo.text}</Text>
              </Column>
            </Row>

            {/* SPACER */}
            <Row><Column style={{ height: '10px' }} /></Row>

            {/* ADDRESS CARD */}
            <Row style={cardRow}>
              <Column style={{ width: '40px', verticalAlign: 'middle', paddingLeft: '16px' }}>
                <Text style={iconStyle}>📍</Text>
              </Column>
              <Column style={{ padding: '16px 0' }}>
                <Link href={mapLink} style={{ ...infoText, textDecoration: 'none' }}>
                  {meal.place.address}
                </Link>
              </Column>
              <Column style={{ width: '40px', verticalAlign: 'middle', textAlign: 'center' }}>
                 <Text style={{color: '#ccc', fontSize: '18px', margin: 0}}>&gt;</Text>
              </Column>
            </Row>

          </Section>

          {/* STATS ROW */}
          <Section style={statsSection}>
            <Row>
              <Column style={statBox}>
                <div style={statCircle}>🏢</div>
                <Text style={statLabel}>SETTING</Text>
                <Text style={statValue}>
                  {meal.setting.length > 0 ? meal.setting.join(' & ') : 'N/A'}
                </Text>
              </Column>
              <Column style={statBox}>
                <div style={statCircle}>🍽️</div>
                <Text style={statLabel}>SERVICE</Text>
                <Text style={statValue}>
                  {meal.service ? formatEnum(meal.service) : 'N/A'}
                </Text>
              </Column>
              <Column style={statBox}>
                <div style={statCircle}>🚗</div>
                <Text style={statLabel}>PARKING</Text>
                <Text style={statValue}>
                  {meal.parking ? formatEnum(meal.parking) : 'N/A'}
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={divider} />

          {/* FEATURES GRID */}
          <Section style={{ padding: '0 24px' }}>
            <Text style={sectionHeader}>Features</Text>
            <div style={{ textAlign: 'left' }}>
              {meal.features.map((feature) => (
                <div key={feature} style={featureBadge}>
                  <span style={{ marginRight: '6px', color: '#E50914' }}>✓</span>
                  {formatEnum(feature)}
                </div>
              ))}
              {meal.features.length === 0 && (
                <Text style={{ color: '#999', fontStyle: 'italic' }}>No specific features listed.</Text>
              )}
            </div>
          </Section>

          <Section style={{ padding: '30px 20px 40px' }}>
            <Button
              href={directionsLink}
              style={button}
            >
              Get Directions
            </Button>
          </Section>

          <Hr style={divider} />

          {/* ADMIN ACTIONS */}
          <Section style={{ padding: '20px 24px 40px' }}>
            <Text style={{ ...sectionHeader, marginBottom: '5px', textAlign: 'center' }}>
              Admin Actions
            </Text>
            <Text style={{ marginBottom: '20px', textAlign: 'center' }}>
              {meal.name}
            </Text>
            <Row>
              <Column style={{ paddingRight: '10px', width: '50%' }}>
                <Button href={approveLink} style={approveButton}>
                  Approve Meal
                </Button>
              </Column>
              <Column style={{ paddingLeft: '10px', width: '50%' }}>
                <Button href={denyLink} style={denyButton}>
                  Deny Meal
                </Button>
              </Column>
            </Row>
            
            {/* Context Link */}
            <Section style={{ marginTop: '20px', textAlign: 'center' }}>
              <Link href={mapLink} style={textLink}>
                View on Google Maps
              </Link>
            </Section>
          </Section>

          {/* FOOTER */}
          <Section style={footer}>
            <Text style={footerText}>
              Sent via {appName} Admin System
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

// --- STYLES ---

const main: React.CSSProperties = {
  backgroundColor: '#f4f4f4',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  padding: '20px 0', // Adjusted for mobile viewports
};

const container: React.CSSProperties = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  maxWidth: '600px',
  borderRadius: '16px',
  overflow: 'hidden',
};

const headerSection: React.CSSProperties = {
  padding: '20px',
  textAlign: 'center',
  borderBottom: '1px solid #f0f0f0',
};

const navLabel: React.CSSProperties = {
  fontSize: '12px',
  fontWeight: '800',
  color: '#999',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  margin: 0,
};

const contentSection: React.CSSProperties = {
  padding: '24px',
};

const mainTitle: React.CSSProperties = {
  fontSize: '32px',
  fontWeight: '900',
  color: '#000',
  margin: '0 0 10px 0',
  letterSpacing: '-0.5px',
  lineHeight: '1.1',
  textAlign: 'center',
};

// New container for cards to handle horizontal padding cleanly
const cardContainer: React.CSSProperties = {
  padding: '0 24px', 
};

const cardRow: React.CSSProperties = {
  backgroundColor: '#f9f9f9',
  borderRadius: '12px',
  width: '100%',
};

const iconStyle: React.CSSProperties = {
  fontSize: '22px',
  margin: 0,
  lineHeight: '1',
};

const infoText: React.CSSProperties = {
  fontSize: '15px',
  color: '#444',
  fontWeight: '600',
  margin: 0,
  lineHeight: '20px',
};

const recurrenceBadge: React.CSSProperties = {
  backgroundColor: '#FFF5F5',
  padding: '3px 8px',
  borderRadius: '6px',
  border: '1px solid #ffebeb',
  display: 'inline-block',
  marginBottom: '6px',
};

const recurrenceBadgeText: React.CSSProperties = {
  fontSize: '10px',
  fontWeight: '800',
  color: '#E50914',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  margin: 0,
};

const statsSection: React.CSSProperties = {
  padding: '20px 10px',
  textAlign: 'center',
};

const statBox: React.CSSProperties = {
  width: '33.33%',
  textAlign: 'center',
  padding: '10px 0',
};

const statCircle: React.CSSProperties = {
  width: '44px',
  height: '44px',
  borderRadius: '22px',
  backgroundColor: '#FFF5F5',
  fontSize: '20px',
  lineHeight: '44px',
  margin: '0 auto 10px auto',
};

const statLabel: React.CSSProperties = {
  fontSize: '10px',
  color: '#bbb',
  textTransform: 'uppercase',
  fontWeight: '800',
  letterSpacing: '0.5px',
  margin: 0,
};

const statValue: React.CSSProperties = {
  fontSize: '14px',
  fontWeight: '800',
  color: '#222',
  margin: '4px 0 0 0',
};

const divider: React.CSSProperties = {
  borderColor: '#f0f0f0',
  margin: '20px 24px',
};

const sectionHeader: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: '900',
  color: '#000',
  marginBottom: '15px',
};

const featureBadge: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: '#fff',
  border: '1px solid #f0f0f0',
  padding: '8px 12px',
  borderRadius: '10px',
  fontSize: '14px',
  fontWeight: '700',
  color: '#444',
  margin: '0 8px 8px 0',
};

const approveButton: React.CSSProperties = {
  backgroundColor: '#2e7d32', // Green
  borderRadius: '10px',
  color: '#fff',
  fontWeight: '700',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  padding: '12px 0',
  width: '100%',
};

const denyButton: React.CSSProperties = {
  backgroundColor: '#c62828', // Red
  borderRadius: '10px',
  color: '#fff',
  fontWeight: '700',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  padding: '12px 0',
  width: '100%',
};

const textLink: React.CSSProperties = {
  color: '#999',
  fontSize: '14px',
  textDecoration: 'underline',
};

const footer: React.CSSProperties = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  textAlign: 'center',
};

const footerText: React.CSSProperties = {
  fontSize: '12px',
  color: '#999',
  margin: 0,
};

const button: React.CSSProperties = {
  backgroundColor: '#E50914', // Matches RN styles.directionsBtn
  borderRadius: '14px',
  color: '#fff',
  fontWeight: '800',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  padding: '16px 0',
  width: '100%',
  letterSpacing: '0.5px',
};

const submitterText: React.CSSProperties = {
  fontSize: '10px',
  fontWeight: '700',
  color: '#aaa',
  letterSpacing: '1px',
  textAlign: 'center',
  marginTop: '4px',
  textTransform: 'uppercase',
};