import { FaPencilAlt, FaIndustry } from 'react-icons/fa';
import { BsLightningFill } from 'react-icons/bs';

export const data = {
    services: [
        {
            title: 'design',
            text:  'We design analyzer shelters and cabinets with Ex protection from scratch. Starting just with design envelope and list of analyzers, we deliver complete system documentation ready for manufacturing.',
            svg: <BsLightningFill />
        },
        {
            title: 'MANUFACTURING',
            text:  'We are teamed up with experienced workshops for assembly of analyzer systems. Whether our project or yours, we see it done.',
            svg: <FaIndustry />
            
        },
        {
            title: 'COMMISSIONING',
            text:  'All over the world, we are available to help you out with getting the analyzer systems running along with our experienced service engineers.',
            svg: <FaPencilAlt />
        },
    ],
}