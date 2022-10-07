import React from 'react';
import ReactDOM from 'react-dom';

function sendOrder(email, amount, venmo) {
  fetch("https://lostmindsbackend.vercel.app/addOrder", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      venmo: venmo,
      amount: amount,
      orderId: 'abc123',
      status: 'pending'
    }),
  }).then((res) => res.json())
  window.alert('Payment request sent for Order ID: abc123. Check on your order status under orders in your account profile');
}

const handleSubmit = (e) => {
  e.preventDefault();
  sendOrder(e.target.email.value, 55, e.target.username.value);
}

const Modal = ({ isShowing, hide }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      <div class="orderForm">
      <form onSubmit={e => { handleSubmit(e) }}>
        <label>Email: </label>
        <br />
        <input
          name='email'
          type='email'
          required
        />
        <br />
        <label>Venmo \ Cashapp username:</label>
        <br />
        <input
          name='username'
          type='text'
          required
        />
        <br />
        <input
          className='submitButton'
          type='submit'
          value='Send Order'
        />
      </form>
    </div>
      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;