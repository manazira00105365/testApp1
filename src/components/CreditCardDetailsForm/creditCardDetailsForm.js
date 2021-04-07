import './creditCardDetails.css';

function CreditCardDetailsForm() {
    return (
        <div class="paymentForm">
          <h3>Payment Details</h3>
          <table cellPadding="0" cellSpacing="0">
            <tr>
              <td class="label">
                <label>Card Holder Name:</label>
              </td>
              <td class="field">
                <input type="text" name="" id="chn" />
              </td>
            </tr>
            <tr>
              <td class="label">
                <label>Credit Card Number:</label>
              </td>
              <td class="field">
                <input type="number" name="" id="ccn" />
              </td>
            </tr>
            <tr>
              <td class="label">
                <label>Credit Card Type:</label>
              </td>
              <td class="field">
                <input type="text" name="" id="cct" />
              </td>
            </tr>
            <tr>
              <td class="label">
                <label>Expiry Date:</label>
              </td>
              <td class="field">
                <input type="text" name="" id="ed" />
              </td>
            </tr>
            <tr>
              <td class="label">
                <label>Security Code:</label>
              </td>
              <td class="field">
                <input type="number" name="" id="sc" />
              </td>
            </tr>
            <tr>
              <td class="label">
                <label>Zip Code:</label>
              </td>
              <td class="field">
                <input type="text" name="" id="zc" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button class="submit">Submit</button>
              </td>
            </tr>
          </table>
        </div>
    );
}

export default CreditCardDetailsForm;