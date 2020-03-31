import React from 'react';
import './App.css';
import Basics from './components/basics/Basics'
import References from './components/references/References'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'

function App() {
    const resume = {
        "basics": {
            "name": "John Doe",
            "label": "Programmer",
            "picture": "",
            "email": "john@gmail.com",
            "phone": "(912) 555-4321",
            "website": "http://johndoe.com",
            "summary": "A summary of John Doe...",
            "location": {
            "address": "2712 Broadway St",
            "postalCode": "CA 94115",
            "city": "San Francico",
            "countryCode": "US",
            "region": "California"
        },
        "profiles": [{
            "network": "Twitter",
            "username": "john",
            "url": "http://twitter.com/john"
            }]
        },
        "work": [{
            "company": "Company",
            "position": "President",
            "website": "http://company.com",
            "startDate": "2013-01-01",
            "endDate": "2014-01-01",
            "summary": "Description...",
            "highlights": [
                "Started the company"
            ]
        }],
        "volunteer": [{
            "organization": "Organization",
            "position": "Volunteer",
            "website": "http://organization.com/",
            "startDate": "2012-01-01",
            "endDate": "2013-01-01",
            "summary": "Description...",
            "highlights": [
                "Awarded 'Volunteer of the Month'"
            ]
        }],
        "education": [{
            "institution": "University",
            "area": "Software Development",
            "studyType": "Bachelor",
            "startDate": "2011-01-01",
            "endDate": "2013-01-01",
            "gpa": "4.0",
            "courses": [
                "DB1101 - Basic SQL"
            ]
        }],
        "awards": [{
            "title": "Award",
            "date": "2014-11-01",
            "awarder": "Company",
            "summary": "There is no spoon."
        }],
        "publications": [{
            "name": "Publication",
            "publisher": "Company",
            "releaseDate": "2014-10-01",
            "website": "http://publication.com",
            "summary": "Description..."
        }],
        "skills": [{
            "name": "Web Development",
            "level": "Master",
            "keywords": [
                "HTML",
                "CSS",
                "Javascript"
            ]
        }],
        "languages": [{
            "language": "English",
            "fluency": "Native speaker"
        }],
        "interests": [{
            "name": "Wildlife",
            "keywords": [
                "Ferrets",
                "Unicorns"
            ]
        }],
        "references": [{
            "name": "Jane Doe",
            "reference": "Reference..."
        }]
    }
    return (
        <div className="App">
            <h1 className="title-name">{resume.basics.name}</h1>
            <Basics basics={resume.basics} profiles={resume.profiles}/>
            <Work work={resume.work} education={resume.education} awards={resume.awards} volunteer={resume.volunteer}/>
            <Skills skills={resume.skills} publications={resume.publications} languages={resume.languages} interests={resume.interests}/>
            <References references={resume.references}/>
        </div>
    )
}

export default App;
