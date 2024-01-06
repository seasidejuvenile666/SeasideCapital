import React from 'react';
import Layout from '@theme/Layout';
import CalendarInstance from '../utils/calendar'; // 导入你的日历组件

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
                    <CalendarInstance /> {/* 渲染你的日历组件 */}
                </div>
            </div>
        </Layout>
    );
};