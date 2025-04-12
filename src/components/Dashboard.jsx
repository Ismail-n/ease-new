import { BenefitPayButton, Edges, Locale } from '@tap-payments/benefit-pay-button'
import React, { useState } from 'react'
import google_icon from '../assets/images/google-icon.svg'
import { useDispatch } from 'react-redux';
import { setLogin } from '../features/counter/CounterSlice';






function Dashboard() {
  const [navBubble, setNavBubble] = useState(false);
  const dispatch = useDispatch();
  const showOrHideBubble = () => {
    if (navBubble) {
      setNavBubble(false);
    } else {
      setNavBubble(true);
    }
  };
  const clickOnLogoutButton = () => {

    localStorage.removeItem('isLogin');
    dispatch(setLogin(false));
  };
  return (
    <div className='row'>
      <div className="col-12">
        <div className="row">
          <div className="col-lg-6 bg-danger">
            <h1>Left</h1>
          </div>
          <div className="col-lg-6 navPanel">
            <div className="userProfileBubble">
              <button onClick={showOrHideBubble}><img src={google_icon} alt="" /></button>
            </div>
            {
              !navBubble ? null :

                <div className="navBubbleDropdownOptionswrapper">
                  <div className="navBubbleDropdownOptions">
                    <ul>
                      <li>Profile</li>
                      <li>Settings</li>
                      <li onClick={clickOnLogoutButton}>Logout</li>
                    </ul>

                  </div>
                </div>
            }
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 bg-primary">
            <h1>3</h1>
          </div>
          <div className="col-lg-4">
            <BenefitPayButton
              // required (The public Key provided by Tap)
              operator={{
                publicKey: 'pk_test_EtHFV4BuPQokJT6jiROls87Y',
                hashString: '308bbcecd069c1a50c64b0eeb6379c83b29431a1762046c63556a09190eed134'
              }}
              // optional (to enable the debug mode)
              debug={true}
              // required
              merchant={{
                // required (The merchant identifier provided by Tap)
                id: 'merchant_xxxx'
              }}
              // required
              transaction={{
                // required (The amount to be charged)
                amount: '12',
                // required (The currency of the amount)
                currency: 'BHD'
              }}
              reference={{
                transaction: 'txn_123',
                order: 'ord_123'
              }}
              // optional (The billing contact information)
              customer={{
                //"OPTIONAL : Customer ID",
                names: [
                  {
                    // required : en or ar",
                    lang: Locale.EN,
                    // required : First name of the customer.",
                    first: 'test',
                    // required : Last name of the customer.",
                    last: 'tester',
                    // optional : Middle name of the customer.",
                    middle: 'test'
                  }
                ],
                // optional: Defines the contact details for the customer
                contact: {
                  // optional: The customer's email",
                  email: 'test@gmail.com',
                  // optional: The customer's phone number"
                  phone: {
                    // required:  The customer's country code",
                    countryCode: '+20',
                    // required:  The customer's phone number
                    number: '1000000000'
                  }
                }
              }}
              //optional (for styling button)
              interface={{
                // optional (The locale of the Benefit Pay button and it can be one of these locales:[EN,AR])
                locale: Locale.EN,
                // optional (The border of the button and it can be one of these values:[curved,straight])
                edges: Edges.CURVED
              }}
              post={{
                url: 'some_url'
              }}
              // optional (A callback function that will be called when you button is clickable)
              onReady={() => {
                console.log('Ready')
              }}
              // optional (A callback function that will be called when the button clicked)
              onClick={() => {
                console.log('Clicked')
              }}
              // optional (A callback function that will be called when you cancel the payment)
              onCancel={() => console.log('cancelled')}
              // optional (A callback function that will be called when you have an error)
              onError={(err) => console.log('onError', err)}
              // optional (A async function that will be called after creating the token successfully)
              onSuccess={(data) => {
                // do your stuff here...
                console.log(data)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
