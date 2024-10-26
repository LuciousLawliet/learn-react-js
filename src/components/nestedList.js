import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Collapse,
} from '@mui/material';

// Sample menu data structure
const menuData = [
  {
    name: 'MASTER',
    children: [
      {
        name: 'Master Struktur',
        children: [
          {
            name: 'Level 1.1.1',
            children: [
              {
                name: 'Level 1.1.1.1',
                children: [
                  {
                    name: 'Level 1.1.1.1.1',
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Master Hak Akses',
        children: [
            {
                name: 'Level 1.2.1',
                children: [
                    {
                        name: 'Level 1.2.1.1',
                        children: [
                            {
                                name: 'level 1.2.1.1.1',
                                children: [],
                            }
                        ],
                    }
                ],
              },
        ],
      },
    ],
  },
];

const NestedMenu = () => {
  const [openMenu, setOpenMenu] = useState({});

  const handleToggle = (level) => {
    setOpenMenu((prev) => ({
      ...prev,
      [level]: !prev[level],
    }));
  };

  const renderMenuItems = (items, levelPrefix) => {
    return items.map((item, love) => {
      const level = `${levelPrefix}-${love}`;
      return (
        <div key={level}>
          <ListItemButton onClick={() => handleToggle(level)}>
            <ListItemText primary={item.name} />
          </ListItemButton>
          {item.children && item.children.length > 0 && (
            <Collapse in={openMenu[level]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderMenuItems(item.children, level)}
              </List>
            </Collapse>
          )}
        </div>
      );
    });
  };

  return (
    <List>
      {renderMenuItems(menuData, 'da')}
    </List>
  );
};

export default NestedMenu;