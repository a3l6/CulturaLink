import React from 'react';
import './Events.css';
import Navbar from './Navbar';

const Events = () => {

    const events=[
        {
            name:"*Featured* Marriage Anniversary Party",
            image:"https://www.igbounioncanada.com/wp-content/uploads/2023/11/Madam-helen-2024-1096x1536.jpeg",
            date:"May 18th , 2024",
            description:"We would be honoured if you join us in celebrating our 20th Marriage Anniversary. Please SAVE THE DATE.",
        },
        {
            name:"Ndubuisi Dike 50th Birth day Bash",
            image:"https://www.igbounioncanada.com/wp-content/uploads/2023/08/Nudubuisi-50th-birthday.jpeg",
            date:"June 29th, 2024",
            description:"",
        },
        {
            name:"Abia Cultural Night 2024",
            image:"https://www.igbounioncanada.com/wp-content/uploads/2023/11/Abia-Day-2024.jpeg",
            date:"July 27th 2024",
            description:"",
        },
    ]

    const festivals=[
        {
            name:"New Yam Festival",
            image:"https://upload.wikimedia.org/wikipedia/commons/6/69/NewYam-IgboFestival-Dublin.jpg",
            description:"The New Yam Festival celebrates the harvest season and is a time of thanksgiving and cultural pride. Nigerian communities in Canada could organize events to celebrate the harvest season, share traditional dishes made from yams and other crops, and showcase Nigerian music, dance, and cultural performances.",
        },
        {
            name:"Calabar Carnival",
            image:"https://cdn.vanguardngr.com/wp-content/uploads/2019/12/Pic-8.jpg",
            description:"While replicating the Calabar Carnival in its entirety may be challenging, Nigerian communities in Canada could organize smaller-scale cultural parades, music and dance performances, and food festivals inspired by the Calabar Carnival. These events could be held during the summer months when the weather is conducive to outdoor celebrations.",
        },
        {
            name:"Eyo Festival",
            image:"https://naijaphotostock.com/wp-content/uploads/2020/04/NPS-FES-EYO-022-1.jpg",
            description:"The colorful costumes, parades, and cultural displays of the Eyo Festival could be adapted for cultural festivals and events organized by Nigerian communities in Canada. These events could celebrate Nigerian culture and heritage through music, dance, fashion shows, and art exhibitions.",
        },
    ]

    return (
        <>
                    <Navbar/>
        <div className="event-container">
           <h1>Popular Events This Week</h1>
            <div className="popular-events">
                <img src="https://globalnews.ca/wp-content/uploads/2023/02/GLOBAL-NEWS_TBFF23_3000-x-2000-1_v2.jpg?quality=85&strip=all&w=1200" alt="popular-this-week"></img>
            </div>

            <div className="festive">
            <h2>Upcoming Festivals</h2>
                <div className="upcoming-festivals">
                    <div className="events-container">
                    {festivals.map((festival, index) => (
                        <div className="event-card" key={index}>
                            <img src={festival.image} alt={festival.name} />
                            <div className="event-details">
                                <h3>{festival.name}</h3>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>

        
            <div className="social">            
                <div className="local-meetups">
                <h2>Social events</h2>
                        <div className="events-container">
                        {events.map((event, index) => (
                            <div className="event-card" key={index}>
                                <img src={event.image} alt={event.name} />
                                <div className="event-details">
                                    <h3>{event.name}</h3>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Events;