import React from 'react';
import Layout from '@theme/Layout';
import CalendarInstance from '../utils/calendar'; 

export default function AirdropCalendar() {
    return (
        <Layout title="Airdrop Calendar" description="Airdrop Calendar Page">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                }}
            >
                <h1>空投日历(UTC+8)</h1>
                <div style={{ width: '80vw'}}>
                    <CalendarInstance /> 
                </div>
            </div>
        </Layout>
    );
};