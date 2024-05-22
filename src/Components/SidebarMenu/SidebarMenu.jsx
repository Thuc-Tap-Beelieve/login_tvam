import React from 'react';
import './SidebarMenu.css'; 

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li><a href="#">Mục 1</a></li>
          <li><a href="#">Mục 2</a></li>
          <li><a href="#">Mục 3</a></li>
          {/* Thêm các mục menu khác tại đây nếu cần */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
