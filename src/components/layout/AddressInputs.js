"use client";
export default function AddressInputs({ addressProps, setAddressProps }) {
  const { phone, streetAddress, postalCode, city, country } = addressProps;
  return (
    <>
      <label>Phone:</label>
      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(ev) => setAddressProps("phone", ev.target.value)}
      />
      <label>Street address:</label>
      <input
        type="text"
        placeholder="Street address"
        value={streetAddress}
        onChange={(ev) => setAddressProps("streetAddress", ev.target.value)}
      />
      <div className="flex gap-2 justify-between">
        <div>
          <label>Postal code:</label>
          <input
            type="text"
            placeholder="Postal code"
            value={postalCode}
            onChange={(ev) => setAddressProps("postalCode", ev.target.value)}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(ev) => setAddressProps("city", ev.target.value)}
          />
        </div>
      </div>
      <label>Country:</label>
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(ev) => setAddressProps("country", ev.target.value)}
      />
    </>
  );
}
