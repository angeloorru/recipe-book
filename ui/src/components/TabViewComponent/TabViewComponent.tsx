import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { RecipesComponent } from '../RecipeComponent/RecipesComponent';
import SearchComponent from '../SearchComponent/SearchComponent';

export default function TabViewComponent() {
  const [value, setValue] = React.useState<string>('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="View all recipes" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><SearchComponent /></TabPanel>
        <TabPanel value="2">Load add new recipe form</TabPanel>
        <TabPanel value="3"><RecipesComponent /></TabPanel>
      </TabContext>
    </Box>
  );
}
