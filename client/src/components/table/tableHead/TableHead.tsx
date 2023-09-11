export function TableHead(){
  return (
    <thead>
      <tr>
        <th className={'table-row__td'} colSpan={1}>Rank</th>
        <th className={'table-row__td'} colSpan={1}>Name</th>
        <th className={'table-row__td'} colSpan={1}>Price</th>
        <th className={'table-row__td'} colSpan={1}>Market Cap</th>
        <th className={'table-row__td'} colSpan={1}>VWAP (24Hr)</th>
        <th className={'table-row__td'} colSpan={1}>Supply</th>
        <th className={'table-row__td'} colSpan={1}>Volume (24Hr)</th>
        <th className={'table-row__td'} colSpan={1}>Change (24Hr)</th>
      </tr>
    </thead>
  );
};

