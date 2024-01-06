import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/zh-cn'; // 引入中文语言包
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarInstance = () => {
    // 在这里创建你的事件数据，格式为数组，每个事件为一个对象
    const events = [
        {
            title: '19:00 $ZKF上线bitget',
            start: new Date(2024, 0, 5, 19, 0),
            end: new Date(2024, 0, 5, 19, 0),
            url: 'https://www.bitget.com/zh-CN/spot/ZKFUSDT',
        },
        {
            title: '19:00 $ZKF上线gate',
            start: new Date(2024, 0, 5, 19, 0),
            end: new Date(2024, 0, 5, 19, 0),
            url: 'https://www.gate.io/zh/trade/ZKF_USDT',
        },
        {
            title: '17:00 $ZKF上线mexc',
            start: new Date(2024, 0, 6, 17, 0),
            end: new Date(2024, 0, 6, 17, 0),
            url: 'https://www.mexc.com/zh-CN/exchange/ZKF_USDT',
        },
        {
            title: '18:00 $XAI上线binance',
            start: new Date(2024, 0, 9, 18, 0),
            end: new Date(2024, 0, 9, 18, 0),
            url: 'https://www.binance.com/zh-CN/trade/XAI_USDT?type=spot',
        },
        {
            title: '18:00 $ZKF空投认领结束',
            start: new Date(2024, 0, 9, 11, 0),
            end: new Date(2024, 0, 9, 11, 0),
            url: 'https://zkfair.io/airdrop',
        },
        {
            title: '20:00 $DYM',
            start: new Date(2024, 0, 21, 20, 0),
            end: new Date(2024, 0, 21, 20, 0),
            url: 'https://genesis.dymension.xyz',
        },
        {
            title: '17:00 $NAM',
            start: new Date(2024, 0, 12, 17, 0),
            end: new Date(2024, 0, 12, 17, 0),
            url: 'https://rpgfdrop.namada.net',
        },
        {
            title: 'BTC减半',
            start: new Date(2024, 3, 27),
            end: new Date(2024, 3, 28),
        },
        // 添加更多事件...
    ];

    moment.locale('zh-cn');

    const eventStyleGetter = (event, start, end, isSelected) => {
        return {
          style: {
            fontSize: '14px', // 修改字体大小
            // 可以根据需要添加其他样式，比如颜色、背景色等
          },
        };
      };

    const eventClick = (event, e) => {
        if (event.url) {
            window.open(event.url, '_blank'); // 在新标签页打开链接
        }
    };

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                eventPropGetter={eventStyleGetter}
                onSelectEvent={eventClick} // 点击事件的回调函数
                style={{ height: 500 }} // 设置日历的高度
            />
        </div>
    );
};

export default CalendarInstance;