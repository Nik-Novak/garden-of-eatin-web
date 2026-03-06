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
  Img,
  Hr,
  Link,
} from '@react-email/components';
import type { Meal } from '@/generated/prisma/client';

export type MealDetailsTemplateProps = {
  appName: string;
  title:string,
  meal: Meal;
};

// --- HELPERS ---

// Helper to format MS offset to 12h time (e.g., 36000000 -> 10:00 AM)
const formatTime = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 || 12;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${displayHours}:${displayMinutes} ${ampm}`;
};

// Helper to split CamelCase enums (e.g., "VeganOptions" -> "Vegan Options")
const formatEnum = (text: string) => {
  return text.replace(/([A-Z])/g, ' $1').trim();
};

export default function MealDetailsTemplate({
  appName,
  title,
  meal,
}: MealDetailsTemplateProps) {
  
  // Logic to determine display time (grabbing the first slot for simplicity)
  const timeSlot = meal.schedule.times[0];
  const timeDisplay = timeSlot 
    ? `${formatTime(timeSlot.start)} - ${formatTime(timeSlot.end)}`
    : 'See details';

  // Construct Google Maps Link
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(meal.place.address)}`;

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
          </Section>

          {/* SCHEDULE CARD */}
          <Section style={cardSection}>
            <Row>
              <Column style={{ width: '40px', verticalAlign: 'top' }}>
                {/* Simulated Icon using Text/Emoji for email safety */}
                <Text style={iconStyle}>⏰</Text>
              </Column>
              <Column>
                <div style={recurrenceBadge}>
                  <Text style={recurrenceBadgeText}>{meal.schedule.type.toUpperCase()}</Text>
                </div>
                <Text style={infoText}>{timeDisplay}</Text>
              </Column>
            </Row>
          </Section>

          {/* ADDRESS CARD */}
          <Section style={{ ...cardSection, marginTop: '10px' }}>
            <Row>
              <Column style={{ width: '40px', verticalAlign: 'top' }}>
                <Text style={iconStyle}>📍</Text>
              </Column>
              <Column>
                <Text style={infoText}>
                  {meal.place.address}
                </Text>
              </Column>
              <Column style={{ width: '20px', verticalAlign: 'middle' }}>
                 <Text style={{color: '#ccc', fontSize: '18px'}}>&gt;</Text>
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
          <Section style={{ padding: '0 20px' }}>
            <Text style={sectionHeader}>Features</Text>
            {/* Note: Flexbox wrapping is notoriously bad in Email. 
              We use inline-block divs for a tag-cloud effect.
            */}
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

          {/* CTA BUTTON */}
          <Section style={{ padding: '30px 20px 40px' }}>
            <Button
              href={mapLink}
              style={button}
            >
              Get Directions
            </Button>
          </Section>

          {/* FOOTER */}
          <Section style={footer}>
            <Text style={footerText}>
              Sent via {appName}
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
  padding: '20px',
};

const container: React.CSSProperties = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  maxWidth: '600px',
  borderRadius: '16px', // Matches RN styles.fullScreenContainer / rounded feel
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
  padding: '24px 24px 10px 24px',
};

const mainTitle: React.CSSProperties = {
  fontSize: '32px', // Matches RN 34px roughly
  fontWeight: '900',
  color: '#000',
  margin: '0 0 20px 0',
  letterSpacing: '-0.5px',
  lineHeight: '1.1',
};

const cardSection: React.CSSProperties = {
  backgroundColor: '#f9f9f9', // Matches RN styles.addressBox
  margin: '0 20px',
  padding: '16px',
  borderRadius: '12px',
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
  backgroundColor: '#FFF5F5', // Matches RN styles.recurrenceBadge
  padding: '3px 8px',
  borderRadius: '6px',
  border: '1px solid #ffebeb',
  display: 'inline-block',
  marginBottom: '4px',
};

const recurrenceBadgeText: React.CSSProperties = {
  fontSize: '10px',
  fontWeight: '800',
  color: '#E50914', // Matches RN red
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
  lineHeight: '44px', // Centers emoji vertically
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
  margin: '10px 20px 20px 20px',
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