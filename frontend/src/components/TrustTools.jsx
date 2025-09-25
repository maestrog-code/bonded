import React, { useState, useEffect } from 'react'
import { getCalendarEvents, getTrustAlerts } from '../utils/api';

export default function TrustTools(){
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [trustAlerts, setTrustAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const events = await getCalendarEvents();
      setCalendarEvents(events);

      const alerts = await getTrustAlerts();
      setTrustAlerts(alerts);
    };
    fetchData();
  }, []);

  return (
    <div style={{display:'grid',gap:16,gridTemplateColumns:'1fr 1fr 1fr'}}>
      <div className="card">
        <h4>Trust Alerts</h4>
        <p style={{fontSize:13}}>Notifications for status changes and suspicious activity.</p>
        {trustAlerts.length > 0 ? (
          <ul>
            {trustAlerts.map((alert, index) => (
              <li key={index}>{alert.message}</li>
            ))}
          </ul>
        ) : (
          <p style={{fontSize:13}}>No new alerts.</p>
        )}
      </div>
      <div className="card">
        <h4>Shared Calendar</h4>
        <p style={{fontSize:13}}>Anniversaries and dates in one place.</p>
        {calendarEvents.length > 0 ? (
          <ul>
            {calendarEvents.map((event, index) => (
              <li key={index}>{event.title} - {event.date}</li>
            ))}
          </ul>
        ) : (
          <p style={{fontSize:13}}>No upcoming events.</p>
        )}
      </div>
      <div className="card" style={{opacity: 0.5}}>
        <h4>Social Media</h4>
        <p style={{fontSize:13}}>Connect your social media accounts.</p>
        <p style={{fontSize:11, color: 'var(--secondary-color)', fontWeight: 'bold'}}>Under Development</p>
      </div>
    </div>
  )
}
