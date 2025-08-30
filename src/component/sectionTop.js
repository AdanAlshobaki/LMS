
import Card from 'react-bootstrap/Card';
import { CiMap } from "react-icons/ci";
import { CiMobile4 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";



function SectionTop(){
return(
<div className='sectionContainer'>
    <Card className='section' style={{ width: '18rem' }}>
     <CiMap  className='icon'/>
      <Card.Body >
        <Card.Title className='TitleCart'>Our Location</Card.Title>
        <p>
         3481 Melrose Place, Beverly Hills <br/> CA 90210
        </p>
      </Card.Body>
    </Card>
    {/* card2 */}
        <Card className='section' style={{ width: '18rem' }}>
    <CiMobile4 className='icon' />
      <Card.Body>
        <Card.Title className='TitleCart'>Telephone</Card.Title>
        <p>
        (+1) 517 397 7100  <br/> (+1) 411 315 8138
        </p>
      </Card.Body>
    </Card>
    {/* card3 */}
        <Card className='section' style={{ width: '18rem' }}>
      <TfiEmail  className='icon' />
      <Card.Body>
        <Card.Title className='TitleCart'>Send email</Card.Title>
        <p>
     Info@example.com  <br/>   admin@example.com
        </p>
      </Card.Body>
    </Card>
    </div>
  );
}

export default SectionTop