import React, { useState } from 'react';
import './SideBar.css';

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
  };

  const handleEventChange = (event) => {
    setSelectedEvent(event);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedStyle('');
    setSelectedEvent('');
    setSelectedColor('');
  };

  return (
    <div className="sidebar">
      <div className="search-box">
        <input
          type="text"
          placeholder="Gợi ý..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="filter-section">
        <h3>- Di dâu</h3>
        <ul>
          <li onClick={() => handleCategoryChange('Công việc')}>Công việc</li>
          <li onClick={() => handleCategoryChange('Thể thao')}>Thể thao</li>
          <li onClick={() => handleCategoryChange('Hẹn hò')}>Hẹn hò</li>
          <li onClick={() => handleCategoryChange('Du lịch')}>Du lịch</li>
          <li onClick={() => handleCategoryChange('Sự kiện đặc biệt')}>Sự kiện đặc biệt</li>
        </ul>
      </div>
      <div className="filter-section">
        <h3>- Style</h3>
        <ul>
          <li onClick={() => handleStyleChange('Năng động')}>Năng động</li>
          <li onClick={() => handleStyleChange('Vintage')}>Vintage</li>
          <li onClick={() => handleStyleChange('Thanh lịch')}>Thanh lịch</li>
          <li onClick={() => handleStyleChange('Cổ điển')}>Cổ điển</li>
          <li onClick={() => handleStyleChange('Boho')}>Boho</li>
          <li onClick={() => handleStyleChange('Streetwear')}>Streetwear</li>
          <li onClick={() => handleStyleChange('Romantic')}>Romantic</li>
        </ul>
      </div>
      <div className="filter-section">
        <h3>- Sự kiện đặc biệt</h3>
        <ul>
          <li onClick={() => handleEventChange('Tết')}>Tết</li>
          <li onClick={() => handleEventChange('Valentine')}>Valentine</li>
          <li onClick={() => handleEventChange('Halloween')}>Halloween</li>
          <li onClick={() => handleEventChange('Lễ hội')}>Lễ hội</li>
        </ul>
      </div>
      <div className="filter-section">
        <h3>- Tone màu</h3>
        <ul className="color-list">
          <li onClick={() => handleColorChange('Trắng')} className="color-option white"></li>
          <li onClick={() => handleColorChange('Đỏ')} className="color-option red"></li>
          <li onClick={() => handleColorChange('Tím')} className="color-option purple"></li>
          <li onClick={() => handleColorChange('Vàng')} className="color-option yellow"></li>
          <li onClick={() => handleColorChange('Đen')} className="color-option black"></li>
          <li onClick={() => handleColorChange('Xám')} className="color-option gray"></li>
          <li onClick={() => handleColorChange('Xanh')} className="color-option blue"></li>
          <li onClick={() => handleColorChange('Ghi')} className="color-option olive"></li>
          <li onClick={() => handleColorChange('Tím than')} className="color-option indigo"></li>
          <li onClick={() => handleColorChange('Nâu')} className="color-option brown"></li>
          <li onClick={() => handleColorChange('Cam')} className="color-option orange"></li>
          <li onClick={() => handleColorChange('Bê')} className="color-option beige"></li>
          <li onClick={() => handleColorChange('Cơm')} className="color-option green"></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;