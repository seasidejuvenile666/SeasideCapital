import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/zh-cn'; 
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarInstance = () => {

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
            title: '11:00 $ZKF结束认领',
            start: new Date(2024, 0, 9, 11, 0),
            end: new Date(2024, 0, 9, 11, 0),
            url: 'https://zkfair.io/airdrop',
        },
        {
            title: '18:00 $XAI上线binance',
            start: new Date(2024, 0, 9, 18, 0),
            end: new Date(2024, 0, 9, 18, 0),
            url: 'https://www.binance.com/zh-CN/trade/XAI_USDT?type=spot',
        },
        {
            title: '17:00 $NAM结束认领',
            start: new Date(2024, 0, 12, 17, 0),
            end: new Date(2024, 0, 12, 17, 0),
            url: 'https://rpgfdrop.namada.net',
        },
        {
            title: '17:30 $Manta领取',
            start: new Date(2024, 0, 18, 17, 30),
            end: new Date(2024, 0, 18, 17, 30),
            url: 'https://airdrop.manta.network',
        },
        {
            title: '18:00 $Manta上线binance',
            start: new Date(2024, 0, 18, 18, 0),
            end: new Date(2024, 0, 18, 18, 0),
            url: 'https://www.binance.com/zh-CN/trade/MANTA_USDT?type=spot',
        },
        {
            title: '18:00 $Manta上线bitget',
            start: new Date(2024, 0, 18, 18, 0),
            end: new Date(2024, 0, 18, 18, 0),
            url: 'https://www.bitget.com/zh-CN/spot/MANTAUSDT',
        },
        {
            title: '20:00 $DYM结束认领',
            start: new Date(2024, 0, 21, 20, 0),
            end: new Date(2024, 0, 21, 20, 0),
            url: 'https://genesis.dymension.xyz',
        },
        {
            title: '17:00 $ALT领取',
            start: new Date(2024, 0, 25, 17, 0),
            end: new Date(2024, 0, 25, 17, 0),
            url: 'https://airdrop.altlayer.io/',
        },
        {
            title: '18:00 $ALT上线binance',
            start: new Date(2024, 0, 25, 18, 0),
            end: new Date(2024, 0, 25, 18, 0),
            url: 'https://www.binance.com/zh-CN/trade/ALT_USDT?type=spot',
        },
        {
            title: '14:00 OK开启dmail挖矿',
            start: new Date(2024, 0, 26, 14, 0),
            end: new Date(2024, 0, 26, 14, 0),
            url: '',
        },
        {
            title: '$FLYS领取',
            start: new Date(2024, 0, 26,  0),
            end: new Date(2024, 0, 26,  0),
            url: 'https://flystarter.io/',
        },
        {
            title: 'Kroma NFT发售',
            start: new Date(2024, 0, 29,  0),
            end: new Date(2024, 0, 29,  0),
            url: '',
        },
        {
            title: '20:00 $FRAME空投',
            start: new Date(2024, 0, 31, 20, 0),
            end: new Date(2024, 0, 31, 20, 0),
            url: 'https://www.frame.xyz/governance',
        },
        {
            title: '23:00 $JUP推出',
            start: new Date(2024, 0, 31, 23, 0),
            end: new Date(2024, 0, 31, 23, 0),
            url: '',
        },
        {
            title: '1:00 $DYM上线binance',
            start: new Date(2024, 1, 7, 1, 0),
            end: new Date(2024, 1, 7, 1, 0),
            url: 'https://www.binance.com/zh-CN/trade/DYM_USDT?type=spot',
        },
        {
            title: '20:00 $STRK领取',
            start: new Date(2024, 1, 20, 20, 0),
            end: new Date(2024, 1, 20, 20, 0),
            url: 'https://provisions.starknet.io',
        },
        {
            title: '20:00 $STRK上线OK',
            start: new Date(2024, 1, 20, 20, 0),
            end: new Date(2024, 1, 20, 20, 0),
            url: 'https://www.okx.com/cn/trade-spot/strk-usdt',
        },
        {
            title: 'BTC减半',
            start: new Date(2024, 3, 27),
            end: new Date(2024, 3, 28),
        },
        
    ];

    moment.locale('zh-cn');

    const eventStyleGetter = (event, start, end, isSelected) => {
        return {
          style: {
            fontSize: '14px', 
          },
        };
      };

    const eventClick = (event, e) => {
        if (event.url) {
            window.open(event.url, '_blank'); 
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
                onSelectEvent={eventClick} 
                style={{ height: 700 }} 
            />
        </div>
    );
};

export default CalendarInstance;