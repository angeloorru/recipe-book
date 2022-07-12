import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { SyntheticEvent, useState } from 'react';
// eslint-disable-next-line import/extensions
import { RecipesComponent } from '../RecipeComponent/RecipesComponent';
// eslint-disable-next-line import/extensions
import SearchComponent from '../SearchComponent/SearchComponent';
// eslint-disable-next-line import/extensions
import FormComponent from '../FormComponent/FormComponent';

export default function TabViewComponent() {
  const [value, setValue] = useState<string>('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab className="tab-1" label="Search" value="1" />
            <Tab className="tab-2" label="Add Recipe" value="2" />
            <Tab className="tab-3" label="View all recipes" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><SearchComponent /></TabPanel>
        <TabPanel value="2"><FormComponent /></TabPanel>
        <TabPanel value="3"><RecipesComponent /></TabPanel>
      </TabContext>
    </Box>
  );
}
