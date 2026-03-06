import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Column,
  Text,
  Hr,
} from '@react-email/components';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);


export type GroupedTimeRange = {
  day: Date; // ISO date string
  start: number; // offset in ms from midnight
  end: number;
};

export type DataTableTemplateWAvailabilityProps = {
  appName: string;
  title: string;
  tz: string;
  data: Record<string, SerializableValue | GroupedTimeRange[]>;
};

const HOURS = Array.from({ length: 24 }, (_, i) => i);

function renderAvailabilityGrid(ranges: GroupedTimeRange[], tz: string) {
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const groupedByDay = new Map<number, GroupedTimeRange[]>();

  // Group by local day
  ranges.forEach((range) => {
    const local = dayjs.utc(range.day).tz(tz);
    const localDay = (local.day() + 1)%7; // 0 = Sunday, 6 = Saturday
    if (!groupedByDay.has(localDay)) {
      groupedByDay.set(localDay, []);
    }
    groupedByDay.get(localDay)?.push(range);
  });

  const getHourLabel = (hour: number) =>
    hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`;

  const isHourInRange = (hour: number, ranges: GroupedTimeRange[] | undefined) => {
    if (!ranges) return false;
    return ranges.some((r) => {
      const startLocal = dayjs.utc(r.day).add(r.start, 'ms').tz(tz);
      const endLocal = dayjs.utc(r.day).add(r.end, 'ms').tz(tz);
      const startHour = startLocal.hour();
      const endHour = endLocal.hour() + (endLocal.minute() > 0 || endLocal.second() > 0 ? 1 : 0); // Round up if partial hour
      return hour >= startHour && hour < endHour;
    });
  };

  return (
    <table
      style={{
        borderCollapse: 'collapse',
        width: '100%',
        fontSize: '12px',
        marginBottom: '16px',
      }}
    >
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '4px' }}>Time</th>
          {DAYS.map((day) => (
            <th
              key={day}
              style={{
                border: '1px solid #ccc',
                padding: '4px',
                textAlign: 'center',
              }}
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {HOURS.map((hour) => (
          <tr key={hour}>
            <td
              style={{
                border: '1px solid #ccc',
                padding: '4px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
              }}
            >
              {getHourLabel(hour)}
            </td>
            {DAYS.map((_, dayIndex) => {
              const isAvailable = isHourInRange(hour, groupedByDay.get(dayIndex));
              return (
                <td
                  key={`${dayIndex}-${hour}`}
                  style={{
                    border: '1px solid #ccc',
                    padding: '4px',
                    backgroundColor: isAvailable ? '#4caf50' : '#f0f0f0',
                  }}
                ></td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function DataTableTemplateWAvailability({ appName, title, tz='America/Los_Angeles', data }: DataTableTemplateWAvailabilityProps) {
  return (
    <Html>
      <Head>
        <title>{`${appName}: ${title}`}</title>
        <Preview>{title}</Preview>
      </Head>
      <Body style={{ backgroundColor: '#f4f4f4', padding: '20px' }}>
        <Container>
          <Section>
            <Column>
              <Text style={{ fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>
                {appName}
              </Text>
              <Text style={{ fontSize: '20px', color: '#000000' }}>{title}</Text>
              <Hr style={{ borderColor: '#d8d8d8' }} />
              <Text style={{ fontSize: '18px', fontWeight: 'bold', color: '#000000' }}>
                Data:
              </Text>
              {Object.entries(data).map(([key, value]) => (
                <div key={key}>
                  <Text style={{ fontWeight: 'bold' }}>{key}</Text>
                  {key.endsWith('_availability') && Array.isArray(value) ? (
                    renderAvailabilityGrid(value as GroupedTimeRange[], tz)
                  ) : (
                    <Text>{JSON.stringify(value)}</Text>
                  )}
                </div>
              ))}
            </Column>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
