import React, { useState } from 'react';
import './InventoryDetails.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function InventoryDetails({ items, houseDetails }) {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const rooms = [
    { name: 'Living Room', key: 'living_room' },
    { name: 'Bed Room', key: 'bed_room' },
    { name: 'Kitchen', key: 'kitchen' },
    { name: 'Bathroom', key: 'bathroom' },
  ];

  return (
    <div className="inventory-details">
      <h3>Inventory Details <button className="edit-inventory-button">Edit Inventory</button></h3>
      {rooms.map((room) => (
        <div key={room.key} className="inventory-section">
          <div className="inventory-header" onClick={() => toggleSection(room.key)}>
            <span>{room.name} (0)</span>
            {expandedSection === room.key ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          {expandedSection === room.key && (
            <div className="inventory-items">
              <div className="category">
                <h4>Furnitures</h4>
                <p>No items</p>
              </div>
              <div className="category">
                <h4>Electricals</h4>
                <p>No items</p>
              </div>
              <div className="category">
                <h4>Fragile</h4>
                <p>No items</p>
              </div>
            </div>
          )}
        </div>
      ))}
      <h3>House Details <button className="edit-house-button">Edit House Details</button></h3>
      <div className="house-details">
        <h4>Existing House Details</h4>
        <div className="house-details-row">
          <span><strong>Floor No</strong>: {houseDetails.existing_floor_no}</span>
          <span><strong>Elevator Available</strong>: {houseDetails.existing_elevator_available}</span>
          <span><strong>Packing Required</strong>: {houseDetails.existing_packing_required}</span>
          <span><strong>Distance from truck to door</strong>: {houseDetails.existing_distance} meters</span>
        </div>
        <div className="house-details-row">
          <span><strong>Additional Information</strong>: {houseDetails.existing_additional_info}</span>
        </div>
      </div>
      <div className="house-details">
        <h4>New House Details</h4>
        <div className="house-details-row">
          <span><strong>Floor No</strong>: {houseDetails.new_floor_no}</span>
          <span><strong>Elevator Available</strong>: {houseDetails.new_elevator_available}</span>
          <span><strong>Packing Required</strong>: {houseDetails.new_packing_required}</span>
          <span><strong>Distance from truck to door</strong>: {houseDetails.new_distance} meters</span>
        </div>
        <div className="house-details-row">
          <span><strong>Additional Information</strong>: {houseDetails.new_additional_info}</span>
        </div>
      </div>
    </div>
  );
}

export default InventoryDetails;

