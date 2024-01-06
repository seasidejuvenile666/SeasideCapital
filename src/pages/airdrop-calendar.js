import React, { useEffect } from 'react';
import Layout from '@theme/Layout'; // 导入 Docusaurus 的布局组件
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

function FullCalendarPage() {
  useEffect(() => {
    const calendarEl = document.getElementById('calendar');

    const calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin ],
      initialView: 'dayGridMonth',
      // 更多设置和配置项可以在这里添加
    });

    calendar.render(); // 渲染日历
  }, []);

  return (
    <Layout>
      <div id="calendar" style={{ margin: '40px 100px' }}></div>
    </Layout>
  );
}

export default FullCalendarPage;