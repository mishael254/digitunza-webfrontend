// CountiesByStatlog.js

import React, { useEffect, useState } from 'react';

const CountiesByStatlog = ({ statlogs }) => {
  const [sortedCounties, setSortedCounties] = useState([]);

  useEffect(() => {
    // 1. Filter statlogs by presentcounty
    const filteredStatlogs = statlogs.filter(statlog => statlog.presentcounty);

    // 2. Count occurrences of each county
    const countyCounts = filteredStatlogs.reduce((counts, statlog) => {
      const { presentcounty } = statlog;
      counts[presentcounty] = (counts[presentcounty] || 0) + 1;
      return counts;
    }, {});

    // 3. Sort counties by occurrence in descending order
    const sortedCountiesArray = Object.keys(countyCounts).sort((a, b) => countyCounts[b] - countyCounts[a]);

    // 4. Count occurrences of each locality within a county
    const countyLocalityCounts = filteredStatlogs.reduce((counts, statlog) => {
      const { presentcounty, presentlocality } = statlog;
      counts[presentcounty] = counts[presentcounty] || {};
      counts[presentcounty][presentlocality] = (counts[presentcounty][presentlocality] || 0) + 1;
      return counts;
    }, {});

    // 5. Calculate percentage for each county based on the number of localities
    const totalLocalities = filteredStatlogs.length;

    const countiesWithPercentage = sortedCountiesArray.map(county => {
      const localitiesInCounty = countyLocalityCounts[county] ? Object.keys(countyLocalityCounts[county]).length : 0;
      const percentage = totalLocalities > 0 ? (localitiesInCounty / totalLocalities) * 100 : 0;

      return {
        county,
        localities: countyLocalityCounts[county] || {},
        percentage: percentage.toFixed(2), // Format percentage to two decimal places
      };
    });

    // 6. Update the state with the sorted counties and locality counts
    setSortedCounties(countiesWithPercentage);
  }, [statlogs]); // Re-run this effect whenever statlogs change

  return (
    <table className="table">
      <tbody>
        {sortedCounties.map((data, index) => (
          <tr key={index}>
            <td>
              <div className="flag">
                {/* You can add the flag image source here */}
                <img alt="..." src="" />
              </div>
            </td>
            <td >{data.county}</td>
            
            <td >{`${data.percentage}%`}</td>
            <td>
              {/* List of projects in this county */}
              <ul>
                {statlogs
                  .filter(statlog => statlog.presentcounty === data.county)
                  .map((project, projectIndex) => (
                    <li key={projectIndex}>{project.project}</li>
                  ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CountiesByStatlog;
