import { MusicalEventOrganizer, Composer, Pianist, Teacher } from '../../components/works'

export const WorksTabs= [
    {
        name: "Pianist",
        url: '/works/pianist',
        component: <Pianist />
    },
    {
        name: "Teacher",
        url: '/works/teacher',
        component: <Teacher />
    }, 
    {
        name: "Composer",
        url: '/works/composer',
        component: <Composer />
    },
    {
        name: "Musical Event Organizer",
        url: 'works/musical_event_organizer',
        component: <MusicalEventOrganizer />
    },
    
    
    ]