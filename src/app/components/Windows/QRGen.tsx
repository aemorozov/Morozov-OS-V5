import { getMoreSettings, clickXLSButton, clickPDFButton } from "./QRGenFunctions";

export const QRGen = () => {
  return (
    <div className="content-with-content">
      <div className="amount_block">
        <input
          className="how-many-qr-codes"
          type="number"
          placeholder="How many unique QRs do you need?*"
          min="1"
          max="99999"
        />
      </div>
      <div className="more_settings_button" onClick={getMoreSettings}>
        Optional settings
      </div>
      <div className="settings_block">
        <input
          className="qr-code-length"
          type="number"
          placeholder="What QR code length do you need?"
          min="1"
          max="99"
        />
        <input className="start-value" type="number" placeholder="Start value" min="0" />
        {/* <input className="prefix" type="text" placeholder="Prefix" /> */}
        {/* <input className="suffix" type="text" placeholder="Suffix" /> */}
        <select className="selectPaperSize">
          <option>Paper size: А4</option>
        </select>
      </div>
      <button className="create_XLS_button" onClick={clickXLSButton}>
        1. Create 'data.xlsx'
      </button>
      <button className="create_button" onClick={clickPDFButton} title="Create XML to the first">
        2. Create 'QRs.pdf'
      </button>
    </div>
  );
};
