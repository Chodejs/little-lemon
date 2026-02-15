import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomerSay from './CustomerSay';
import Chicago from './Chicago';

export default function Homepage() {
    return (
        <div style={{ width: '100%', maxWidth: '850px', textAlign: 'center' }}>
            <h1 style={{ color: '#495E57' }}>Welcome to Little Lemon</h1>
            <CallToAction />
            <Specials />
            <CustomerSay />
            <Chicago />
        </div>
    )
}