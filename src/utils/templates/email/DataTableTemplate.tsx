import React from 'react';
import { Html, Head, Preview, Body, Container, Section, Column, Text, Hr } from '@react-email/components';

export type DataTableTemplateProps = {
  appName: string,
  title:string,
  data:Record<string, SerializableValue>
}

export default function DataTableTemplate({appName, title, data}:DataTableTemplateProps){
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
              <Text style={{ fontSize: '24px', fontWeight: 'bold', color: '#000000' }}>{appName}</Text>
              <Text style={{ fontSize: '20px', color: '#000000' }}>{title}</Text>
              <Hr style={{ borderColor: '#d8d8d8' }} />
              <Text style={{ fontSize: '18px', fontWeight: 'bold', color: '#000000' }}>Data:</Text>
              <table>
                <tbody>
                  {Object.entries(data).map(([key, value]) => (
                    <tr key={key}>
                      <td><strong>{key}</strong></td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Column>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}