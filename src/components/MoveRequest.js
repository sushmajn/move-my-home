import React, { useState } from 'react';
import './MoveRequest.css';
import HomeIcon from '@mui/icons-material/Home';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsIcon from '@mui/icons-material/Directions';
import WarningIcon from '@mui/icons-material/Warning';
import EditIcon from '@mui/icons-material/Edit';
import InventoryDetails from './InventoryDetails';

function MoveRequest({ move }) {
  const [movingDate, setMovingDate] = useState(new Date(move.moving_on).toISOString().slice(0, 16));
  const [isFlexible, setIsFlexible] = useState(move.custom_status === "flexible");
  const [isEditingDate, setIsEditingDate] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [clicked, setClicked] = useState(false);


  const handleClick = () => {
    setShowDetails(!showDetails);
    setClicked(!clicked);
  };

  const houseDetails = {
    existing_floor_no: move.old_floor_no || 'N/A',
    existing_elevator_available: move.old_elevator_availability === 'Yes' ? 'Yes' : 'No',
    existing_packing_required: move.packing_service === 'Yes' ? 'Yes' : 'No',
    existing_distance: move.old_parking_distance || 'N/A',
    existing_additional_info: move.old_house_additional_info || 'No additional info',
    new_floor_no: move.new_floor_no || 'N/A',
    new_elevator_available: move.new_elevator_availability === 'Yes' ? 'Yes' : 'No',
    new_packing_required: move.unpacking_service === 'Yes' ? 'Yes' : 'No',
    new_distance: move.new_parking_distance || 'N/A',
    new_additional_info: move.new_house_additional_info || 'No additional info',
  };

  return (
    <div className="move-request">
      <div className="move-info">
        <div>
          <p> From: {move.moving_from}</p>

          <DirectionsIcon style={{ margin: '0 10px', color: '#EF553B' }} />

          <p> To: {move.moving_to}</p>
        </div>
        <p>Request#: <span style={{ color: '#EF553B' }}>{move.estimate_id}</span></p>
      </div>
      <div className="move-details">
        <div>
          <div className="icon-with-text"><HomeIcon style={{ color: '#EF553B' }} /> {move.property_size}</div>
          <div className="icon-with-text"><LocalShippingIcon style={{ color: '#EF553B' }} /> {move.total_items} </div>
          <div className="icon-with-text"><ModeOfTravelIcon style={{ color: '#EF553B' }} /> {move.distance}</div>

          <div className="icon-with-text">
            <DateRangeIcon style={{ color: '#EF553B' }} />

            {isEditingDate ? (
              <input
                type="datetime-local"
                value={movingDate}
                onChange={(e) => setMovingDate(e.target.value)}
                style={{ marginLeft: '5px' }}
              />
            ) : (
              <>
                <span>{new Date(movingDate).toLocaleString()}</span>
                <EditIcon
                  style={{ marginLeft: '5px', cursor: 'pointer' }}
                  onClick={() => setIsEditingDate(true)}
                />
              </>
            )}
          </div>

          <div className="icon-with-text">
            <label>
              <input
                type="checkbox"
                checked={isFlexible}
                onChange={() => setIsFlexible(!isFlexible)}
              />
              Is flexible
            </label>
          </div>

        </div>
        <div className="move-actions">
          <button
            className={`details-button ${clicked ? 'clicked' : ''}`}
            onClick={handleClick}
          >
            {showDetails ? 'Hide move details' : 'View move details'}
          </button>
          <button className="quotes-button">Quotes Awaiting</button>
        </div>
      </div>
      <span className="disclaimer"><WarningIcon style={{ color: '#EF553B', marginRight: '5px',marginBottom:'-4px' }} /><strong>Disclaimer</strong>: Please update your move date before two days of shifting</span>
      {showDetails && <InventoryDetails items={move.items} houseDetails={houseDetails} />}

    </div>
  );
}

export default MoveRequest;

