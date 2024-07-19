import React from 'react';
import '../style/services.css';

function Services() {
    const services = [
        {
          icon: 'fa-users',
          title: 'Community Matching',
          description: 'Use AI to connect you with the ideal events and communities that suit your interests and professional needs.'
        },
        {
          icon: 'fa-rocket',
          title: 'Event Discovery',
          description: 'Discover events where you can engage, learn, and network with like-minded individuals and industry leaders.'
        },
        {
          icon: 'fa-brain',
          title: 'AI-driven Insights',
          description: 'Get personalized event recommendations based on your interaction, preferences, and networking history.'
        },
        {
          icon: 'fa-heart',
          title: 'Passion Alignment',
          description: 'Find communities and events that resonate with your passions, enhancing your personal and professional growth.'
        },
        {
          icon: 'fa-chart-line',
          title: 'Engagement Analytics',
          description: 'Track your event activities and engagement to better understand your community impact and networking success.'
        },
        {
          icon: 'fa-user-friends',
          title: 'Networking Opportunities',
          description: 'Unlock new opportunities by connecting with professionals and enthusiasts in diverse fields.'
        }
      ];
    
      return (
        <div className="app">
          <section className="section services-section" id="services">
            <div className="container">
              <div className="section-title">
                <h2>Our Services</h2>
                <p>We leverage advanced AI to tailor event experiences, ensuring you connect with the perfect community and opportunities.</p>
              </div>
              <div className="row">
                {services.map((service, index) => (
                  <div key={index} className="col-lg-4">
                    <div className="feature-box-1">
                      <div className="icon">
                        <i className={`fa ${service.icon}`}></i>
                      </div>
                      <div className="feature-content">
                        <h5>{service.title}</h5>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }
  
  export default Services;